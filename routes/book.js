const express = require('express')
const router = express.Router()
const recommend = require('../api/recommend')

router.get('/',(req, res)=>{
	recommend.imgLoop()
		.then(response=>{
			res.render('index', { title: '首页', data: response.data.data })
		})
})

module.exports = router