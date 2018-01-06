const a = require('./a')
const b = require('./b')

module.exports = (app) => {
	app.get('/', (req,res)=>{
		res.redirect('/a')
	})

	app.use('/a', a)
	app.use('/b', b)

	app.use((req,res)=>{
		if(!res.headersSent){
			res.status(404).render('404')
		}
	})
	/*app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});*/
}