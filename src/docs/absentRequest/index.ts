import viewAbsentRequestBySwagger from './viewAbsentRequestSWG';

export const PathObject = {
  paths: {
    '/v1/absent-request/view': {
      ...viewAbsentRequestBySwagger,
    },
  },
};
