import Api from '../../libs/Api';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL} from 'react-native-dotenv';

const _api = new Api();
_api.configure({apiUrl: API_URL, storage: AsyncStorage});

export default _api;
