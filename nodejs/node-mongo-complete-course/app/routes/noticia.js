module.exports = (server) => {
    server.get('/noticia', (req, res) => {
        
        const connection = server['node-mongo-complete-course'].config.dbConnection();
        const noticiasModel = server['node-mongo-complete-course'].app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (err, data) => {
            if (err) {
                res.send(`Erro: ${err}`);
            } else {
                res.render('noticias/noticias', {news : data});
            }
        });
    });
}; 