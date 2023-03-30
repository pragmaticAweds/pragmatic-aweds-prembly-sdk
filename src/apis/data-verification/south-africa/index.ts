import { kyNationalIdentityParams, saBusParams } from '@/src/types';
import {
  VERIFY_BUSINESS_SOUTH_AFRICA_ENDPOINT,
  VERIFY_NATIONAL_IDENTITY_SOUTH_AFRICA_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class SouthAfricaDatasVerification extends BaseSDK {
  //These APi are not tested yet
  verifySaNationalIdentity(
    datas: Omit<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_NATIONAL_IDENTITY_SOUTH_AFRICA_ENDPOINT, datas);
  }

  verifySaBusiness(datas: saBusParams) {
    return this.post(VERIFY_BUSINESS_SOUTH_AFRICA_ENDPOINT, datas);
  }
}
