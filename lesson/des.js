var axios = require('axios');
axios.get('https://api.github.com/users/zhufengnodejs')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });