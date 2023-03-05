import { VerifyCaC } from "@/src/types";
import {
  VERIFY_CAC_ADVANCE_ENDPOINT,
  VERIFY_CAC_ENDPOINT,
} from "@/src/utils/consts";
import { BaseSDK } from "../base-config";

export class GovtDatasVerification extends BaseSDK {
  verifyCAC(datas: Pick<VerifyCaC, "company_type" | "rc_number">) {
    return this.post(VERIFY_CAC_ENDPOINT, datas as {});
  }

  verifyCACFull(datas: VerifyCaC) {
    return this.post(VERIFY_CAC_ADVANCE_ENDPOINT, datas as {});
  }
}
