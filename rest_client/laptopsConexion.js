const IP = "192.168.1.162";
const PORT = 3002;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllLaptops = (fnRefreshList) => {
  fetch(URL + "laptops")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};
