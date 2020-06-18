import { CHANGE_THEME_COLOR } from '../action-creators';

interface action {
  type: string;
  colorTheme: string;
}

interface state {
  colorTheme: string;
}

export const global = (
  state: state = { colorTheme: 'white' },
  action: action
) => {
  switch (action.type) {
    case CHANGE_THEME_COLOR:
      return {
        ...state,
        colorTheme: action.colorTheme
      };

    default:
      return state;
  }
};
