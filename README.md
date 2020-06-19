<div align="center">
    <img src="./imgs/logo-dark.png">
</div>
<h3>
    Covi-ID is an open source risk management tool designed to protect privacy.
</h3>
---

# Index

* [Introduction to the Covi ID Application](#introduction-to-the-covi-id-application)
    * [Key Functionalities of the Web Application](#key-functionalities-of-the-web-application)

* [Project Details](#project-details)
    * [Getting started](#getting-started)
    * [Other Functionality](#other-functionality)
    * [Learn More About React App](#learn-more-about-react-app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This repository is for the web app of [Covi-ID](https://coviid.me/). This product was designed with data privacy and privacy-preserving considerations at the core of its architecture. This was done by permitting the creation of Covi-ID wallets in the form of self-sovereign identities. This is facilitated by employing StreetCred, the custodian wallet holder. In essence, this will allow individuals to prove you do not pose a public health risk. 

The other related repositories can be found here:

#### [> `API Core`](https://github.com/covi-id/cid-api-core)
#### [> `Mobile App`](https://github.com/covi-id/cid-mob-app)

---

# Introduction to the Covi ID Application 

The Covi-ID application offers a mobile app that allows management of access to public spaces. The app is used from a verifier’s perspective allowing them to check an individual into or out of their premises. This is achieved through scanning QR Codes. For an individual to generate their individual QR Code, this will need to be done through the web platform. The Covi-ID application is, therefore, a two-fold project. There exists a web application and a mobile application. The web application is where the Covi-ID’s are created and the QR Codes are generated and the mobile application facilitates the scanning of the QR Codes to manage entrance onto the premises. In essence, the app is more of a QR code scanner than an interactive application.

Verifiers can be classified as places/locations whereby the public may gather such as airports, shops, restaurants, schools, and more. Therefore, the initial success of the mobile application is dependent on verifiers adopting it as well as users generating their Covi-ID’s via the web application.

Should a user not have access to a mobile device or computer, their Covi-ID wallet can be generated for them through a trusted third party acquaintance, after which they will print out their QR code and keep it on them for future use.

---

### Key Functionalities of the Web Application

* An individual user is able to input their details and generate their Covi-ID and subsequent QR Code. This can be downloaded and stored as an image or even printed and stored in paper-based form. 
* An individual user will be able to input test details if they have gone for a COVID-19 test. These details will be stored in the Covi-ID database and once collaboration with the testing facilities is in place, these results will be validated and verified and QR Code status will be updated accordingly. 
* An individual can volunteer to submit their anonymous geolocation receipts to Safe Places to assist in contact tracing efforts. 

---

# Project Details

## Getting Started

In the project directory:

### 1. `npm install`

Install all the needed packages inside the project directory.

### 2. `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Other Functionality

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (`webpack`, `Babel`, `ESLint`, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More About React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

The various sections have moved:

* [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
* [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
* [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
* [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
