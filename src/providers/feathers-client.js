import feathers from '@feathersjs/feathers';
import restClient from '@feathersjs/rest-client';
import authenticationClient from '@feathersjs/authentication-client';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL} from 'react-native-dotenv';

// Configure an AJAX library (see below) with that client
const rest = restClient(API_URL);
const authentication = authenticationClient({storage: AsyncStorage});

const client = feathers();
client.configure(rest.fetch(fetch));
client.configure(authentication);

export default client;

// import feathers from '@feathersjs/client';
// import AsyncStorage from '@react-native-community/async-storage';
// import {API_URL} from 'react-native-dotenv';

// // Configure an AJAX library (see below) with that client

// export default function() {
//   const restClient = feathers.rest(API_URL);

//   const app = feathers()
//     .configure(restClient.fetch(fetch))
//     .configure(feathers.authentication({storage: AsyncStorage}));

//   // return app;
//   return {app};
// }
