# Prembly Identitypass NodeJS SDK

The Prembly Identitypass SDK is a library that allows you to easily integrate verification services into your nodeJS app. The SDK is based on the Prembly Identitypass API, which provides a range of data verification services, including identity verification, document verification, biometric verification, radar verification and other verification services.

## Features

The Prembly Identitypass SDK offers the following features:

- Data verification: Verify the authenticity of data from different countries and sources, including bank-datas, government-issued IDs, credit reports.

- Global business verification: Verify the authenticity of a range of documents, including passports, driver's licenses, and utility bills.

- Document verification: Verify the authenticity of a range of documents, including passports, driver's licenses, and utility bills.

- Biometrics: Verify the identity of your users using biometric data, such as fingerprints and facial recognition.

- Identity Radar: Verify the identity of your users using biometric data, such as fingerprints and facial recognition.

- General: Verify the identity of your users using biometric data, such as fingerprints and facial recognition.

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

Using the library

- Add your api key and app Id.
