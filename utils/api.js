import http from "./http";

export function getData() {
  return http.get("/api/products/?populate=*");
}
export function getCategory() {
  return http.get("/api/categories/?populate=*");
}
export function getBlogs() {
  return http.get("/api/blogs?populate=*");
}
export function getBlogCategory() {
  return http.get("/api/category-blogs");
}
