# Prembly Identitypass NodeJS SDK

The Prembly Identitypass SDK is a library that allows you to easily integrate verification services into your nodeJS app. The SDK is based on the Prembly Identitypass API, which provides a range of data verification services, including identity verification, document verification, biometric verification, radar verification and other verification services.

## Features

The Prembly Identitypass SDK offers the following features:

- Data verification: verify the authenticity of datas from different countries and sources such as stamp duty, plate numbers, NIN, international passport, bvn, government-issued IDs, credit reports etc.

- Global business verification: get essential company information you are doing/want to have a business with by verifying their authenticity, as well as for marketing and sales purposes by searching using company name, customer details, email, or country code, adhering to ISO-3166-1 Alpha-2 standards, and biometric-based registration verification.

- Document verification: you can easily add document verification to your software applications by using document image verification method. It's a simple and efficient way to automate document verification across regions like Asia-Pacific (APAC), Europe, Middle East, and Africa (EMEA), North America (NA), and South America (SA).

- Biometrics: Enroll and authenticate your users by utilizing facial recognition method. This allows you to register and verify your users' identities using their unique facial features.

- Identity Radar: prevents fraud in digital businesses using quality data and our AI engine. Choose our Fraud Detection & Prevention solution for peace of mind.

- General: you can also use other verification services.

## Requirements

- node.js
- API credentials from <a href="https://docs.prembly.com/docs/getting-the-live-api-keys" target="_blank">Prembly Identitypass</a>

## Installation

To install the Prembly IdentityPass SDK, you can use npm, yarn and pnpm.

Using npm:

```ts
npm install prembly-sdk
```

Using yarn:

```ts
yarn add prembly-sdk
```

Using pnpm:

```ts
pnpm install prembly-sdk
```

## Configuration

After installing the app, you can import the SDK to use as follow:

```ts
import Prembly from 'prembly-sdk';

const config = {
apiKey = 'your_prembly_app_api_key';
appId = 'your_prembly_app_id';
env = 'default is set to test'; //should be changed to live
}

//creating an instance
const premblyClient = new Prembly(config);

//calling one of the sdk method
premblyClient.getAllNgBankCodes().then((res) => console.log(res));

```

## Documentation

### Data Verification Methods

The data verification methods are seperated based on the country and are listed below:

#### Nigeria

| Sn  | Method Name | Method | Params | Description |
| --- | ----------- | ------ | ------ | ----------- |

| 1 | Stamp Duty | verifyNgStampDuty | number & customer_name | <a href="https://docs.prembly.com/docs/stamp-duty-1" target="_blank">View</a> |
| 2 | Vehicle Plate No | verifyNgVehiclePlateNo | vehicle_number | <a href="https://docs.prembly.com/docs/plate-number-verification" target="_blank">View</a> |
