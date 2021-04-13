import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json'
  }
});

// baseURL: 'http://localhost:3001',
// baseURL: 'http://my-json-server.typicode.com/nirajgole/json-server',
