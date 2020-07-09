declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.scss';
declare module '*.less';
declare module '*.less';

declare var __dev__: boolean;

interface Module {
    hot: { accept(): void }
}

declare var module: Module;