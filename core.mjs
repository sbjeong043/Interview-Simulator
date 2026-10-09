import {finalSet} from './final-data.mjs?v=paper-v3';
export const defaultSet=finalSet;
export const uid=()=>globalThis.crypto?.randomUUID?.()||Date.now()+'-'+Math.random().toString(36).slice(2);
export function shuffle(items){let a=[...items];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function evaluate(q,answer){
 if(!answer.trim())throw Error('답변을 입력해주세요.');
 const a=answer.toLowerCase().replace(/\s/g,'');
 const hit=q.keywords.filter(k=>k.split('/').some(v=>a.includes(v.toLowerCase().replace(/\s/g,''))));
 const gaps=q.keywords.filter(k=>!hit.includes(k));const ratio=hit.length/Math.max(1,q.keywords.length);
 const dimensions=[Math.round(ratio*40),ratio?Math.min(25,(/경험|프로젝트|사례|실제로|당시|예를/.test(answer)?15:4)+(/\d|결과|합의|구현|개선/.test(answer)?10:0)):0,Math.round(ratio*20),ratio?(answer.length>=70&&answer.length<=650?15:answer.length>=30?8:3):0];
 return {score:dimensions.reduce((a,b)=>a+b,0),dimensions,hit,gaps,strengths:hit.length?`핵심 표현 ${hit.join(' · ')}을 담았습니다.`:'질문과 연결되는 핵심 표현을 아직 확인하지 못했습니다.',advice:gaps.length?`${gaps.slice(0,3).join(' · ')} 내용을 자신의 경험으로 보완해보세요. 결론 → 근거/사례 → 기여 순서로 정리하면 좋습니다.`:'핵심 표현은 충분합니다. 본인의 행동과 결과가 명확한지, 실제로 하지 않은 경험을 넣지 않았는지 확인하세요.'};
}
export function startSession(setId,kind,questions,scope='all'){if(!questions.length)throw Error('질문을 추가해주세요.');return{id:uid(),setId,kind,scope,questions:shuffle(questions),answers:[],index:0,draft:'',hint:false,complete:false,created:new Date().toISOString()}}
export function submitAnswer(s,answer){if(!answer.trim())throw Error('답변을 입력해주세요.');if(s.complete)throw Error('이미 완료한 회차입니다.');return{...s,answers:[...s.answers,{question:s.questions[s.index],answer,hint:s.hint, ...(s.kind==='practice'?{evaluation:evaluate(s.questions[s.index],answer)}:{})}],index:s.index+1,draft:'',hint:false,complete:s.index+1===s.questions.length}}
export function parseScript(text){
 const lines=text.trim().split(/\r?\n/);let out=[],q=null;
 for(let line of lines){line=line.trim();if(!line)continue;const isQ=/^(?:#{1,4}\s*|\d+[.)]\s*|질문\s*[:：]|Q[.:：]\s*)/.test(line)||line.endsWith('?');if(isQ){q={id:uid(),prompt:line.replace(/^(?:#{1,4}\s*|\d+[.)]\s*|질문\s*[:：]|Q[.:：]\s*)/,''),reference:'',keywords:[],category:'main'};out.push(q)}else if(q)q.reference+=(q.reference?'\n':'')+line.replace(/^(답변|A)\s*[:：.]\s*/,'');}
 for(let item of out)item.keywords=[...new Set(item.reference.replace(/[.,!?]/g,' ').split(/\s+/).filter(w=>w.length>=2&&w.length<=12))].slice(0,5);
 return out;
}
export function validateImport(data){if(!data||!Array.isArray(data.sets)||!data.sets.length)throw Error('면접 세트 JSON 파일을 선택해주세요.');for(let s of data.sets){if(typeof s.company!=='string'||typeof s.role!=='string'||!Array.isArray(s.questions)||!s.questions.length)throw Error('세트 형식이 올바르지 않습니다.');for(let q of s.questions)if(typeof q.prompt!=='string'||!q.prompt.trim()||typeof q.reference!=='string'||!Array.isArray(q.keywords)||!q.keywords.length||q.keywords.some(k=>typeof k!=='string'||!k.trim())||!['main','extra'].includes(q.category))throw Error('질문·답변·키워드·분류를 확인해주세요.');}return data.sets.map(s=>({...s,id:uid(),questions:s.questions.map(q=>({...q,id:uid()}))}))}
export function importSessions(data,imported){if(!Array.isArray(data.sessions))return[];const map=new Map(data.sets.map((s,i)=>[s.id,imported[i].id]));return data.sessions.map(s=>{if(!s.complete||!map.has(s.setId)||!['practice','exam'].includes(s.kind)||!Array.isArray(s.answers)||!s.answers.length||!Number.isFinite(Date.parse(s.created)))throw Error('백업 기록 형식이 올바르지 않습니다.');let answers=s.answers.map(a=>{validateImport({sets:[{company:'검증',role:'검증',questions:[a.question]}]});if(typeof a.answer!=='string'||!a.answer.trim())throw Error('답변 기록 형식이 올바르지 않습니다.');return{question:a.question,answer:a.answer,hint:!!a.hint,evaluation:evaluate(a.question,a.answer)}});return{id:uid(),setId:map.get(s.setId),kind:s.kind,scope:s.scope,questions:answers.map(a=>a.question),answers,index:answers.length,complete:true,created:s.created}})}
export function canStart(state){return !state.current}

export function migrateDefault(state){if(state.resetVersion==='paper-v3')return state;const sets=[...state.sets.filter(s=>!['navien','navien-final-v2',defaultSet.id].includes(s.id)),structuredClone(defaultSet)];return {...state,sets,selected:defaultSet.id,sessions:[],current:null,resetVersion:'paper-v3'}}
export function resetGame(state,confirmed){return confirmed?{...state,sessions:[],current:null}:state}
