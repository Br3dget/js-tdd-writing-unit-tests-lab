// Your tests here
const isPalindrome = require('../utils');

describe('isPalindrome', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for a case-insensitive palindrome', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar!')).toThrow('Input must contain only alphabetic characters');
  });

  test('throws an error if input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});

