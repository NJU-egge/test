import { axios } from '../utils/request';
import { ResultVO, ASK_MODULE } from './_prefix';

type ConversationInfo = {
    title: string; // 对话标题
    description?: string; // 对话描述（可选）
};

type SendMessageInfo = {
    conversationId: string; // 对话ID
    message: string; // 用户输入的信息
};

type RAGAnswer = {
    conversationId: string;
    userMessage: string;
    ragAnswer: string; // RAG生成的回答
};

export type ConversationResponse = {
    id: string; // 对话ID
    title: string; // 对话标题
    description?: string; // 对话描述
    createTime: string; // 创建时间
};

// 创建新的对话
export const createConversation = (conversationInfo: ConversationInfo) => {
    return axios.post<ResultVO<string>>(`${ASK_MODULE}/conversations`, conversationInfo, {
        headers: { 'Content-Type': 'application/json' }
    });
};

// 获取所有历史对话
export const getConversationsList = () => {
    return axios.get<ResultVO<ConversationResponse[]>>(`${ASK_MODULE}/conversations`);
};

// 删除指定对话
export const deleteConversation = (conversationId: string) => {
    return axios.delete<ResultVO<boolean>>(`${ASK_MODULE}/conversations/${conversationId}`);
};

// 发送消息到特定对话并获取RAG回答
export const sendMessageAndGetRAGAnswer = (sendMessageInfo: SendMessageInfo) => {
    return axios.post<ResultVO<RAGAnswer>>(`${ASK_MODULE}/conversations/${sendMessageInfo.conversationId}/messages`, sendMessageInfo, {
        headers: { 'Content-Type': 'application/json' }
    });
};
