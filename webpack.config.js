const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: "development",
    /* This will watch for file changes and compile to dist, but doesnt allow dev server ... */
    //watch: true,
    entry: {
        app: "./src/js/app.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 28960,
        hot: true,
        index: "index.html",

        /* So we can communicate with backend server while using webpack dev server */
        proxy: {
            "/api": {
                target: "http://localhost:28961",
                pathRewrite: {"^/api": ""},
                bypass: function (req, res) {
                    console.log("Proxying request..." + req.path);
                }
            }
        },

        /* Allows access from any machine in local network for cool dev experience */
        //host: "0.0.0.0"
    }
};
