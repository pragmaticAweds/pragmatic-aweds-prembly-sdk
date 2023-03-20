import {
  IndexSignatureBaseParams,
  NinParams,
  TINParams,
  VehicleParams,
  VerifyCaC,
  verifyCreditBureauParams,
  verifyDriversLicenseParams,
  VotersCardParams,
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
  VERIFY_NIN_WITH_FACE_ENDPOINT,
  VERIFY_NIN_WITH_IMAGE_ENDPOINT,
  VERIFY_NIN_WITH_NO_IMAGE_ENDPOINT,
  VERIFY_PHONE_NUMBER_BASIC_ENDPOINT,
  VERIFY_PHONE_NUMBER_FULL_ENDPOINT,
  VERIFY_TIN_ENDPOINT,
  VERIFY_VEHICLE_ENDPOINT,
  VERIFY_VOTERS_CARD_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class NGGovtIssuedDatasVerification extends BaseSDK {
  verifyNgCAC(datas: Pick<VerifyCaC, 'company_type' | 'rc_number'>) {
    return this.post(VERIFY_CAC_ENDPOINT, datas);
  }

  verifyNgCACFull(datas: VerifyCaC) {
    return this.post(VERIFY_CAC_ADVANCE_ENDPOINT, datas);
  }
  verifyNgCreditBureau(datas: verifyCreditBureauParams) {
    return this.post(VERIFY_CREDIT_BUREAU_ENDPOINT, datas);
  }
  verifyNgDriversLicense(
    datas: Pick<verifyDriversLicenseParams, 'number' | 'dob'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_ENDPOINT, datas);
  }
  verifyNgBasicDriversLicense(
    datas: Omit<verifyDriversLicenseParams, 'image'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT, datas);
  }
  verifyNgFullDriversLicense(datas: Omit<verifyDriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT, datas);
  }
  verifyNgDriversLicenseImage(
    datas: Pick<verifyDriversLicenseParams, 'image'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT, datas);
  }
  verifyNgDriversLicenseFaceID(
    datas: Omit<verifyDriversLicenseParams, 'first_name' | 'last_name'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT, datas);
  }

  verifyNgNINWithImage(datas: Pick<verifyDriversLicenseParams, 'image'>) {
    return this.post(VERIFY_NIN_WITH_IMAGE_ENDPOINT, datas);
  }

  verifyNgNINWithFace(
    datas: Pick<verifyDriversLicenseParams, 'image' | 'number'>
  ) {
    return this.post(VERIFY_NIN_WITH_FACE_ENDPOINT, datas);
  }
  verifyNgNIN(datas: Partial<NinParams>) {
    return this.post(VERIFY_NIN_WITH_NO_IMAGE_ENDPOINT, datas);
  }
  verifyNgPhoneNo(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PHONE_NUMBER_BASIC_ENDPOINT, datas);
  }
  verifyNgPhoneNoFull(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PHONE_NUMBER_FULL_ENDPOINT, datas);
  }
  verifyNgTIN(datas: TINParams) {
    return this.post(VERIFY_TIN_ENDPOINT, datas);
  }
  verifyNgVehicle(datas: VehicleParams) {
    return this.post(VERIFY_VEHICLE_ENDPOINT, datas);
  }
  verifyNgVotersCard(datas: VotersCardParams) {
    return this.post(VERIFY_VOTERS_CARD_ENDPOINT, datas);
  }
}
