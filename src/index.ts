// import { applyMixins } from './utils';
import { BaseSDK } from './apis/base-config';
import { NgVerificationService } from './apis/data-verification/nigeria';
import { Config } from './types/config-types';
// import  from '@/src/apis/data-verification/index';
// import { NgGovtIssuedDatasVerification } from './apis/data-verification/nigeria/govt-issued-data-apis';
// import { GhanaDatasVerification } from './apis/data-verification/ghana';
// import { KenyaDatasVerification } from './apis/data-verification/kenya';
// import { SierraLeoneDatasVerification } from './apis/data-verification/sierra-leone';
// import { SouthAfricaDatasVerification } from './apis/data-verification/south-africa';
// import { UgandaDatasVerification } from './apis/data-verification/uganda';
// import { RwandaDatasVerification } from './apis/data-verification/rwanda';
// import { MashupDatasVerification } from './apis/data-verification/mashup';
// import { BiometricVerification } from './apis/biometric/face-recognition';
// import { DocumentVerification } from './apis/document-verification';
// import { OtherVerification } from './apis/others';
// import { RadarVerification } from './apis/radar';

class PremblySdk extends BaseSDK {
  protected config: Config;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public dataverification: NgVerificationService;

  constructor(config: Config) {
    super(config);
    this.config = config;
    this.dataverification = new NgVerificationService(config);
  }
}

// interface PremblySdk
//   extends NgDatasVerification,
//     NgGovtIssuedDatasVerification,
//     GhanaDatasVerification,
//     KenyaDatasVerification,
//     SierraLeoneDatasVerification,
//     SouthAfricaDatasVerification,
//     UgandaDatasVerification,
//     RwandaDatasVerification,
//     MashupDatasVerification,
//     BiometricVerification,
//     DocumentVerification,
//     OtherVerification,
//     RadarVerification {}

// applyMixins(PremblySdk, [
//   NgBankDatasVerification,
//   NgGovtIssuedDatasVerification,
//   GhanaDatasVerification,
//   KenyaDatasVerification,
//   SierraLeoneDatasVerification,
//   SouthAfricaDatasVerification,
//   UgandaDatasVerification,
//   RwandaDatasVerification,
//   MashupDatasVerification,
//   BiometricVerification,
//   DocumentVerification,
//   OtherVerification,
//   RadarVerification,
// ]);

export { NgVerificationService };

export default PremblySdk;
