import { CONSTANTS } from "../actions";

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
  };
};
//delete card added
export const deleteCard = cardId => ({
  type: CONSTANTS.DELETE_CARD,
  payload: { cardId }
});
