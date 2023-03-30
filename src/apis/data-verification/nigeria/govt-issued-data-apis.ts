import {
  indexSignatureBaseParams,
  ninParams,
  tinParams,
  vehiclePlateNoParams,
  cacParams,
  creditBureauParams,
  votersCardParams,
  intlPassPortParams,
  stampDutyParams,
} from '@/src/types';
import {
  VERIFY_CAC_ADVANCE_ENDPOINT,
  VERIFY_CAC_ENDPOINT,
  VERIFY_CAC_WITH_NAME_ENDPOINT,
  VERIFY_CREDIT_BUREAU_BUSINESS_BASIC_ENDPOINT,
  VERIFY_CREDIT_BUREAU_BUSINESS_FULL_ENDPOINT,
  VERIFY_CREDIT_BUREAU_CONSUMER_BASIC_ENDPOINT,
  VERIFY_CREDIT_BUREAU_CONSUMER_FULL_ENDPOINT,
  VERIFY_CREDIT_BUREAU_ENDPOINT,
  VERIFY_CREDIT_BUREAU_MASHUP_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT,
  VERIFY_INTL_PASSPORT_ASYNC_ENDPOINT,
  VERIFY_INTL_PASSPORT_ENDPOINT,
  VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT,
  VERIFY_INTL_PASSPORT_WITH_IMAGE_ENDPOINT,
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

export class NgGovtIssuedDatasVerification extends BaseSDK {
  verifyNgCAC(datas: Pick<cacParams, 'company_type' | 'rc_number'>) {
    return this.post(VERIFY_CAC_ENDPOINT, datas);
  }

  verifyNgCACFull(datas: cacParams) {
    return this.post(VERIFY_CAC_ADVANCE_ENDPOINT, datas);
  }

  verifyNgCreditBureau(
    datas: Pick<creditBureauParams, 'phone_number' | 'first_name'>
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_ENDPOINT, datas);
  }

  verifyNgCreditBureauConsumerBasic(
    datas: Omit<creditBureauParams, 'phone_number' | 'first_name' | 'rc_number'>
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_CONSUMER_BASIC_ENDPOINT, datas);
  }

  verifyNgCreditBureauConsumerFull(
    datas: Omit<creditBureauParams, 'phone_number' | 'first_name' | 'rc_number'>
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_CONSUMER_FULL_ENDPOINT, datas);
  }

  verifyNgCreditBureauComBasic(
    datas: Pick<
      creditBureauParams,
      'rc_number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_BUSINESS_BASIC_ENDPOINT, datas);
  }

  verifyNgCreditBureauComFull(
    datas: Pick<
      creditBureauParams,
      'rc_number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_BUSINESS_FULL_ENDPOINT, datas);
  }

  verifyNgDriversLicense(
    datas: Pick<indexSignatureBaseParams, 'number' | 'dob'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_ENDPOINT, datas);
  }

  verifyNgBasicDriversLicense(datas: Omit<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT, datas);
  }

  verifyNgFullDriversLicense(datas: Omit<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT, datas);
  }

  verifyNgDriversLicenseImage(datas: Pick<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT, datas);
  }

  verifyNgDriversLicenseFaceID(
    datas: Omit<indexSignatureBaseParams, 'first_name' | 'last_name'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT, datas);
  }

  verifyNgNINWithImage(datas: Pick<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_NIN_WITH_IMAGE_ENDPOINT, datas);
  }

  verifyNgNINWithFace(
    datas: Pick<indexSignatureBaseParams, 'image' | 'number'>
  ) {
    return this.post(VERIFY_NIN_WITH_FACE_ENDPOINT, datas);
  }

  verifyNgNIN(datas: Partial<ninParams>) {
    return this.post(VERIFY_NIN_WITH_NO_IMAGE_ENDPOINT, datas);
  }

  verifyNgPhoneNo(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PHONE_NUMBER_BASIC_ENDPOINT, datas);
  }

  verifyNgPhoneNoFull(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PHONE_NUMBER_FULL_ENDPOINT, datas);
  }

  verifyNgTIN(datas: tinParams) {
    return this.post(VERIFY_TIN_ENDPOINT, datas);
  }

  verifyNgVehicle(datas: vehiclePlateNoParams) {
    return this.post(VERIFY_VEHICLE_ENDPOINT, datas);
  }

  verifyNgVotersCard(datas: Omit<votersCardParams, 'image'>) {
    return this.post(VERIFY_VOTERS_CARD_ENDPOINT, datas);
  }

  verifyNgVotersCardWithImg(datas: Pick<votersCardParams, 'image'>) {
    return this.post(VERIFY_VOTERS_CARD_IMAGE_ENDPOINT, datas);
  }

  verifyNgStampDuty(datas: stampDutyParams) {
    return this.post(VERIFY_STAMP_DUTY_ENDPOINT, datas);
  }

  verifyNgIntlPassportSync(datas: Omit<intlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_ENDPOINT, datas);
  }

  verifyNgIntlPassportWithFace(datas: intlPassPortParams) {
    return this.post(VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT, datas);
  }

  verifyNgIntlPassportWithImg(datas: Pick<intlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_WITH_IMAGE_ENDPOINT, datas);
  }

  //newly added but not tested

  verifyNgIntlPassportAsync(datas: Omit<intlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_ASYNC_ENDPOINT, datas);
  }
  verifyNgCACWithName(datas: Pick<cacParams, 'company_name'>) {
    return this.post(VERIFY_CAC_WITH_NAME_ENDPOINT, datas);
  }

  verifyNgCreditBureauMashup(
    datas: Pick<
      creditBureauParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_MASHUP_ENDPOINT, datas);
  }
}
