import viewAbsentRequestsBySwagger from './viewAbsentRequestsSWG';
import viewAbsentRequestBySwagger from './viewAbsentRequestSWG';

export const PathObject = {
  paths: {
    '/view': {
      ...viewAbsentRequestsBySwagger,
    },
    '/view/{id}': {
      ...viewAbsentRequestBySwagger,
    },
  },
};
