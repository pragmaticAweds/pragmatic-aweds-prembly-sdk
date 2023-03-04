// import { Base } from "@/src/base";
// import {
//   BankCodesProps,
//   VerifyAdvBankAcctV2ParamsProps,
//   VerifyAdvBankAcctV2Props,
// } from "@/src/types/banksDataTypes";

import { VerifyAdvBankAcctV2ParamsProps } from "@/src/types/banksDataTypes";
import {
  GET_ALL_CODES_ENDPOINT,
  VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT,
} from "@/src/utils/consts";
import { BaseSDK } from "../../baseConfig";

// export class getBankDatas extends Base {
//   getAllCodes(
//     endpoint = "bank_code",
//     versionUrl?: string
//   ): Promise<BankCodesProps> {
//     const endPointUrl = `${versionUrl ? versionUrl : ""}${endpoint}`;
//     return this.invoke(endpoint);
//   }

//   verifyAdvAcctV2(
//     params: VerifyAdvBankAcctV2ParamsProps
//   ): Promise<VerifyAdvBankAcctV2Props> {
//     const endPointUrl = "bank_account/advance";

//     return this.invoke(endPointUrl, {
//       method: "POST",
//       body: JSON.stringify(params),
//     });
//   }
// }

export class BankServices extends BaseSDK {
  getAllCodes() {
    return this.get(GET_ALL_CODES_ENDPOINT);
  }

  verifyAdvAcctV2(datas: VerifyAdvBankAcctV2ParamsProps) {
    return this.post(VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT, datas as {});
  }
}
