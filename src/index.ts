import { applyMixins } from './utils';
import { BaseSDK } from './apis/base-config';
import { NGBankDatasVerification } from './apis/data-verification/nigeria/bank-data-apis';
import { NGGovtIssuedDatasVerification } from './apis/data-verification/nigeria/govt-issued-data-apis';
import { GhanaDatasVerification } from './apis/data-verification/ghana';

class PremblySdk extends BaseSDK {}

interface PremblySdk
  extends NGBankDatasVerification,
    NGGovtIssuedDatasVerification,
    GhanaDatasVerification {}

applyMixins(PremblySdk, [
  NGBankDatasVerification,
  NGGovtIssuedDatasVerification,
  GhanaDatasVerification,
]);

export default PremblySdk;
