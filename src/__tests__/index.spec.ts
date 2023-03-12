import PremblySdk from '..';
import { NIN_BASE_64_TEST_IMAGE } from '../utils/consts';

describe('Prembly SDK Test', () => {
  const config = {
    apiKey: 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY',
    appId: 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY',
    env: 'test',
  };
  const premblyClient = new PremblySdk(config);

  describe('Errors are handled', () => {
    it('throws a bad request error when bad input is inserted', async () => {
      try {
        const res = await premblyClient.verifyBankAcctFull({
          bank_code: 676,
          number: 88888888,
        });
      } catch (err) {
        expect(err).toHaveProperty(
          'message',
          'An AxiosError occurred: Bad Request'
        );
        expect(err).toHaveProperty('code', 400);
      }
    });
  });

  describe('Check all banks and bvn API work', () => {
    it('get all bank codes', async () => {
      const { data } = await premblyClient.getAllBankCodes();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
    });
    it('verify bank account with full details', async () => {
      const res = await premblyClient.verifyBankAcctFull({
        number: 4444444444,
        bank_code: 214,
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('account_data');
    });

    it('verify bvn', async () => {
      const res = await premblyClient.verifyBvn({ number: 54651333604 });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('bvn_data');
    });

    it('verify bvn with full details', async () => {
      const res = await premblyClient.verifyBvnFull({ number: 54651333604 });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('bvn_data');
    });
    it('verify bvn with face image', async () => {
      const res = await premblyClient.verifyBvnWithFace({
        number: 54651333604,
        image:
          'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('bvn_data');
    });
  });

  describe('Check all government issued documents API work', () => {
    it('verify CaC', async () => {
      const res = await premblyClient.verifyCAC({
        company_type: 'RC',
        rc_number: '092932',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify CaC with full details', async () => {
      const res = await premblyClient.verifyCACFull({
        company_name: 'TEST COMPANY',
        rc_number: '092932',
        company_type: 'RC',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify credit bureau', async () => {
      const res = await premblyClient.verifyCreditBureau({
        phone_number: '08080808080',
        first_name: 'test',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify drivers license', async () => {
      const res = await premblyClient.verifyDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify basic drivers license', async () => {
      const res = await premblyClient.verifyBasicDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        first_name: 'test',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify full drivers license', async () => {
      const res = await premblyClient.verifyFullDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        first_name: 'test',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify drivers license image', async () => {
      const res = await premblyClient.verifyDriversLicenseImage({
        image: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEB==',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify drivers license face_id', async () => {
      const res = await premblyClient.verifyDriversLicenseFaceID({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        image:
          'https://res.cloudinary.com/dh3i1wodq/image/upload/v1675417496/cbimage_3_drqdoc.jpg',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify nin with image', async () => {
      const res = await premblyClient.verifyNinWithImage({
        image:
          'https://asset.cloudinary.com/dh3i1wodq/089761016db6dab086ca450bf2465898',
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
    it('verify nin with base 64 image', async () => {
      const res = await premblyClient.verifyNinWithImage({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', true);
      expect(res).toHaveProperty('response_code', '00');
    });
  });
});
