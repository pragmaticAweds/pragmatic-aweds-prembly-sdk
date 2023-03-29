import PremblySdk from '..';
import { NIN_BASE_64_TEST_IMAGE } from '../utils/consts';

describe('Prembly SDK Test', () => {
  const config = {
    apiKey: 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY',
    appId: 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY',
    env: 'test',
  };
  const premblyClient = new PremblySdk(config);

  const successCode = 200;
  const badRequestCode = 400;
  describe('Errors are handled', () => {
    it('throws a bad request error when bad input is inserted', async () => {
      try {
        await premblyClient.verifyNgBankAcctFull({
          bank_code: 676,
          number: 88888888,
        });
      } catch (err) {
        expect(err).toHaveProperty(
          'message',
          'An AxiosError occurred: Bad Request'
        );
        expect(err).toHaveProperty('code', badRequestCode);
      }
    });
  });

  describe('Verifying all Nigeria banks and bvn APIs are working', () => {
    it('get all Nigeria bank codes', async () => {
      const res = await premblyClient.getAllNgBankCodes();

      expect(res.data).toBeDefined();
      expect(Array.isArray(res.data.data)).toBe(true);
    });
    it('verify Nigeria bank account with full details', async () => {
      const res = await premblyClient.verifyNgBankAcctFull({
        number: 4444444444,
        bank_code: 214,
      });
      expect(res).toHaveProperty('status', successCode);
    });

    it('verify Nigeria bvn', async () => {
      const res = await premblyClient.verifyNgBvn({ number: 54651333604 });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('bvn_data');
    });

    it('verify Nigeria bvn with full details', async () => {
      const res = await premblyClient.verifyNgBvnFull({ number: 54651333604 });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('bvn_data');
    });
    it('verify Nigeria bvn with face image', async () => {
      const res = await premblyClient.verifyNgBvnWithFace({
        number: 54651333604,
        image:
          'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('bvn_data');
    });
  });

  describe('Verify all Nigeria government issued documents APIs are working ', () => {
    it('verify Nigeria CaC', async () => {
      const res = await premblyClient.verifyNgCAC({
        company_type: 'RC',
        rc_number: '092932',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria CaC with full details', async () => {
      const res = await premblyClient.verifyNgCACFull({
        company_name: 'TEST COMPANY',
        rc_number: '092932',
        company_type: 'RC',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria credit bureau', async () => {
      const res = await premblyClient.verifyNgCreditBureau({
        phone_number: '08080808080',
        first_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau consumer basic is working', async () => {
      const res = await premblyClient.verifyNgCreditBureauConsumerBasic({
        mode: 'ID',
        customer_name: 'Test Name',
        number: 11111111111,
        dob: '1990-08-01',
        customer_reference: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau consumer advance is working', async () => {
      const res = await premblyClient.verifyNgCreditBureauConsumerFull({
        mode: 'ID',
        customer_name: 'Test Name',
        number: '22222222222',
        dob: '1990-08-01',
        customer_reference: 'test',
      });

      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau business basic is working', async () => {
      const res = await premblyClient.verifyNgCreditBureauComBasic({
        customer_name: 'Test Name',
        customer_reference: 'test',
        rc_number: 59002,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau business advance is working', async () => {
      const res = await premblyClient.verifyNgCreditBureauComFull({
        customer_name: 'Test Name',
        rc_number: 59001,
        customer_reference: 'test',
      });

      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria drivers license', async () => {
      const res = await premblyClient.verifyNgDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria basic drivers license', async () => {
      const res = await premblyClient.verifyNgBasicDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        first_name: 'test',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria full drivers license', async () => {
      const res = await premblyClient.verifyNgFullDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        first_name: 'test',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria drivers license image', async () => {
      const res = await premblyClient.verifyNgDriversLicenseImage({
        image: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEB==',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria drivers license face_id', async () => {
      const res = await premblyClient.verifyNgDriversLicenseFaceID({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        image:
          'https://res.cloudinary.com/dh3i1wodq/image/upload/v1675417496/cbimage_3_drqdoc.jpg',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with image', async () => {
      const res = await premblyClient.verifyNgNINWithImage({
        image:
          'https://asset.cloudinary.com/dh3i1wodq/089761016db6dab086ca450bf2465898',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with base 64 image', async () => {
      const res = await premblyClient.verifyNgNINWithImage({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with face', async () => {
      const res = await premblyClient.verifyNgNINWithFace({
        number: 12345678909,
        image:
          'https://res.cloudinary.com/dh3i1wodq/image/upload/v1675417496/cbimage_3_drqdoc.jpg',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with virtual nin', async () => {
      const res = await premblyClient.verifyNgNIN({
        number: 'AA1234567890123B',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with raw nin', async () => {
      const res = await premblyClient.verifyNgNIN({
        number_nin: 12345678909,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria phone number with basic details', async () => {
      const res = await premblyClient.verifyNgPhoneNo({
        number: '08082838283',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria phone number with full details', async () => {
      const res = await premblyClient.verifyNgPhoneNoFull({
        number: '08082838283',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria TIN', async () => {
      const res = await premblyClient.verifyNgTIN({
        number: '08082838487',
        channel: 'Phone',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria vehicle ', async () => {
      const res = await premblyClient.verifyNgVehicle({
        vehicle_number: 'AAA000000',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria voters card is working', async () => {
      const res = await premblyClient.verifyNgVotersCard({
        number: '987f545AJ67890',
        last_name: 'test',
        state: 'Lagos',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria voters card is working with image only but return with 01 for unverified data', async () => {
      const res = await premblyClient.verifyNgVotersCardWithImg({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
    });
    it('verify Nigeria stamp duty is working', async () => {
      const res = await premblyClient.verifyNgStampDuty({
        number: '2022-0000-1111-2222',
        customer_name: 'Test Account',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria International passport Sync is working', async () => {
      const res = await premblyClient.verifyNgIntlPassportSync({
        number: 'A00400000',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria International passport with face is working', async () => {
      const res = await premblyClient.verifyNgIntlPassportWithFace({
        number: 'A00400000',
        last_name: 'test',
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria International passport with image is working', async () => {
      const res = await premblyClient.verifyNgIntlPassportWithImg({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
    });
  });

  describe('Verifying All Ghana APIs are working', () => {
    it('verify Ghana International Passport', async () => {
      const res = await premblyClient.verifyGhIntlPassport({
        number: 'G0000575',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Ghana Voters Card failed for unverified data', async () => {
      const res = await premblyClient.verifyGhVotersCard({
        number: 9001332866,
        type: 'OLD',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '01');
    });
  });

  describe('Verifying All South Africa APIs are working', () => {
    it('verify South Africa National Identity is working', async () => {
      const res = await premblyClient.verifySaNationalIdentity({
        nationalid: '0123474827482',
        dob: '1985-01-20',
        firstname: 'Khayone',
        lastname: 'Lethabo',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
  });
});
