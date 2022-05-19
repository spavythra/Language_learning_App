import {
    CHANGE_SCORE,
} from "./actionsTypes.js";

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
  });