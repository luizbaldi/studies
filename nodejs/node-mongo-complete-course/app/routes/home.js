module.exports = (server) => {
    server.get('/', (req, res) => {
        res.render('home/index');
    });
}