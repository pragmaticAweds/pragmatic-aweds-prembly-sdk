import { SLDriversLicenseParams } from '@/src/types';
import {
  VERIFY_DRIVERS_LICENSE_SIERRA_LEONE_ENDPOINT,
  VERIFY_VOTERS_CARD_SIERRA_LEONE_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class SierraLeoneDatasVerification extends BaseSDK {
  //   These APi are not tested yet
  verifySlDriversLicense(data: SLDriversLicenseParams) {
    const { search_mode, dob, firstname, lastname, number } = data;

    const newData: SLDriversLicenseParams =
      search_mode === 'ID'
        ? { search_mode, number }
        : { search_mode, firstname, lastname, dob };

    return this.post(VERIFY_DRIVERS_LICENSE_SIERRA_LEONE_ENDPOINT, newData);
  }

  verifySlVotersCard(data: SLDriversLicenseParams) {
    const { search_mode, dob, firstname, lastname, middlename, number } = data;

    const newData: SLDriversLicenseParams =
      search_mode === 'ID'
        ? { search_mode, number }
        : { search_mode, firstname, lastname, middlename, dob };

    return this.post(VERIFY_VOTERS_CARD_SIERRA_LEONE_ENDPOINT, newData);
  }
}
