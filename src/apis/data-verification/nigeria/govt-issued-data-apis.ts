import {
  IndexSignatureBaseParams,
  NinParams,
  TINParams,
  VehiclePlateNoParams,
  CACParams,
  CreditBureauParams,
  DriversLicenseParams,
  VotersCardParams,
  IntlPassPortParams,
  StampDutyParams,
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
  VERIFY_INTL_PASSPORT_ASYNC_ENDPOINT,
  VERIFY_INTL_PASSPORT_ENDPOINT,
  VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT,
  VERIFY_NIN_WITH_FACE_ENDPOINT,
  VERIFY_NIN_WITH_IMAGE_ENDPOINT,
  VERIFY_NIN_WITH_NO_IMAGE_ENDPOINT,
  VERIFY_PHONE_NUMBER_BASIC_ENDPOINT,
  VERIFY_PHONE_NUMBER_FULL_ENDPOINT,
  VERIFY_STAMP_DUTY_ENDPOINT,
  VERIFY_TIN_ENDPOINT,
  VERIFY_VEHICLE_ENDPOINT,
  VERIFY_VOTERS_CARD_ENDPOINT,
  VERIFY_VOTERS_CARD_IMAGE_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class NGGovtIssuedDatasVerification extends BaseSDK {
  verifyNgCAC(datas: Pick<CACParams, 'company_type' | 'rc_number'>) {
    return this.post(VERIFY_CAC_ENDPOINT, datas);
  }

  verifyNgCACFull(datas: CACParams) {
    return this.post(VERIFY_CAC_ADVANCE_ENDPOINT, datas);
  }
  verifyNgCreditBureau(datas: CreditBureauParams) {
    return this.post(VERIFY_CREDIT_BUREAU_ENDPOINT, datas);
  }
  verifyNgDriversLicense(datas: Pick<DriversLicenseParams, 'number' | 'dob'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_ENDPOINT, datas);
  }
  verifyNgBasicDriversLicense(datas: Omit<DriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT, datas);
  }
  verifyNgFullDriversLicense(datas: Omit<DriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT, datas);
  }
  verifyNgDriversLicenseImage(datas: Pick<DriversLicenseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT, datas);
  }
  verifyNgDriversLicenseFaceID(
    datas: Omit<DriversLicenseParams, 'first_name' | 'last_name'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT, datas);
  }

  verifyNgNINWithImage(datas: Pick<DriversLicenseParams, 'image'>) {
    return this.post(VERIFY_NIN_WITH_IMAGE_ENDPOINT, datas);
  }

  verifyNgNINWithFace(datas: Pick<DriversLicenseParams, 'image' | 'number'>) {
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
  verifyNgVehicle(datas: VehiclePlateNoParams) {
    return this.post(VERIFY_VEHICLE_ENDPOINT, datas);
  }
  verifyNgVotersCard(datas: Omit<VotersCardParams, 'image'>) {
    return this.post(VERIFY_VOTERS_CARD_ENDPOINT, datas);
  }
  verifyNgVotersCardWithImg(datas: Pick<VotersCardParams, 'image'>) {
    return this.post(VERIFY_VOTERS_CARD_IMAGE_ENDPOINT, datas);
  }

  verifyNgStampDuty(datas: StampDutyParams) {
    return this.post(VERIFY_STAMP_DUTY_ENDPOINT, datas);
  }

  verifyNgIntlPassportSync(datas: Omit<IntlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_ENDPOINT, datas);
  }

  //newly added

  verifyNgIntlPassportAsync(datas: Omit<IntlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_ASYNC_ENDPOINT, datas);
  }

  verifyNgIntlPassportWithFace(datas: IntlPassPortParams) {
    return this.post(VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT, datas);
  }

  verifyNgIntlPassportWithImg(datas: Pick<IntlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT, datas);
  }
}
