//const { resolve } = require('path');
const path = require('path');
//hacemos referencia al archivo que vamos a traer
const HtmlWebpackPlugin = require('html-webpack-plugin');
//permite usar el recurso de CSS Y SASS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
    entry:'./src/index.js',//Entrada
    //LO QUE SALE
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',//empaquetado que se va a crear
    },//EXTENSIONES
    //esto me va a permitir que estoy trabajando en un nuevo desarrollo con esta
    //configuración. Y lo guardo...
    mode:'development',
    resolve: {
        extensions: ['.js', '.jsx',".scss"]
    },//MODULOS
    module: {//module and plugins to install
        //reglas necesarias en el proyecto
        rules: [//FIRST REGLA
            {//probamos cuales son los elementos que vamos a estar trabajando.(JS y jsx)
                test: /\.js$|jsx/,
                exclude: /node_modules/,//excluir lo q no quiere q lea dentro del proyecto
                use:{
                    loader: 'babel-loader'//loader de bable
                }
            },//SECOND REGLA
            {
                test:/\.html$/,//trabaja con html, lee todos los archivos html
                use:{
                    loader: 'html-loader'
                }
            },
            //TERCER RELGLA; nos va a permitir trabajar con css, con los loader
            {
                test:/\.scss$/,//trabaja con sass, lee todos los archivos sass
                use:[
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader", // 1. Turns sass into css
                ],
            }
        ]
    },
    //plugins q nosotros vamos a usar
    //creamos un objeto
    plugins:[
        new HtmlWebpackPlugin({//creamos un objeto y creamos su template con su filename
            template:'./public/index.html',
            filename:'./index.html'
        }),
        //objeto css
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    //trabajamos con todos los elementos que son importantes para el desarrollo de nuestro entorno LOCAL
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
    }
}
