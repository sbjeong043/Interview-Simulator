import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sessionSummary} from '../core.mjs';
test('session totals and rating boundaries',()=>{
 for(const [score,message] of [[90,'준비 완료! 당당하게 가즈아~'],[80,'꽤 괜찮은데? 조금만 더 다듬자!'],[60,'연습 게임 몇 번 더 해볼까?'],[40,'이렇게 갈 거야? 오답노트로 가자!'],[0,'미궁 속으로… 힌트부터 다시 잡자!']]){
 const result=sessionSummary({answers:[{evaluation:{score}},{evaluation:{score}}]});
 assert.equal(result.total,score*2); assert.equal(result.max,200); assert.equal(result.average,score); assert.equal(result.message,message);
 }
 assert.equal(sessionSummary({answers:[]}).average,0);
});
