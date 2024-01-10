const axios = require('axios');

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: '',
  headers: { }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));

})
.catch((error) => {
  console.log(error);
});

