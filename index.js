const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('http://dummy.restapiexample.com/api/v1/employee/10958')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });