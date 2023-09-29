import viewAbsentRequestsBySwagger from './viewAbsentRequestsSWG';
import viewAbsentRequestBySwagger from './viewAbsentRequestSWG';

const PathAbsentRequest = {
  '/absent-request/view': {
    ...viewAbsentRequestsBySwagger,
  },
  '/absent-request/view/{id}': {
    ...viewAbsentRequestBySwagger,
  },
};
export default PathAbsentRequest;
