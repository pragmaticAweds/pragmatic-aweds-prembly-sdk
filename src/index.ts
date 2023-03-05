import { applyMixins } from "./utils";
import { BankDatasVerification } from "./apis/data-verification/bank-data-apis";

import { BaseSDK } from "./apis/base-config";
import { GovtDatasVerification } from "./apis/data-verification/govt-issued-data-apis";

class PremblySdk extends BaseSDK {}

interface PremblySdk extends BankDatasVerification, GovtDatasVerification {}

applyMixins(PremblySdk, [BankDatasVerification, GovtDatasVerification]);

export default PremblySdk;
