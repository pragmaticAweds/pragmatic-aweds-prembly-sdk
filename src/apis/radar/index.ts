import { radarParams } from '@/src/types';
import { BaseSDK } from '../base-config';

export class RadarVerification extends BaseSDK {
  verifyRadarInfo(data: radarParams) {
    return this.radarPost(data);
  }
}
