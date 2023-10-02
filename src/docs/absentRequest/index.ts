import viewAbsentRequestsBySwagger from './viewAbsentRequestsSWG';
import viewAbsentRequestBySwagger from './viewAbsentRequestSWG';
import requestAbsentBySwagger from './requestAbsentSWG';
import handleAbsentRequestBySwagger from './handleAbsentRequestSWG';

export const PathAbsentRequest = {
  paths: {
    '/absent-request/view/{id}': {
      ...viewAbsentRequestBySwagger,
    },
    '/absent-request': {
      ...requestAbsentBySwagger,
    },
    '/absent-request/request-handler/{id}': {
      ...handleAbsentRequestBySwagger,
    },
  },
};
export default PathAbsentRequest;
