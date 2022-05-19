import {
    CHANGE_SCORE,
} from "./actionsTypes";

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
  });