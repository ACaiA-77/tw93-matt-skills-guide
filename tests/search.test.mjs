import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { filterSkills, normalizeQuery, statusClassName } from '../assets/app.js';

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

test('filterSkills returns original array for empty query', () => {
  assert.equal(filterSkills(skills, ''), skills);
  assert.equal(filterSkills(skills, '   '), skills);
  assert.equal(filterSkills(skills, undefined), skills);
});

test('filterSkills returns empty array for unmatched Chinese query', () => {
  assert.deepEqual(filterSkills(skills, '不存在的技能关键词'), []);
});

test('statusClassName creates a base and status-specific class', () => {
  assert.equal(statusClassName('deprecated'), 'skill-status status-deprecated');
  assert.equal(statusClassName('in-progress'), 'skill-status status-in-progress');
});

test('skill-status receives the base badge colors', async () => {
  const css = await readFile(new URL('../assets/styles.css', import.meta.url), 'utf8');
  assert.match(css, /\.status,\s*\.skill-status\s*\{[\s\S]*border:\s*1px solid var\(--line\);[\s\S]*background:\s*var\(--surface-alt\);[\s\S]*color:\s*var\(--navy\);/);
});
