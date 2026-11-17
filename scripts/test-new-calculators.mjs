import assert from 'node:assert/strict';
import { newCalculatorPages } from '../lib/newCalculatorPages.ts';
import { calculateGenericScore, scoreFromBands } from '../lib/genericScoring.ts';
import { liveApCalculators, getPrimaryCalculatorNavGroups } from '../lib/apCalculatorDirectory.ts';
import { existsSync } from 'node:fs';
assert.equal(Object.keys(newCalculatorPages).length, 8);
for (const [id, page] of Object.entries(newCalculatorPages)) {
  const config = page.calculator;
  const fields = config.groups.flatMap(g => g.fields);
  const values = fn => Object.fromEntries(fields.map(f => [f.id, fn(f)]));
  assert.equal(new Set(fields.map(f => f.id)).size, fields.length, id);
  assert.equal(config.sections.reduce((n,s) => n+s.weightedMax,0), config.compositeMax, id);
  for (const section of config.sections) assert.equal(section.fieldIds.reduce((n,fieldId) => n+fields.find(f=>f.id===fieldId).max,0),section.rawMax,id);
  assert.equal(calculateGenericScore(config,values(()=>0)).score,1,id);
  assert.equal(calculateGenericScore(config,values(f=>f.max)).composite,config.compositeMax,id);
  assert.equal(calculateGenericScore(config,values(f=>f.max)).score,5,id);
  assert.equal(calculateGenericScore(config,values(f=>f.max/2)).composite,config.compositeMax/2,id);
  assert.equal(calculateGenericScore(config,values(()=>-1)).composite,0,id);
  assert.equal(calculateGenericScore(config,values(()=>NaN)).composite,0,id);
  assert.equal(calculateGenericScore(config,values(()=>Infinity)).composite,0,id);
  assert.equal(calculateGenericScore(config,values(()=>999)).composite,config.compositeMax,id);
  for (const band of config.scoreBands) {
    assert.equal(scoreFromBands(config.scoreBands,band.min),band.score,id);
    if (band.score>1) assert.equal(scoreFromBands(config.scoreBands,band.min-0.0001),band.score-1,id);
  }
  // A point added to any field cannot reduce the estimate.
  for (const field of fields) {
    let previous=0;
    for(let n=0;n<=field.max;n++) {
      const result=calculateGenericScore(config,{...config.defaultValues,[field.id]:n});
      assert.ok(result.composite>=previous,id);previous=result.composite;
    }
  }
  const entry=liveApCalculators.find(e=>e.subjectId===id);
  assert.ok(entry,id);
  assert.ok(existsSync('app'+entry.href+'page.tsx'),id);
  assert.ok(getPrimaryCalculatorNavGroups().some(g=>g.items.some(e=>e.subjectId===id)),id);
  for (const link of page.relatedCalculators) assert.ok(existsSync('app'+link.href+'page.tsx'),link.href);
}
const run=(id,values)=>calculateGenericScore(newCalculatorPages[id].calculator,values);
assert.equal(run('ap_computer_science_a',{mcq:21,frq1:4,frq2:4,frq3:3,frq4:4}).composite,54.5);
assert.equal(run('ap_computer_science_principles',{mcq:35,frq1:3}).composite,50);
assert.equal(run('ap_microeconomics',{mcq:30,frq1:5,frq2:3,frq3:2}).composite,45);
assert.ok(Math.abs(run('ap_european_history',{mcq:33,frq1:2,frq2:2,frq3:2,frq4:4,frq5:3}).composite-59.119047619)<1e-8);
assert.equal(liveApCalculators.length,21);
console.log('PASS: eight calculator models, extrema, invalid inputs, every threshold, monotonicity, worked examples and navigation.');
