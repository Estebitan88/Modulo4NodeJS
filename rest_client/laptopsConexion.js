const IP = "192.168.68.107";
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

export const saveLaptopRest = (lap, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      marca: lap.marca,
      procesador: lap.procesador,
      memoria: lap.memoria,
      disco: lap.disco,
    }),
  };
  fetch(URL + "laptops", config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage();
      console.log(body);
    });
};
