const rows=[
['자기소개를 해주세요.','7년,하드웨어,양산,선행,생활 공간','약 7년간 차량 디스플레이 UX/UI를 담당했습니다. 제품의 상태와 복잡한 기능을 사용자가 쉽게 이해하도록 설계했고, 양산 디자인시스템과 선행 기획을 경험했습니다. 이 하드웨어 제어 UX 경험을 집이라는 생활 공간으로 확장해 경동나비엔 제품 사용 경험에 기여하고 싶습니다.'],
['왜 경동나비엔에 지원했나요?','생활 공간,공조,자동화,경험,기여','자동차에서 쌓은 하드웨어와 소프트웨어를 연결하는 UX 경험을 생활 공간으로 확장하고 싶습니다. 공조 제어, 자동화, 제품 상태를 UI로 연결해온 경험을 바탕으로 여러 생활환경 제품을 쉽게 사용하는 경험에 기여하고 싶습니다.'],
['자동차에서 오래 일했는데 왜 HVAC인가요?','하드웨어,상태,공조,조건,확장','자동차와 스마트홈은 모두 하드웨어의 상태와 신호를 이해하고 조작 경험으로 연결한다는 공통점이 있습니다. Mahindra 프로젝트에서 공조 기능의 상태와 조건을 개발자와 확인하며 사양과 UI를 함께 설계했습니다. 이를 집이라는 공간으로 확장하려 합니다.'],
['왜 현재 회사를 퇴사하려고 하나요?','양산,선행,유지,기획,사용자','양산부터 선행까지 경험을 쌓았지만 최근에는 파생·유지 업무 비중이 높아졌습니다. 앞으로 사용자 문제를 찾고 새로운 기능을 초기 기획부터 실제 제품까지 연결하는 일을 더 하고 싶습니다. UI 기획 직무가 이 방향과 맞아 이직을 결정했습니다.'],
['왜 정수빈 씨를 뽑아야 하나요?','하드웨어,상태,신호,조건,디자인시스템','모바일·웹의 화면 중심 UI뿐 아니라 실제 하드웨어의 동작과 상태를 함께 고려하는 제품 UI를 경험했습니다. 차량 신호와 기능의 활성·비활성 조건을 이해하고 실제 동작과 화면이 맞도록 설계해왔습니다. 양산·선행과 디자인시스템 경험을 경동나비엔의 제품에 적용하고 발전시키는 데 기여하겠습니다.'],
['입사하면 어떤 점에서 가장 보람을 느낄 것 같나요?','일상,사용,제품,경험','해외 자동차 프로젝트에서는 제가 참여한 차량을 실제 생활에서 직접 사용할 기회가 적었습니다. 경동나비엔에서는 저와 주변 사람들이 일상에서 사용하는 제품에 기여하며 실제 사용 경험을 확인하고 개선할 수 있다는 점에서 보람을 느낄 것 같습니다.'],
['10년 뒤 어떤 모습이고 싶나요?','스마트홈,연결,생활,UX','여러 제품과 서비스를 연결해 생활을 더 편리하게 만드는 UX 기획자로 성장하고 싶습니다. 사용자가 특별히 의식하지 않아도 제가 만든 경험이 일상에 자연스럽게 녹아 있도록 기여하고 싶습니다.'],
['성격의 장점은 무엇인가요?','꾸준,책임,3년,양산','긴 호흡의 일을 끝까지 꾸준히 가져갑니다. 약 3년 걸리는 자동차 개발에서 초기 사양부터 디자인, 개발 이슈, 양산 이후 파생까지 책임지고 참여했습니다. 문제를 하나씩 해결하는 과정에 몰입하는 성향이 있고 러닝도 꾸준히 이어가고 있습니다.'],
['성격의 단점은 무엇인가요?','직설,먼저 듣,제약,개선','결론과 해결책을 빠르게 말해 의견이 직설적으로 들릴 때가 있습니다. 최근에는 상대의 의견과 개발 제약을 먼저 듣고 이해한 뒤 대안을 제안하려고 노력합니다. 실제 조건과 데이터를 함께 확인하며 판단하는 방식으로 개선하고 있습니다.'],
['가장 뿌듯했던 프로젝트는 무엇인가요?','Shift,UT,3D,개발,데모','Shift+에서 UT로 불편을 확인하고 구조 개선과 디자인 개선을 구분했습니다. 내부 프로세스가 없던 3D 차량 적용도 외부 업체·개발자와 구현 방식을 정리하며 실제 IVI와 음성 명령이 연동되는 데모까지 만들었습니다. 조사부터 구현까지 연결한 경험입니다.','extra'],
['개발자와 의견이 충돌한 경험이 있나요?','텍스트,가독성,데이터,5건,예외','주유 예약 서비스에서 긴 텍스트 때문에 전체 글자 크기를 줄이자는 제안이 있었습니다. 가독성을 지키기 위해 실제 발생 빈도를 함께 확인했고 약 5건의 예외로 파악했습니다. 일반 UI는 유지하고 해당 경우만 예외 처리하는 방향으로 합의했습니다.','extra'],
['의견 충돌을 어떻게 해결하나요?','이유,기준,대안,결정','먼저 상대 의견의 이유가 일정·기술·성능 제약 중 무엇인지 확인합니다. 핵심 사용자 경험을 함께 정리하고 데이터와 실제 조건을 공통 기준으로 삼습니다. 제약 안에서 가능한 대안을 찾고 팀의 결정 후에는 같은 방향으로 결과를 만드는 데 집중합니다.'],
['새로운 분야인데 어떻게 적응하겠어요?','제품,상태,센서,예외,직접','새 화면을 제안하기 전에 제품 동작과 기존 서비스 기준을 이해하겠습니다. 제품 상태와 센서 조건, 가능한 조작과 예외 상황을 학습하고 직접 제품을 사용해본 뒤 UI로 연결하겠습니다. 자동차 신호를 익혔던 경험을 활용하겠습니다.'],
['입사 후 어떤 UX를 해보고 싶나요?','자동화,이유,개입,통제','자동화가 왜 현재 방식으로 동작하는지 사용자가 이해하고 필요하면 직접 개입할 수 있도록 설계하고 싶습니다. 온도와 풍량이라는 값보다 집을 따뜻하고 쾌적하게 만들려는 목적을 중심으로, 편리하면서도 통제 가능한 UX를 고민하겠습니다.','extra'],
['자동차 분야로 다시 돌아갈 생각은 없나요?','확장,하드웨어,생활 공간,성장','이번 이직은 자동차 경험을 버리는 것보다 하드웨어 제어 UX를 다른 생활 공간으로 확장하는 선택입니다. 공조·자동화·상태 전달 경험을 집에서도 활용하며 다양한 제품과 공간을 연결하는 기획자로 성장하고 싶습니다.','extra'],
['마지막으로 하고 싶은 말이 있나요?','생활 공간,양산,선행,배우,기여','자동차에서 복잡한 기능과 상태를 쉽게 이해하고 조작하는 경험을 만들었습니다. 이를 집이라는 생활 공간으로 확장하고 싶습니다. 양산·선행·디자인시스템 경험을 활용하면서 새로운 제품을 배우고 실제 결과로 기여하겠습니다.'],
['임원에게 하고 싶은 역질문이 있나요?','역할,사용자,제품 방향,디자인시스템','UX/UI 조직이 사양을 화면으로 구현하는 것을 넘어 사용자 관점에서 기능과 사용 흐름을 제안하고 제품 방향에 의견을 반영하는 역할까지 어느 정도 기대하시는지 궁금합니다. 디자인시스템 구축 이후 이 포지션이 어떤 영역까지 확장되길 기대하시는지도 여쭙고 싶습니다.']
];
export const defaultSet={id:'navien',company:'경동나비엔',role:'UI 기획 · 2차 최고경영진 면접',source:'공유 대화의 최종 스크립트 기준',questions:rows.map((r,i)=>({id:'n'+i,prompt:r[0],keywords:r[1].split(','),reference:r[2],category:r[3]||'main'}))};
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
