import axios from 'axios';

const apikey = process.env.REACT_APP_API_AUTH;

export default axios.create({

  baseURL: 'https://api.unsplash.com',

  headers: { Authorization: 'Client-ID ' + apikey }

});