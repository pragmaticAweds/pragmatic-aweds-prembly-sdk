export interface IndexSignatureProps {
  [key: string]: string | number;
  number: number | string;
  image: string;
  first_name: string;
  last_name: string;
}

export interface VerifyBankAcctParams
  extends Pick<IndexSignatureProps, 'number'> {
  bank_code: number;
}

type verifyCompanyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface VerifyCaC {
  company_name: string;
  rc_number: string;
  company_type: verifyCompanyTypes;
}

export interface verifyCreditBureauParams
  extends Pick<IndexSignatureProps, 'first_name'> {
  phone_number: string;
}

export interface verifyDriversLicenseParams extends IndexSignatureProps {
  dob: string;
}
