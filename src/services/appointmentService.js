import http from "./httpService";

export function getAppointmentsApi() {
  return http.get("/appointment/list-admin").then(({ data }) => data.data);
}

export function bookAppointmentApi(data) {
  return http
    .post("/appointment/book-appointment", data)
    .then(({ data }) => data.data);
}

export function cancelAppointmentAdminApi(id) {
  return http
    .post(`/appointment/cancel-appointment/${id}`)
    .then(({ data }) => data.data);
}
