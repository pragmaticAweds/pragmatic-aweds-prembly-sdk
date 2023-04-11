import { Config } from '@/src/types/config-types';
import { BaseSDK } from '../base-config';
// import { NgDatasVerification } from './nigeria';

export class PremblyDataVerification extends BaseSDK {
  protected config: Config;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  //   public ngDatas: NgDatasVerification;

  constructor(config: Config) {
    super(config);
    this.config = config;
    // this.ngDatas = new NgDatasVerification(config);
  }
}
