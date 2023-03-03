export declare interface BaseResponseProps {
  status: boolean;
  response_code: string;
  message?: string;
  detail?: string;
}

export declare interface BankCodesProps extends BaseResponseProps {
  data: BankCodeProps[];
}

export declare interface BankCodeProps {
  id: number;
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: string;
  pay_with_bank: boolean;
  active: boolean;
  country: string;
  currency: string;
  type: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export declare interface VerifyAdvBankAcctV2Props extends BaseResponseProps {
  account_data: {
    account_name: string;
    identity_number: string;
    identity_type: string;
    dob: string;
    gender: string;
    other_names: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address_1: string;
    lga_of_origin: string;
    lga_of_residence: string;
    marital_status: string;
    nationality: string;
    country_of_birth: string;
    country_of_issue: string;
    state_of_origin: string;
    state_of_residence: string;
    account_currency: string;
    account_type: string;
  };
  verification: {
    status: string;
    reference: string;
  };
}

export interface VerifyAdvBankAcctV2ParamsProps {
  number: number;
  bank_code: number;
}
