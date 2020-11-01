const os = require('os');

const getUsername = () => os.userInfo().username;

module.exports = { getUsername };
