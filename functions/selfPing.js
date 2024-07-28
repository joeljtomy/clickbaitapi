const axios = require("axios");

const selfPing = () => {
  axios
    .get(`https://clickbaitapi.onrender.com/`)
    .then((res) => console.log("Self Ping: ", res.status, res.statusText))
    .catch((error) => {
      if (error.response)
        console.log("Error Self Ping", error.response.statusText);
      else if (error.request)
        console.log("No response Self Ping: ", error.request.baseURL);
      else console.log("Error Self Ping: ", error.message);
    });
};

module.exports = selfPing;
