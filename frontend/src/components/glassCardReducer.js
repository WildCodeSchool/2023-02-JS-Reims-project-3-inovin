const MARK_CARD_COMPLETED = "MARK_CARD_COMPLETED";

export const markCardCompleted = (cardKey) => ({
  type: MARK_CARD_COMPLETED,
  payload: cardKey,
});

const initialState = {
  vin0: false,
  vin1: false,
  vin2: false,
  vin3: false,
};

const glassCardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MARK_CARD_COMPLETED:
      return {
        ...state,
        [action.payload]: true,
      };
    default:
      return state;
  }
};

export default glassCardReducer;
