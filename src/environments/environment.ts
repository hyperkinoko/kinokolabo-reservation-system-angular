// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyC_PjBc18yjfxtKcoH6L6fKF2JqsORT__M',
  authDomain: 'kinokolabo-reserve.firebaseapp.com',
  projectId: 'kinokolabo-reserve',
  storageBucket: 'kinokolabo-reserve.appspot.com',
  messagingSenderId: '652031122463',
  appId: '1:652031122463:web:144005fe303bb46c20492a',
  measurementId: 'G-Z0S3HV3W47'
};

export const environment = {
  production: false,
  firebaseConfig: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
