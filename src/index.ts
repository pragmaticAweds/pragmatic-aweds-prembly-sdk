import { applyMixins } from './utils';
import { BaseSDK } from './apis/base-config';
import { NGBankDatasVerification } from './apis/data-verification/nigeria/bank-data-apis';
import { NGGovtIssuedDatasVerification } from './apis/data-verification/nigeria/govt-issued-data-apis';
import { GhanaDatasVerification } from './apis/data-verification/ghana';
import { KenyaDatasVerification } from './apis/data-verification/kenya';
import { SierraLeoneDatasVerification } from './apis/data-verification/sierra-leone';
import { SouthAfricaDatasVerification } from './apis/data-verification/south-africa';
import { UgandaDatasVerification } from './apis/data-verification/uganda';

class PremblySdk extends BaseSDK {}

interface PremblySdk
  extends NGBankDatasVerification,
    NGGovtIssuedDatasVerification,
    GhanaDatasVerification,
    KenyaDatasVerification,
    SierraLeoneDatasVerification,
    SouthAfricaDatasVerification,
    UgandaDatasVerification {}

applyMixins(PremblySdk, [
  NGBankDatasVerification,
  NGGovtIssuedDatasVerification,
  GhanaDatasVerification,
  KenyaDatasVerification,
  SierraLeoneDatasVerification,
  SouthAfricaDatasVerification,
  UgandaDatasVerification,
]);

export default PremblySdk;
