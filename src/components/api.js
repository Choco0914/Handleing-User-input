import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 555d0f61683673f153fce9139bf34d9bcd7d0ea1892a784a307169f38703b2f1"
  }
});

export const getPhoto = term => {
  api.get("search/photos", {
    params: { query: term }
  });
};
