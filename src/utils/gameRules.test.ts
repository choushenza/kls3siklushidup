import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateSequence,
  calculateQuizScore,
  calculateProgress,
  evaluateBadges,
  ALL_BADGES
} from './gameRules';

test('validateSequence correctly compares ordered stages', () => {
  const correct = ['telur', 'larva', 'pupa', 'kupu-kupu'];
  assert.equal(validateSequence(['telur', 'larva', 'pupa', 'kupu-kupu'], correct), true);
  assert.equal(validateSequence(['larva', 'telur', 'pupa', 'kupu-kupu'], correct), false);
  assert.equal(validateSequence(['telur', 'larva'], correct), false);
});

test('calculateQuizScore computes correct score and percentage for 30 questions', () => {
  const keys: Record<number, string> = {};
  const userAnswers: Record<number, string> = {};
  for (let i = 1; i <= 30; i++) {
    keys[i] = 'A';
    userAnswers[i] = i <= 27 ? 'A' : 'B'; // 27 out of 30 correct
  }
  const res = calculateQuizScore(userAnswers, keys);
  assert.equal(res.total, 30);
  assert.equal(res.correctCount, 27);
  assert.equal(res.percentage, 90);
  assert.equal(res.score, 90);
  assert.equal(res.isPassed, true);
});

test('calculateProgress aggregates modules, games, conservation, quiz', () => {
  // Empty
  assert.equal(calculateProgress([], [], false, []), 0);
  // Full
  assert.equal(calculateProgress(['hewan', 'tumbuhan', 'pelestarian'], ['1', '2', '3', '4'], true, ['a', 'b', 'c', 'd']), 100);
});

test('evaluateBadges unlocks correct achievements', () => {
  const badges = evaluateBadges({
    completedModules: ['hewan', 'tumbuhan'],
    solvedGames: ['1', '2', '3', '4'],
    quizPercentage: 85,
    quizCompleted: true,
    conservationActionsDone: ['1', '2', '3', '4']
  });

  assert.equal(badges.length, ALL_BADGES.length);
  assert.ok(badges.includes('badge-peneliti-kupu'));
  assert.ok(badges.includes('badge-sahabat-tunas'));
  assert.ok(badges.includes('badge-juara-kuis'));
});
