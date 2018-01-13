import express from 'express'
import { bookLoop, bookList, weekRecommend } from '../api/recommend'

const router = express.Router()

router.get('/',(req, res)=>{
	var p1 = new Promise((resolve, reject)=>{
		bookLoop().then(response=>{
			resolve(response.data.data)
		})
	})
	var p2 = new Promise((resolve, reject)=>{
		bookList().then(response=>{
			resolve(response.data.data)
		})
	})
	var p3 = new Promise((resolve, reject)=>{
		weekRecommend().then(response=>{
			resolve(response.data.data)
		})
	})
	Promise.all([p1, p2, p3]).then(([data1,data2,data3])=>{
		res.render('index', { title: '首页', data1: data1, data2:data2, data3:data3 })
	})
})

module.exports = router