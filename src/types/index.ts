/*eslint-disable @typescript-eslint/no-empty-interface*/

export interface indexSignatureBaseParams {
  [key: string]: string | number | undefined;
  number: number | string;
  image: string;
  first_name: string;
  last_name: string;
  dob: string;
  customer_reference?: string;
  customer_name?: string;
  rc_number?: string | number;
}

export interface bankAcctParams
  extends Pick<
    indexSignatureBaseParams,
    'number' | 'customer_name' | 'customer_reference'
  > {
  bank_code: number;
}

type companyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface cacParams extends Pick<indexSignatureBaseParams, 'rc_number'> {
  company_name: string;
  company_type: companyTypes;
}

export interface creditBureauParams
  extends Pick<
    indexSignatureBaseParams,
    | 'first_name'
    | 'dob'
    | 'customer_reference'
    | 'customer_name'
    | 'number'
    | 'rc_number'
  > {
  phone_number: string;
  mode: 'ID' | 'BIO';
}

export interface intlPassPortParams
  extends Pick<indexSignatureBaseParams, 'last_name' | 'number' | 'image'> {}

export interface stampDutyParams
  extends Pick<
    indexSignatureBaseParams,
    'customer_reference' | 'customer_name' | 'number'
  > {}

export interface votersCardParams
  extends Pick<indexSignatureBaseParams, 'number' | 'last_name' | 'image'> {
  state: string;
}

export interface ninParams extends Pick<indexSignatureBaseParams, 'number'> {
  number_nin: number;
}

export interface tinParams extends Pick<indexSignatureBaseParams, 'number'> {
  channel: 'TIN' | 'CAC' | 'Phone';
}

export interface vehiclePlateNoParams {
  vehicle_number: string;
}

export interface ugBusParams
  extends Pick<
    indexSignatureBaseParams,
    'customer_name' | 'customer_reference'
  > {
  reservation_number: string;
}

export interface saBusParams extends Omit<ugBusParams, 'reservation_number'> {
  reg_number: string;
}

export interface ghVotersCardParams
  extends Pick<indexSignatureBaseParams, 'number'> {
  type: 'OLD' | 'MAIN';
}

export interface kyNationalIdentityParams
  extends Pick<indexSignatureBaseParams, 'dob' | 'number'> {
  firstname: string;
  lastname: string;
  nationalid: string;
  customer_name: string;
  customer_reference: string;
}

export interface slDriversLicenseParams
  extends Partial<Pick<indexSignatureBaseParams, 'dob' | 'number'>> {
  firstname?: string;
  lastname?: string;
  middlename?: string;
  search_mode: 'ID' | 'BIO';
}

export interface mashupParams extends Pick<indexSignatureBaseParams, 'number'> {
  channel: 'BVN' | 'PHONE';
}
