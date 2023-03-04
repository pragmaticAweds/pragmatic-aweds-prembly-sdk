// import { Base } from "@/src/base";
// import {
//   BankCodesProps,
//   VerifyAdvBankAcctV2ParamsProps,
//   VerifyAdvBankAcctV2Props,
// } from "@/src/types/banksDataTypes";

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
