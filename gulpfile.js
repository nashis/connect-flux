var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var webpackDevServer = require("webpack-dev-server");

gulp.task("webpack-dev-server", function(callback) {
    var compiler = webpack(webpackConfig);

    new webpackDevServer(compiler, {
    })
    .listen(8080, "localhost", function(err) {
        if(err) throw new gulpUtil.PluginError("webpack-dev-server", err);
        
        // log the run status
        gulpUtil.log("[webpack-dev-server]", "http://localhost:8080/index.html");
    });
});

gulp.task('default', ['webpack-dev-server']);