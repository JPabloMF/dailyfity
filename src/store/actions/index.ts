import { CHANGE_THEME_COLOR } from '..//action-creators';

export const changeThemeColor = (colorTheme: string) => ({
  type: CHANGE_THEME_COLOR,
  colorTheme
});
