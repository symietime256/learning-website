const current_time = new Date(Date.now());

export const VALIDATE = {
  PASSWORD: {
    PASSWORD_MIN_CHAR: 6,
  },
  REQUEST: {
    MAIN_POINT_MIN_CHAR: 20,
    REASON_MIN_CHAR: 50,
    REASON_MAX_CHAR: 1000,
    MAIN_POINT_EMPTY: 'Mainpoint is required',
    IS_ACCEPTED_EMPTY: 'Your approval is empty',
    DATE_OF_ABSENCE_EMPTY: 'Date Of Absence is required',
    REASON_EMPTY: 'Reason cannot left empty',
    IS_ACCEPTED_INVALID: 'Your approval is illegal',
    IS_ACCEPTED_EXISTED: 'This request were either approved or rejected, you cannot take action!',
  },
  DATE: {
    CURRENT_TIME: current_time,
  },
};
