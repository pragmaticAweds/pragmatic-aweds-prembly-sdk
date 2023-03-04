import { VerifyAdvBankAcctV2ParamsProps } from "@/src/types/banksDataTypes";
import {
  GET_ALL_CODES_ENDPOINT,
  VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT,
} from "@/src/utils/consts";
import { BaseSDK } from "../../baseConfig";

export class BankServices extends BaseSDK {
  getAllCodes() {
    return this.get(GET_ALL_CODES_ENDPOINT);
  }

  verifyAdvAcctV2(datas: VerifyAdvBankAcctV2ParamsProps) {
    return this.post(VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT, datas as {});
  }
}
