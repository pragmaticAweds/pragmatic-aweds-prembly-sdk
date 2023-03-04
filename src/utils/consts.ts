export const PREMBLY_SDK_TEST_CREDENTIALS = {
  baseUrl: "https://sandbox.myidentitypass.com",
  apiKey: "https://sandbox.myidentitypass.com",
  appId: "https://sandbox.myidentitypass.com",
};

export const PREMBLY_SDK_BASEURL = "https://api.myidentitypay.com";

export function urlVersion(version: string = "v2") {
  return `api/${version}/biometrics/merchant/data/verification`;
}
