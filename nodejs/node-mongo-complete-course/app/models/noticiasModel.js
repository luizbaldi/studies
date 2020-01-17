module.exports = () => {
    
    this.getNoticias = (connection, callback) => {
        connection.query('SELECT * FROM news', callback);
    };

    this.getNoticia = (connection, callback) => {
        connection.query('SELECT * FROM news where id_new = 1', callback);
    }

    return this;
}