//总api
export const API_MODULE = '/api'

//问答模块
export const ASK_MODULE = `${API_MODULE}/ask`
//知识库模块
export const WARE_MODULE = `${API_MODULE}/ware`


export type ResultVO<T> = {
    code: string;
    msg: string;
    data: T;
};