import http from './server';

class UserDataService {
  createUser(data) {
    return http.post('/users', data);
  }
  getUsers() {
    return http.get('/users');
  }

  updateUser(id, user) {
    return http.put(`/users/${id}`, user);
  }

  viewUser(id) {
    return http.get(`/users/${id}`);
  }
  deleteUser(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new UserDataService();
