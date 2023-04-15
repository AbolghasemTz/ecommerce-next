import http from "./http";

export function getData() {
  return http.get("/api/products/?populate=*");
}
export function getCategory() {
  return http.get("/api/categories/?populate=*");
}
