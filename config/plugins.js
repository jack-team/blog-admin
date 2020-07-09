import webpack from 'webpack';
import packImg from './pack.img';
import packScss from './pack.sass';
import packFont from './pack.font';
import packBabel from './pack.babel';
import { args } from '../utils/cache';
import resolve from './../utils/resolve';
import chunkHash from './../utils/chunkHash';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ModuleConcatenationPlugin from 'webpack/lib/optimize/ModuleConcatenationPlugin';

const plugins = [];

const __dev__ = (
    args.env === `development`
)

plugins.push(
    packBabel(),
    packScss(true),
    packScss(false),
    packImg(),
    packFont()
);

//环境变量
plugins.push(
    new webpack.DefinePlugin({
        __dev__: __dev__
    })
)

//设置模板位置
plugins.push(
    new HtmlWebpackPlugin({
        template: resolve(`tpl.html`)
    })
)

//提取css
plugins.push(
    new MiniCssExtractPlugin({
        filename: `css/[name]${chunkHash(__dev__, `content`)}.css`
    })
)

// 开启 Scope Hoisting
plugins.push(
    new ModuleConcatenationPlugin()
)

export default plugins;