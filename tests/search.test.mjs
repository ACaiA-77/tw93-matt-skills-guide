import test from 'node:test';
import assert from 'node:assert/strict';
import { filterSkills, normalizeQuery } from '../assets/app.js';

const skills = [
  {
    name: 'think',
    author: 'tw93',
    collection: 'Waza',
    status: 'stable',
    description: '编码前完成架构设计。',
    recommended: '新功能规划。',
    notRecommended: 'Bug 修复。',
  },
  {
    name: 'tdd',
    author: 'Matt Pocock',
    collection: 'Engineering',
    status: 'stable',
    description: '红绿重构循环。',
    recommended: '功能开发。',
    notRecommended: '大型纯重构。',
  },
];

test('normalizeQuery trims and lowercases text', () => {
  assert.equal(normalizeQuery('  TDD  '), 'tdd');
});

test('filterSkills searches each documented field', () => {
  assert.deepEqual(filterSkills(skills, '架构').map((skill) => skill.name), ['think']);
  assert.deepEqual(filterSkills(skills, 'Matt').map((skill) => skill.name), ['tdd']);
  assert.deepEqual(filterSkills(skills, 'stable').map((skill) => skill.name), ['think', 'tdd']);
  assert.deepEqual(filterSkills(skills, '纯重构').map((skill) => skill.name), ['tdd']);
});
