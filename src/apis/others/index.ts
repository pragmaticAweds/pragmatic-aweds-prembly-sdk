import { interpolBanListParams, otherVerificationsParams } from '@/src/types';
import {
  VERIFY_CARD_BIN_ENDPOINT,
  VERIFY_EMAIL_ENDPOINT,
  VERIFY_GLOBAL_BUSINESS_ENDPOINT,
  VERIFY_GLOBAL_BUSINESS_SEARCH_ENDPOINT,
  VERIFY_INTERPOL_BAN_LIST_ENDPOINT,
  VERIFY_VIN_CAR_CHASIS_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../base-config';

export class OtherVerification extends BaseSDK {
  verifyBusinessGlobally(
    data: Required<
      Pick<
        otherVerificationsParams,
        | 'company_number'
        | 'country_code'
        | 'customer_name'
        | 'customer_reference'
      >
    >
  ) {
    return this.post(VERIFY_GLOBAL_BUSINESS_ENDPOINT, data);
  }

  findBusinessGlobally(
    data: Required<
      Pick<otherVerificationsParams, 'company_name' | 'country_code'>
    >
  ) {
    return this.post(VERIFY_GLOBAL_BUSINESS_SEARCH_ENDPOINT, data);
  }

  verifyEmail(data: Required<Pick<otherVerificationsParams, 'email'>>) {
    return this.post(VERIFY_EMAIL_ENDPOINT, data);
  }

  verifyCardBin(data: Required<Pick<otherVerificationsParams, 'number'>>) {
    return this.post(VERIFY_CARD_BIN_ENDPOINT, data);
  }

  verifyVinCarChasis(data: Required<Pick<otherVerificationsParams, 'vin'>>) {
    return this.post(VERIFY_VIN_CAR_CHASIS_ENDPOINT, data);
  }

  getInterpolBanList(data: interpolBanListParams) {
    return this.post(VERIFY_INTERPOL_BAN_LIST_ENDPOINT, data);
  }
}
