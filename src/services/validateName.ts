import { nameRegEx } from '../models/RegEx';

export const checkName = (name: string): boolean => {
  if (name.length < 1 || !nameRegEx.test(name)) return false;

  return true;
};
