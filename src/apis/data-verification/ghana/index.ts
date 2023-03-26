import { BaseSDK } from '../../base-config';

import {
  VERIFY_DRIVERS_LICENSE_GHANA_ENDPOINT,
  VERIFY_INTERNATIONAL_PASSPORT_GHANA_ENDPOINT,
  VERIFY_SSNIT_GHANA_ENDPOINT,
  VERIFY_VOTERS_CARD_GHANA_ENDPOINT,
} from '@/src/utils/consts';
import {
  GHVotersCardParams,
  IndexSignatureBaseParams,
  DriversLicenseParams,
} from '@/src/types';

export class GhanaDatasVerification extends BaseSDK {
  verifyGhIntlPassport(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_INTERNATIONAL_PASSPORT_GHANA_ENDPOINT, datas);
  }

  //These APis are not tested yet

  verifyGhVotersCard(datas: GHVotersCardParams) {
    return this.post(VERIFY_VOTERS_CARD_GHANA_ENDPOINT, datas);
  }

  verifyGhDriversLicense(datas: Pick<DriversLicenseParams, 'dob' | 'number'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_GHANA_ENDPOINT, datas);
  }

  verifyGhSSNIT(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_SSNIT_GHANA_ENDPOINT, datas);
  }
}
