import Ip from 'ip';
import webpack from 'webpack';
import cache from '../utils/cache';
import webpackConfig from './base.config';
import devServer from 'webpack-dev-server';

const args = cache.args;

const ip = (
    args.ip || Ip.address()
)

const stats = {
    colors: true,
    cached: true,
    exclude: [/node_modules[\\\/]/]
}

const serverConfig = {
    host: ip,
    open: true,
    overlay:true,
    hotOnly:true,
    inline: true,
    stats: stats,
    compress: true,
    contentBase: `./`,
    proxy: {
        '/system':{
            target: 'http://localhost:6868',
            pathRewrite: { '^/system': '/system' }
        }
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback:true
}

webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
)

const server = new devServer(
    webpack(webpackConfig), serverConfig
);

server.listen(args.port, ip, () => (
    console.log(`Server listen to ${ip}:${args.port}`)
))