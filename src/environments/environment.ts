// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDu9eY_5EDS3ZG2R1xJLrO8FWht65sbMew",
    authDomain: "blog-a1599.firebaseapp.com",
    databaseURL: "https://blog-a1599.firebaseio.com",
    projectId: "blog-a1599",
    storageBucket: "gs://blog-a1599.appspot.com",
    messagingSenderId: "863096672632"
  }
};
