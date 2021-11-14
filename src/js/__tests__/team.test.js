/* eslint-disable quotes */
import ErrorRepository from '../ErrorRepository';
import Bowman from "../characters/Bowman";

test('Should add Archer to the ErrorRepository', () => {
  const team = new ErrorRepository();
  const archer = new Bowman('Archer');
  const elf = new Bowman('Elf');
  team.add(archer);
  team.add(elf);
  expect(team.members.size).toBe(2);
  expect(team.members.has(archer)).toBeTruthy();
  expect(team.members.has(elf)).toBeTruthy();
});

test('Throw error if trying to add same character', () => {
  const team = new ErrorRepository();
  const archer = new Bowman('Archer');
  team.add(archer);
  expect(() => team.add(archer)).toThrow();
});

test('Should add several Characters to the ErrorRepository', () => {
  const team = new ErrorRepository();
  const archer = new Bowman('Archer');
  const elf = new Bowman('Elf');
  team.addAll(archer, elf);
  expect(team.members.size).toBe(2);
  expect(team.members.has(archer)).toBeTruthy();
  expect(team.members.has(elf)).toBeTruthy();
});

test('toArray should transform Set to Array', () => {
  const team = new ErrorRepository();
  const archer = new Bowman('Archer');
  const elf = new Bowman('Elf');
  team.addAll(archer, elf);
  const arr = team.toArray();
  expect(arr.length).toBe(2);
});