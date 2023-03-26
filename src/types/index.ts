export interface IndexSignatureBaseParams {
  [key: string]: string | number | undefined;
  number: number | string;
  image: string;
  first_name: string;
  last_name: string;
  dob: string;
  customer_reference?: string;
  customer_name?: string;
}

export interface BankAcctParams
  extends Pick<IndexSignatureBaseParams, 'number'> {
  bank_code: number;
}

type CompanyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface CACParams {
  company_name: string;
  rc_number: string;
  company_type: CompanyTypes;
}

export interface CreditBureauParams
  extends Pick<IndexSignatureBaseParams, 'first_name'> {
  phone_number: string;
}

export interface DriversLicenseParams extends IndexSignatureBaseParams {}

export interface IntlPassPortParams
  extends Pick<IndexSignatureBaseParams, 'last_name' | 'number' | 'image'> {}

export interface StampDutyParams
  extends Pick<
    IndexSignatureBaseParams,
    'customer_reference' | 'customer_name' | 'number'
  > {}

export interface VotersCardParams
  extends Pick<IndexSignatureBaseParams, 'number' | 'last_name' | 'image'> {
  state: string;
}

export interface NinParams extends Pick<IndexSignatureBaseParams, 'number'> {
  number_nin: number;
}

export interface TINParams extends Pick<IndexSignatureBaseParams, 'number'> {
  channel: 'TIN' | 'CAC' | 'Phone';
}

export interface VehiclePlateNoParams {
  vehicle_number: string;
}

export interface BusUGParams
  extends Pick<
    IndexSignatureBaseParams,
    'customer_name' | 'customer_reference'
  > {
  reservation_number: string;
}

export interface BusSAParams extends Omit<BusUGParams, 'reservation_number'> {
  reg_number: string;
}

export interface GHVotersCardParams
  extends Pick<IndexSignatureBaseParams, 'number'> {
  type: 'OLD' | 'MAIN';
}

export interface KYNationalIdentityParams
  extends Pick<IndexSignatureBaseParams, 'dob' | 'number'> {
  firstname: string;
  lastname: string;
  nationalid: string;
  customer_name: string;
  customer_reference: string;
}

export interface SLDriversLicenseParams
  extends Partial<Pick<IndexSignatureBaseParams, 'dob' | 'number'>> {
  firstname?: string;
  lastname?: string;
  middlename?: string;
  search_mode: 'ID' | 'BIO';
}
