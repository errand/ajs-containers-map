/* eslint-disable quotes */
import ErrorRepository from '../ErrorRepository';

const errorRepository = new ErrorRepository();

test('Should accept only Interger', () => {
  expect(() => errorRepository.translate('4003')).toThrow();
});

test('400 is BAD REQUEST', () => {
  expect(errorRepository.translate(400)).toEqual('BAD REQUEST');
});

test('400 not UNAUTHORIZED', () => {
  expect(errorRepository.translate(400)).not.toBe('UNAUTHORIZED');
});

test('401 is UNAUTHORIZED', () => {
  expect(errorRepository.translate(401)).toBe('UNAUTHORIZED');
});

test('403 is FORBIDDEN', () => {
  expect(errorRepository.translate(403)).toBe('FORBIDDEN');
});

test('404 is NOT FOUND', () => {
  expect(errorRepository.translate(404)).toBe('NOT FOUND');
});

test('4040 is Unknown error', () => {
  expect(errorRepository.translate(4040)).toBe('Unknown error');
});
