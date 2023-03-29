import { IndexSignatureBaseParams } from '@/src/types';
import {
  VERIFY_NID_RWANDA_ENDPOINT,
  VERIFY_PASSPORT_RWANDA_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class RwandaDatasVerification extends BaseSDK {
  //These APi are not tested yet
  verifyRwNID(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_NID_RWANDA_ENDPOINT, datas);
  }

  verifyRwPassport(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PASSPORT_RWANDA_ENDPOINT, datas);
  }
}
