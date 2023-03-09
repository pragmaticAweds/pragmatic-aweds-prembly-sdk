import {
  VerifyCaC,
  verifyCreditBureauParams,
  verifyDriversLicenseParams,
} from '@/src/types';
import {
  VERIFY_CAC_ADVANCE_ENDPOINT,
  VERIFY_CAC_ENDPOINT,
  VERIFY_CREDIT_BUREAU_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../base-config';

export class GovtDatasVerification extends BaseSDK {
  verifyCAC(datas: Pick<VerifyCaC, 'company_type' | 'rc_number'>) {
    return this.post(VERIFY_CAC_ENDPOINT, datas);
  }

  verifyCACFull(datas: VerifyCaC) {
    return this.post(VERIFY_CAC_ADVANCE_ENDPOINT, datas);
  }
  verifyCreditBureau(datas: verifyCreditBureauParams) {
    return this.post(VERIFY_CREDIT_BUREAU_ENDPOINT, datas);
  }
  verifyDriversLicense(
    datas: Pick<verifyDriversLicenseParams, 'number' | 'dob'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_ENDPOINT, datas);
  }
  verifyBasicDriversLicense(datas: Omit<verifyDriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT, datas);
  }
  verifyFullDriversLicense(datas: Omit<verifyDriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT, datas);
  }
  verifyDriversLicenseImage(datas: Pick<verifyDriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT, datas);
  }
  verifyDriversLicenseFaceID(
    datas: Omit<verifyDriversLicenseParams, 'first_name' | 'last_name'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT, datas);
  }
}
