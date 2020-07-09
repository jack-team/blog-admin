export interface loginPara {
    userName: string;
    password: string
}

export default interface Actions {
    login(para: loginPara): Promise<void>;
    loginOut():void;
}