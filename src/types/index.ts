export interface IndexSignatureBaseParams {
  [key: string]: string | number;
  number: number | string;
  image: string;
  first_name: string;
  last_name: string;
  dob: string;
}

export interface VerifyBankAcctParams
  extends Pick<IndexSignatureBaseParams, 'number'> {
  bank_code: number;
}

type verifyCompanyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface VerifyCaC {
  company_name: string;
  rc_number: string;
  company_type: verifyCompanyTypes;
}

export interface verifyCreditBureauParams
  extends Pick<IndexSignatureBaseParams, 'first_name'> {
  phone_number: string;
}

export interface verifyDriversLicenseParams extends IndexSignatureBaseParams {}

export interface NinParams extends Pick<IndexSignatureBaseParams, 'number'> {
  number_nin: number;
}

export interface TINParams extends Pick<IndexSignatureBaseParams, 'number'> {
  channel: 'TIN' | 'CAC' | 'Phone';
}

export interface VehiclePlateNo {
  vehicle_number: string;
}

export interface VotersCardParams
  extends Pick<IndexSignatureBaseParams, 'number' | 'last_name'> {
  state: string;
}

export interface VerifyBusUGParams {
  customer_reference: string;
  customer_name: string;
  reservation_number: string;
}

export interface VerifyBusSAParams
  extends Omit<VerifyBusUGParams, 'reservation_number'> {
  reg_number: string;
}

export interface GhanaVotersCardParams
  extends Pick<IndexSignatureBaseParams, 'number'> {
  type: 'OLD' | 'MAIN';
}

export interface KenyaNationalIdentityParams
  extends Pick<IndexSignatureBaseParams, 'dob' | 'number'> {
  firstname: string;
  lastname: string;
  nationalid: string;
  customer_name: string;
  customer_reference: string;
}

export interface SierrLeoneDriversLicenseParams
  extends Partial<Pick<IndexSignatureBaseParams, 'dob' | 'number'>> {
  firstname?: string;
  lastname?: string;
  middlename?: string;
  search_mode: 'ID' | 'BIO';
}
