import PathAbsentRequest from './absentRequest';
import PathAuth from './authentication';
import PathDevice from './device';
import PathUser from './user';

export const PathObject = {
  paths: {
    ...PathAbsentRequest,
    ...PathAuth,
    ...PathUser,
    ...PathDevice,
    ...PathUser,
  },
};
