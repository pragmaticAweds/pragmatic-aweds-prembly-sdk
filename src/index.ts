import { BaseSDK } from './apis/base-config';
import DataVerificationService from '@/src/apis/data-verification';
import { Config } from './types/config-types';
import { GlobalVerificationService } from './apis/global';
import { DocumentVerificationService } from './apis/document-verification';
import { BiometricVerificationService } from './apis/biometric/face-recognition';
import { RadarVerificationService } from './apis/radar';

class PremblyVerificationService extends BaseSDK {
  public globalVerification: GlobalVerificationService;
  public documentVerification: DocumentVerificationService;
  public biometricVerification: BiometricVerificationService;
  protected config: Config;

  constructor(config: Config) {
    super(config);
    this.config = config;
    this.globalVerification = new GlobalVerificationService(config);
    this.documentVerification = new DocumentVerificationService(config);
    this.biometricVerification = new BiometricVerificationService(config);
  }
}

export { DataVerificationService, RadarVerificationService };

export default PremblyVerificationService;
