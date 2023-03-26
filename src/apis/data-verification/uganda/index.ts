import { BaseSDK } from '../../base-config';
import { BusUGParams } from '@/src/types';
import { VERIFY_BUSINESS_UGANDA_ENDPOINT } from '@/src/utils/consts';

export class UgandaDatasVerification extends BaseSDK {
  //These APi are not tested yet
  verifyUgBusiness(datas: BusUGParams) {
    return this.post(VERIFY_BUSINESS_UGANDA_ENDPOINT, datas);
  }
}
