const path = require('path');

module.exports = {
  entry: './src/index.js', // Главный файл (входная точка)
  output: {
    filename: 'bundle.js', // Выходной файл
    path: path.resolve(__dirname, 'dist'), // Папка для сохранения выходных файлов
  },
  module: {
    rules: [
      // Загрузчик для JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Загрузчик для HTML
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // Загрузчик для CSS
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  // Другие настройки Webpack...
};
