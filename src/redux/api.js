import axios from "axios";

// url 호출 시 필요한 기본 값들 세팅
const api = axios.create({
  // 바뀌지 않은 고정 url
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-type": "application/json" },
});

// interceptor
// 선택적인 부분(없어도됨)

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 우리가 보낸 요청을 보고싶다.
    console.log("requert start", config);
    return config;
  },
  function (error) {
    // Do something with request error
    // 에러 확인
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 우리가 어떤 데이터를 받았는지 확인하고 싶다.
    console.log("get response", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // 에러 확인
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default api;
