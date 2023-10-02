import getAllUserSWG from './getAllUserSWG';
import getUserByIdSWG from './getUserByIdSWG';
import deleteUserSWG from './deleteUserSWG';
import editUserSWG from './editUserSWG';
const PathUser = {
  '/users/': {
    ...getAllUserSWG,
  },
  '/users/view/{id}': {
    ...getUserByIdSWG,
  },
  '/users/delete/{id}': {
    ...deleteUserSWG,
  },
  '/users/edit/{id}': {
    ...editUserSWG,
  },
};
export default PathUser;
