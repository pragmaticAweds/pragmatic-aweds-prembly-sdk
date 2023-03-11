export interface IndexSignatureProps {
  [key: string]: string | number;
}

export interface VerifyBankAcctParams extends IndexSignatureProps {
  number: number;
  bank_code: number;
}

export interface VerifyBvnWithFaceParams extends IndexSignatureProps {
  number: number;
  image: string;
}

type verifyCompanyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface VerifyCaC extends IndexSignatureProps {
  company_name: string;
  rc_number: string;
  company_type: verifyCompanyTypes;
}

export interface verifyCreditBureauParams extends IndexSignatureProps {
  phone_number: string;
  first_name: string;
}

export interface verifyDriversLicenseParams extends IndexSignatureProps {
  number: string;
  dob: string;
  first_name: string;
  last_name: string;
  image: string;
}
