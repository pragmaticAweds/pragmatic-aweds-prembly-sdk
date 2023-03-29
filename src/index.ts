import { applyMixins } from './utils';
import { BaseSDK } from './apis/base-config';
import { NGBankDatasVerification } from './apis/data-verification/nigeria/bank-data-apis';
import { NGGovtIssuedDatasVerification } from './apis/data-verification/nigeria/govt-issued-data-apis';
import { GhanaDatasVerification } from './apis/data-verification/ghana';
import { KenyaDatasVerification } from './apis/data-verification/kenya';
import { SierraLeoneDatasVerification } from './apis/data-verification/sierra-leone';
import { SouthAfricaDatasVerification } from './apis/data-verification/south-africa';
import { UgandaDatasVerification } from './apis/data-verification/uganda';
import { RwandaDatasVerification } from './apis/data-verification/rwanda';
import { MashupDatasVerification } from './apis/data-verification/mashup';

class PremblySdk extends BaseSDK {}

interface PremblySdk
  extends NGBankDatasVerification,
    NGGovtIssuedDatasVerification,
    GhanaDatasVerification,
    KenyaDatasVerification,
    SierraLeoneDatasVerification,
    SouthAfricaDatasVerification,
    UgandaDatasVerification,
    RwandaDatasVerification,
    MashupDatasVerification {}

applyMixins(PremblySdk, [
  NGBankDatasVerification,
  NGGovtIssuedDatasVerification,
  GhanaDatasVerification,
  KenyaDatasVerification,
  SierraLeoneDatasVerification,
  SouthAfricaDatasVerification,
  UgandaDatasVerification,
  RwandaDatasVerification,
  MashupDatasVerification,
]);

export default PremblySdk;
