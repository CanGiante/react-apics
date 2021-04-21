import axios from 'axios';


export default axios.create({

  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization: 'Client-ID GMhs1qomdV6WYuHa4fglVXW7bEBNOzvdX-FpRKD0El8'
  }
});