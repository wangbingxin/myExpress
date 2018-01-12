const axios = require('axios')
const qs = require('qs')

const instance = axios.create({
	baseURL: 'https://wh.yyread.com'
})

module.exports = instance