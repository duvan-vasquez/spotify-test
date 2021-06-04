// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  scheme: 'io.ionic.starter', 
  apis: { 
    spotify: {
      clientId: '005985beb5d847c7808a15f7e2c4302c',
      clientSecret: 'b398450cb66b4ef0b1dd0ce0e7f928aa',
      urlResponse: {
        tokenExchangeUrl: 'https://spotify-dashboard1.herokuapp.com/exchange',
        tokenRefreshUrl: 'https://spotify-dashboard1.herokuapp.com/refresh'
      }
    }
  },
  database: {
    name: 'SPOTIFYDATABASE'
  },
  definitions: {
    userSpotify: 'user_spotify',
    authToken: 'auth',
    loggedIn: 'logged_in',
    token: 'token',
    accessToken: 'access_token',
    expireIn: 'expire_in',
    refreshToken: 'refresh_token'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
