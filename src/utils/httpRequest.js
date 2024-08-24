const axios = require('axios');
const access_token =
   'EAALyDN8P5ZC8BOyTJFBZA20XIPoTxihhC0ZCw5aC6EXiIADC4cZAbSZBZC6CZBkyOuf5vLuP4ZA9JO2jcI7CZBaYXunXKfnINOFJmkwvrPDP3mjfobl7Yaq65qXnvJEtZCz06WumlwDCbu8Bn3td14YsZAEqtyCrnZCkXOixyB8s4ZB4VEpNd2XmTozQvGgU53ZCmZCdscg6GsZBbQsCI4ZBx3GiStL3ic7QZD'

const httpRequest = axios.create({
    baseURL: 'https://graph.facebook.com/v20.0',
    Headers: {
        'Content-Type': 'application/json',
    },
});

const setAccessToken = (token) => {
    httpRequest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

setAccessToken(access_token);

module.exports = { httpRequest, setAccessToken };
