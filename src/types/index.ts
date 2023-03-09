export interface VerifyBankAcctParams {
  number: number;
  bank_code: number;
}

export interface VerifyBvnWithFaceParams {
  number: number;
  image: string;
}

type verifyCompanyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface VerifyCaC {
  company_name: string;
  rc_number: string;
  company_type: verifyCompanyTypes;
}

export interface verifyCreditBureauParams {
  phone_number: string;
  first_name: string;
}

export interface verifyDriversLicenseParams {
  number: string;
  dob: string;
  first_name: string;
  last_name: string;
  image: string;
}
