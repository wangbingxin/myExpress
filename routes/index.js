import express from 'express'
import { bookLoop } from '../api/recommend'

const router = express.Router()

router.get('/',(req, res)=>{
	bookLoop()
		.then(response=>{
			res.render('index', { title: '首页11', data: response.data.data })
		})
	/*Promise.all([
		recommend.bookLoop(),
		recommend.bookList(),
		recommend.weekRecommend()
	]).then(([data1],[data2],[data3])=>{
		res.render('index', { title: '首页', data: data2 })
	})*/
})

module.exports = router