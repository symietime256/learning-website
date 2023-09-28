import { basicInformation } from './mainInfo/basicInfomation';
import { serverURL } from './mainInfo/servers';
import { TAG } from './mainInfo/tags';
import { components } from './mainInfo/components';
import { PathObject } from './absentRequest';

export const docs = {
  ...basicInformation,
  ...serverURL,
  ...components,
  ...TAG,
  ...PathObject,
};
