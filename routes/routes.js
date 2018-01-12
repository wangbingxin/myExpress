const Index = require('./index')
const b = require('./b')

module.exports = (app) => {
	app.get('/', (req,res)=>{
		res.redirect('/')
	})

	app.use('/index', Index)
	app.use('/b', b)

	app.use((req,res)=>{
		if(!res.headersSent){
			res.status(404).render('404')
		}
	})
}