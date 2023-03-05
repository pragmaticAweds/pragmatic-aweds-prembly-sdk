import { VerifyBankAcctParams, VerifyBvnWithFaceParams } from "@/src/types";
import {
  GET_ALL_CODES_ENDPOINT,
  VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT,
  VERIFY_BVN_ENDPOINT,
  VERIFY_BVN_ADVANCE_VERSION_2_ENDPOINT,
  VERIFY_BVN_WITH_IMAGE_ENDPOINT,
} from "@/src/utils/consts";

import { BaseSDK } from "../base-config";

export class BankDatasVerification extends BaseSDK {
  getAllBankCodes() {
    return this.get(GET_ALL_CODES_ENDPOINT);
  }

  verifyBankAcctFull(datas: VerifyBankAcctParams) {
    return this.post(VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT, datas as {});
  }

  verifyBvnWithFace(datas: VerifyBvnWithFaceParams) {
    return this.post(VERIFY_BVN_WITH_IMAGE_ENDPOINT, datas as {});
  }

  verifyBvn(datas: Pick<VerifyBvnWithFaceParams, "number">) {
    return this.post(VERIFY_BVN_ENDPOINT, datas as {});
  }

  verifyBvnFull(datas: Pick<VerifyBvnWithFaceParams, "number">) {
    return this.post(VERIFY_BVN_ADVANCE_VERSION_2_ENDPOINT, datas as {});
  }
}
