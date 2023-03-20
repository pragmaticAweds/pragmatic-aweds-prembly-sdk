import { BaseSDK } from '../../base-config';
import { KenyaNationalIdentityParams } from '@/src/types';
import {
  VERIFY_DRIVERS_LICENSE_KENYA_ENDPOINT,
  VERIFY_NATIONAL_IDENTITY_KENYA_ENDPOINT,
  VERIFY_NATIONAL_IDENTITY_NUMBER_KENYA_ENDPOINT,
  VERIFY_PASSPORT_KENYA_ENDPOINT,
  VERIFY_SERIAL_NUMBER_KENYA_ENDPOINT,
} from '@/src/utils/consts';

export class KenyaDatasVerification extends BaseSDK {
  //These APi are not tested yet
  verifyKeNationalIdentity(
    datas: Omit<
      KenyaNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_NATIONAL_IDENTITY_KENYA_ENDPOINT, datas);
  }

  verifyKeNIN(
    datas: Pick<
      KenyaNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_NATIONAL_IDENTITY_NUMBER_KENYA_ENDPOINT, datas);
  }

  verifyKePassport(
    datas: Pick<
      KenyaNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_PASSPORT_KENYA_ENDPOINT, datas);
  }

  verifyKeSerialNo(
    datas: Pick<
      KenyaNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_SERIAL_NUMBER_KENYA_ENDPOINT, datas);
  }

  verifyKeDriversLicense(
    datas: Pick<
      KenyaNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_KENYA_ENDPOINT, datas);
  }
}
