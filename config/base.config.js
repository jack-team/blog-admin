import {
    args
} from '../utils/cache';

import plugins from './plugins';
import loaders from './loaders';
import optimize from './optimize';
import resolve from './../utils/resolve'
import chunkHash from './../utils/chunkHash';

const __DEV__ = (
    args.env === `development`
)

const _entry_ = {
    app_in: resolve(`src/index.tsx`)
}

const _output_ = {
    publicPath : `/`,
    path: resolve(`dist`),
    filename:   `js/[name]${chunkHash(__DEV__, `chunk`)}.js`
}

const _module_ = {
    rules:loaders
}

const _resolve_ = {
    modules:[
        resolve(`src`),
        resolve(`node_modules`)
    ],
    extensions:[
        `.tsx`, `.ts`, `.js`, `.json`,`.less`
    ]
}

export default {
    mode: args.mode,
    entry: _entry_,
    output: _output_,
    plugins: plugins,
    module: _module_,
    resolve: _resolve_,
    optimization: optimize,
    devtool: __DEV__?`source-map`:``
}