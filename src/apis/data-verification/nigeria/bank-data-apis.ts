import { BaseSDK } from '../../base-config';
import { IndexSignatureBaseParams, VerifyBankAcctParams } from '@/src/types';
import {
  GET_ALL_CODES_ENDPOINT,
  VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT,
  VERIFY_BVN_ENDPOINT,
  VERIFY_BVN_ADVANCE_VERSION_2_ENDPOINT,
  VERIFY_BVN_WITH_IMAGE_ENDPOINT,
} from '@/src/utils/consts';

/**
 * Provides methods for verifying bank account details and BVN (Bank Verification Number) using the API.
 * @extends BaseSDK
 */
export class NGBankDatasVerification extends BaseSDK {
  /**
   * Retrieves all bank codes.
   * @async
   * @returns {Promise<any>} A promise that resolves with the result of the GET request.
   */
  async getAllNgBankCodes() {
    return await this.get(GET_ALL_CODES_ENDPOINT);
  }

  /**
   * Verifies a bank account using account details and returns the result.
   * @async
   * @param {VerifyBankAcctParams} datas - The bank account details to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  async verifyNgBankAcctFull(datas: VerifyBankAcctParams) {
    return await this.post(VERIFY_ADVANCE_ACCOUNT_VERSION_2_ENDPOINT, datas);
  }

  /**
   * Verifies a BVN using an image and the BVN number, and returns the result.
   * @async
   * @param {object} datas - The BVN details to verify.
   * @param {string} datas.image - The base64 encoded image data.
   * @param {string} datas.number - The BVN number to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  async verifyNgBvnWithFace(
    datas: Pick<IndexSignatureBaseParams, 'image' | 'number'>
  ) {
    return await this.post(VERIFY_BVN_WITH_IMAGE_ENDPOINT, datas);
  }

  /**
   * Verifies a BVN using the BVN number, and returns the result.
   * @async
   * @param {object} datas - The BVN details to verify.
   * @param {string} datas.number - The BVN number to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  async verifyNgBvn(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return await this.post(VERIFY_BVN_ENDPOINT, datas);
  }

  /**
   * Verifies a BVN using the BVN number, and additional account details, and returns the result.
   * @async
   * @param {object} datas - The BVN details to verify.
   * @param {string} datas.number - The BVN number to verify.
   * @returns {Promise<any>} A promise that resolves with the result of the POST request.
   */
  async verifyNgBvnFull(datas: Pick<IndexSignatureBaseParams, 'number'>) {
    return await this.post(VERIFY_BVN_ADVANCE_VERSION_2_ENDPOINT, datas);
  }
}
