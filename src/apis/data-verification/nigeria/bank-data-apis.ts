import { BaseSDK } from '../../base-config';
import { indexSignatureBaseParams, bankAcctParams } from '@/src/types';
import {
  GET_ALL_BANK_CODES_ENDPOINT,
  VERIFY_BANK_ACCOUNT_ADVANCE_ENDPOINT,
  VERIFY_BVN_ENDPOINT,
  VERIFY_BVN_ADVANCE_ENDPOINT,
  VERIFY_BVN_WITH_IMAGE_ENDPOINT,
  VERIFY_BANK_ACCOUNT_ENDPOINT,
  VERIFY_BANK_ACCOUNT_COMPARISON_ENDPOINT,
} from '@/src/utils/consts';

/**
 * Provides methods for verifying bank account details and BVN (Bank Verification Number) using the API.
 * @extends BaseSDK
 */
export class NgBankDatasVerification extends BaseSDK {
  /**
   * Retrieves all bank codes.
   * @
   * @returns {Promise<any>} A promise that resolves with the result of the GET request.
   */
  getAllNgBankCodes() {
    return this.get(GET_ALL_BANK_CODES_ENDPOINT);
  }

  /**
   * Verifies a bank account using account details and returns the result.
   * @
   * @param {bankAcctParams} datas - The bank account details to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */

  verifyNgBankAcctFull(datas: Pick<bankAcctParams, 'number' | 'bank_code'>) {
    return this.post(VERIFY_BANK_ACCOUNT_ADVANCE_ENDPOINT, datas);
  }

  /**
   * Verifies a BVN using an image and the BVN number, and returns the result.
   * @
   * @param {object} datas - The BVN details to verify.
   * @param {string} datas.image - The base64 encoded image data.
   * @param {string} datas.number - The BVN number to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  verifyNgBvnWithFace(
    datas: Pick<indexSignatureBaseParams, 'image' | 'number'>
  ) {
    return this.post(VERIFY_BVN_WITH_IMAGE_ENDPOINT, datas);
  }

  /**
   * Verifies a BVN using the BVN number, and returns the result.
   * @
   * @param {object} datas - The BVN details to verify.
   * @param {string} datas.number - The BVN number to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  verifyNgBvn(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_BVN_ENDPOINT, datas);
  }

  /**
   * Verifies a BVN using the BVN number, and additional account details, and returns the result.
   * @
   * @param {object} datas - The BVN details to verify.
   * @param {string} datas.number - The BVN number to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  verifyNgBvnFull(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_BVN_ADVANCE_ENDPOINT, datas);
  }

  //newly added but not tested

  verifyNgBankAcctBasic(datas: Pick<bankAcctParams, 'number' | 'bank_code'>) {
    return this.post(VERIFY_BANK_ACCOUNT_ENDPOINT, datas);
  }

  verifyNgBankAcctComparism(datas: bankAcctParams) {
    return this.post(VERIFY_BANK_ACCOUNT_COMPARISON_ENDPOINT, datas);
  }
}
