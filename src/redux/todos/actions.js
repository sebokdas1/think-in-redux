import {
  ADDED,
  DELETED,
  TOGGLED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
} from "./actionTypes";

export const added = (typeText) => {
  return {
    type: ADDED,
    payload: typeText,
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
