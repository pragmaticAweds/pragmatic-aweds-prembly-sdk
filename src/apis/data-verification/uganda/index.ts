import { BaseSDK } from '../../base-config';
import { VerifyBusUGParams } from '@/src/types';
import { VERIFY_BUSINESS_UGANDA_ENDPOINT } from '@/src/utils/consts';

export class UgandaDatasVerification extends BaseSDK {
  //These APi are not tested yet
  verifyUgBusiness(datas: VerifyBusUGParams) {
    return this.post(VERIFY_BUSINESS_UGANDA_ENDPOINT, datas);
  }
}
