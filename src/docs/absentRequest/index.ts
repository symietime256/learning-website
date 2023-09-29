import viewAbsentRequestsBySwagger from './viewAbsentRequestsSWG';
import viewAbsentRequestBySwagger from './viewAbsentRequestSWG';
import requestAbsentBySwagger from './requestAbsentSWG';

export const PathAbsentRequest = {
  paths: {
    '/absent-request/view': {
      ...viewAbsentRequestsBySwagger,
    },
    '/absent-request/view/{id}': {
      ...viewAbsentRequestBySwagger,
    },
    '/absent-request': {
      ...requestAbsentBySwagger,
    },
  },
};
export default PathAbsentRequest;
