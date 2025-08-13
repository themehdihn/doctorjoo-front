import http from "./httpService";

export function getDoctorsApi() {
  return http.get("/doctor/list").then(({ data }) => data.data);
}

export function createDoctorApi(data){
  return http.post("/doctor/add",data).then(({ data }) => data.data);
}