import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as core from '../core.mjs';
test('최종본 31개 질문과 16개 주요 질문',()=>{assert.equal(core.defaultSet?.questions.length,31);assert.equal(core.defaultSet.questions.filter(q=>q.category==='main').length,16)});
test('빈 답변 차단',()=>assert.throws(()=>core.evaluate({keywords:[]},'  ')));
test('무관한 긴 답변은 높은 점수를 받지 않는다',()=>assert.ok(core.evaluate({keywords:['하드웨어','신호','상태'],reference:''},'오늘 날씨가 좋습니다. '.repeat(60)).score<40));
test('문항은 중복 없이 섞인다',()=>{let a=core.shuffle([1,2,3,4]);assert.deepEqual([...a].sort(),[1,2,3,4])});
test('스크립트 질문 답변 파싱',()=>{let qs=core.parseScript('1. 왜 지원했나요?\n제품과 사용자 경험을 연결하고 싶습니다.\n2. 강점은?\n양산 경험이 있습니다.');assert.equal(qs.length,2);assert.ok(qs[0].reference.includes('사용자'))});
test('손상된 가져오기 거부',()=>assert.throws(()=>core.validateImport({sets:[{questions:[{}]}]})));
test('시험 완료 전에 점수가 노출되지 않는다',()=>{let s=core.startSession('x','exam',[{id:'a'},{id:'b'}]);s=core.submitAnswer(s,'첫 답변');assert.equal(s.complete,false);assert.equal(s.answers[0].evaluation,undefined);assert.throws(()=>core.submitAnswer(s,''))});
test('다른 회사에 진행 회차가 있어도 덮어쓰지 않는다',()=>assert.equal(core.canStart({selected:'b',current:{setId:'a'}}),false));
test('백업 평가에 HTML이 있어도 안전한 점수로 재계산한다',()=>{let q=core.defaultSet.questions[0];let d={sets:[core.defaultSet],sessions:[{complete:true,setId:core.defaultSet.id,kind:'exam',created:new Date().toISOString(),answers:[{question:q,answer:q.reference,evaluation:{score:100,dimensions:['<img src=x onerror=alert(1)>']}}]}]};let imported=core.validateImport(d);assert.ok(core.importSessions(d,imported)[0].answers[0].evaluation.dimensions.every(Number.isFinite))});

test('기존 세트와 진행 회차를 보존하며 최종본을 추가한다',()=>{let old={sets:[{id:'navien',company:'경동나비엔',questions:[]}],selected:'navien',sessions:[{setId:'navien'}],current:{setId:'navien'}};let next=core.migrateDefault(old);assert.equal(next.current.setId,'navien');assert.equal(next.sessions[0].setId,'navien');assert.ok(next.sets.some(s=>s.id===core.defaultSet.id));assert.equal(core.migrateDefault(next).sets.length,next.sets.length)});
test('진행 회차가 없으면 최종본을 기본으로 선택한다',()=>{let s=core.migrateDefault({sets:[{id:'navien'}],selected:'navien',sessions:[],current:null});assert.equal(s.selected,core.defaultSet.id);assert.equal(s.sets[0].id,'navien')});
test('최종본의 새 핵심 주제와 역질문 선택지가 있다',()=>{let qs=core.defaultSet.questions;assert.ok(qs.some(q=>q.reference.includes('상생의 동반자')));assert.ok(qs.some(q=>q.reference.includes('로그')&&q.reference.includes('부족')));assert.ok(qs.at(-1).reference.includes('2순위'));assert.ok(qs.at(-1).reference.includes('실무 책임자'))});
