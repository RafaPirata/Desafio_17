const options = {
    mysql: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '',
      database : 'products'
    }

  },

  mongoDB: {
    connection: {
      URL: 'mongodb+srv://rafaelpiotti:cali6alma@cluster0.k9fkvuk.mongodb.net/?retryWrites=true&w=majority'
    },
  },

  filePath: {
    path: './DB/productos.json',
    pathMsg: '../DB/messages.json'
  },

  sqlite: {
    client: 'sqlite3',
    connection: {
    filePath: './DB/messages.json'
    },
    useNullAsDefault: true
  },
  
  HOST: process.env.HOST || 'localhost'
}
  module.exports = {
    options
  }