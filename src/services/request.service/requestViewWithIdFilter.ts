import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { Repository, getRepository } from 'typeorm';

const requestViewWithIdFilter = async (queryId) => {
  const repo = getRepository(AbsentRequest);
  if (queryId) {
    const absentRequestLists = await repo.find({
      // relations: {
      //   users: true,
      // },
      where: {
        user: {
          id: queryId,
        },
      },
    });
    return absentRequestLists;
  } else {
    const absentRequestLists = await repo.find({});
    return absentRequestLists;
  }
};

export { requestViewWithIdFilter };
