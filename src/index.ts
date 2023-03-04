// import { getBankDatas } from "./apis/data-verification/bankDetails";
// import { Base } from "./base";
import { applyMixins } from "./utils";
import { BankServices } from "./apis/data-verification/bankDetails";

import { BaseSDK } from "./apis/baseConfig";

class PremblySdk extends BaseSDK {}
interface PremblySdk extends BankServices {}

applyMixins(PremblySdk, [BankServices]);

export default PremblySdk;
