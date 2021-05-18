import { TOGGLE_DARK_MODE } from './constants';

export function toggleDarkMode(status) {
  return {
    type: TOGGLE_DARK_MODE,
    status,
  };
}
