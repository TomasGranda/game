import * as types from '../actions/types';
import Sections from '../config/sections';

export const initialState = {
  section: Sections.Home,
}

export const sectionReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_SECTION:
      return {
        ...state,
        section: action.newSection,
      }
    default:
      return state;
  }
};