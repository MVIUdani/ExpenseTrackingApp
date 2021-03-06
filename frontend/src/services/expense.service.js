import http from "../http-common";

class ExpenseDataService {
  getAll() {
    return http.get("/expenses");
  }

  get(id) {
    return http.get(`/expenses/${id}`);
  }

  create(data) {
    return http.post("/expenses", data);
  }

  update(id, data) {
    return http.put(`/expenses/${id}`, data);
  }

  delete(id) {
    return http.delete(`/expenses/${id}`);
  }

  deleteAll() {
    return http.delete(`/expenses`);
  }

  findByType(type) {
    return http.get(`/expenses?type=${type}`);
  }
}

export default new ExpenseDataService();