import { basicInformation } from './mainInfo/basicInfomation';
import { SERVER } from './mainInfo/servers';
import { TAG } from './mainInfo/tags';
import { COMPONENTS } from './mainInfo/components';
import { PathObject } from './absentRequest';

export const docs = {
  ...basicInformation,
  ...SERVER,
  ...COMPONENTS,
  ...TAG,
  ...PathObject,
};
