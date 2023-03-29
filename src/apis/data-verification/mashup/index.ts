import { BaseSDK } from '../../base-config';
import { MashupParams } from '@/src/types';
import {
  VERIFY_MASHUP_BVN_CREDIT_BUREAU_ENDPOINT,
  VERIFY_MASHUP_BVN_NIN_PHONE_ENDPOINT,
  VERIFY_MASHUP_BVN_OR_PHONE_ENDPOINT,
} from '@/src/utils/consts';

export class MashupDatasVerification extends BaseSDK {
  //newly added but not tested

  verifyBvnWithCreditBureauMashup(datas: Pick<MashupParams, 'number'>) {
    return this.post(VERIFY_MASHUP_BVN_CREDIT_BUREAU_ENDPOINT, datas);
  }

  verifyBvnOrPhoneMashup(datas: MashupParams) {
    return this.post(VERIFY_MASHUP_BVN_OR_PHONE_ENDPOINT, datas);
  }

  verifyBvnOrPhoneOrNinMashup(datas: Pick<MashupParams, 'number'>) {
    return this.post(VERIFY_MASHUP_BVN_NIN_PHONE_ENDPOINT, datas);
  }
}
