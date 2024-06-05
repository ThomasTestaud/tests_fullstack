import { calculerHeure } from '../modules/calendar';
import { expect, describe, it } from 'vitest';

describe('calculerHeure', () => {
    it('1 1 1 = mortin', () => {
        expect(calculerHeure(1, 1, 1)).toBe('mortin');
    });
    it('1 1 2 = nuight', () => {
        expect(calculerHeure(1, 1, 2)).toBe('nuight');
    });
    it('1 2 1 = mortin', () => {
        expect(calculerHeure(1, 2, 1)).toBe('mortin');
    });
    it('2 1 1 = mortin', () => {
        expect(calculerHeure(2, 1, 1)).toBe('mortin');
    });
    it('2 2 1 = mortin', () => {
        expect(calculerHeure(2, 2, 1)).toBe('mortin');
    });
    it('2 2 2 = nuight', () => {
        expect(calculerHeure(2, 2, 2)).toBe('nuight');
    });
    it('2 1 2 = soirning', () => {
        expect(calculerHeure(2, 1, 2)).toBe('soirning');
    });
    it('1 2 2 = nuight', () => {
        expect(calculerHeure(1, 2, 2)).toBe('nuight');
    });
    it('2 2 2 = nuight', () => {
        expect(calculerHeure(2, 2, 2)).toBe('nuight');
    });
});


