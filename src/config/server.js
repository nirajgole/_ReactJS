import axios from 'axios';

export default axios.create({
  baseURL: 'http://my-json-server.typicode.com/nirajgole/json-server/',
  headers: {
    'Content-type': 'application/json'
  }
});
