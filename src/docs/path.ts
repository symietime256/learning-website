import PathAuth from './authentication';

import PathUser from './user';

export const PathObject = {
  paths: {
    ...PathAuth,

    ...PathUser,
  },
};
