import { IndexSignatureProps, VerifyBankAcctParams } from '@/src/types';
import {
  GET_ALL_CODES_ENDPOINT,
  VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT,
  VERIFY_BVN_ENDPOINT,
  VERIFY_BVN_ADVANCE_VERSION_2_ENDPOINT,
  VERIFY_BVN_WITH_IMAGE_ENDPOINT,
} from '@/src/utils/consts';

import { BaseSDK } from '../base-config';

export class BankDatasVerification extends BaseSDK {
  async getAllBankCodes() {
    return await this.get(GET_ALL_CODES_ENDPOINT);
  }

  async verifyBankAcctFull(datas: VerifyBankAcctParams) {
    return await this.post(VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT, datas);
  }

  async verifyBvnWithFace(
    datas: Pick<IndexSignatureProps, 'image' | 'number'>
  ) {
    return await this.post(VERIFY_BVN_WITH_IMAGE_ENDPOINT, datas);
  }

  async verifyBvn(datas: Pick<IndexSignatureProps, 'number'>) {
    return await this.post(VERIFY_BVN_ENDPOINT, datas);
  }

  async verifyBvnFull(datas: Pick<IndexSignatureProps, 'number'>) {
    return await this.post(VERIFY_BVN_ADVANCE_VERSION_2_ENDPOINT, datas);
  }
}
