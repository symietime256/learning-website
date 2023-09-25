const current_time = new Date(Date.now());

export const PASSWORD_MIN_CHAR = 6;

export const REQUEST_VALIDATE = {
  CONTENT: {
    MAIN_POINT_EMPTY: 'Mainpoint is required',
    IS_ACCEPTED_EMPTY: 'Your approval is empty',
    DATE_OF_ABSENCE_EMPTY: 'Date Of Absence is required',
    REASON_EMPTY: 'Reason cannot left empty',
    IS_ACCEPTED_INVALID: 'Your approval is illegal',
    IS_ACCEPTED_EXISTED: 'This request were either approved or rejected, you cannot take action!',
    PENDING_REQUEST_PROHIBIT: `You are not allowed to pending the request because it's waiting to approve or it
    has already handled`,
  },
  DATE: {
    CURRENT_TIME: current_time,
    INVALID_DATE: 'The date that user entered is invalid',
  },
};

export const isDateInvalidOrNot = function (dateString: string) {
  if (!isValidDate(dateString)) {
    return false;
  }
  const [year, month, day] = dateString.split('/');

  const parsedDate = new Date(+year, +month - 1, +day);
  return parsedDate;
};

function isValidDate(dateString: string) {
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

  // Parse the date parts to integers
  const parts = dateString.split('/');
  const day = parseInt(parts[1], 10);
  const month = parseInt(parts[0], 10);
  const year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

export const MAIN_POINT_MIN_CHAR = 20;
export const REASON_MIN_CHAR = 50;
export const REASON_MAX_CHAR = 1000;
