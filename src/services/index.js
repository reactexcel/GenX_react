import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

export default function fireAjax(method, api_url, data, headers) {
  const url = base_url + api_url;
  if (method === "GET") {
    return axios.get(url, { headers });
  } else if (method === "POST") {
    return axios.post(url, data, { headers });
  } else if (method === "PUT") {
    return axios.put(url, data, { headers });
  } else if (method === "DELETE") {
    return axios.delete(url, { headers });
  }
}
