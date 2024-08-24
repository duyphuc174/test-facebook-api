const axios = require('axios');
let access_token =
'EAALyDN8P5ZC8BOxWkMueAOyxhtzz9iEDDZBZBmZCtZAMCIhUgMSa98QlfJtYQrALw5w4jIAsZCT4ZCLjyFysZApfVjZAuWeJR7SijSQrEJA4KKHE5Oq1559DDy8Dpd59rBdeFYdJ8YEDl4ixGGhiz2164yLI1vii5AYEwO1BsB4SZA4OYrIm0j9SFLebT8RPD3lZBCCoKSZAfXcPSvgFRglqOl6ZBDrQZD'
const httpRequest = axios.create({
    baseURL: 'https://graph.facebook.com/v20.0',
    Headers: {
        'Content-Type': 'application/json',
    },
});

const setAccessToken = (token) => {
    access_token = token;
    httpRequest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

setAccessToken(access_token);

module.exports = { httpRequest, setAccessToken };
