module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    //app.use('/', require('./celebrities.routes.js')) // DESPUES DE HORAS Y PROBANDO DE COÑA
    //app.use('/celebrities/index', require('./celebrities.routes.js'))
    //app.use('/', require('./movies.routes.js'))
    
}