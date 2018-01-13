import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
	baseURL: 'https://wh.yyread.com'
})

module.exports = instance