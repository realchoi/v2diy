import * as Mock from 'mockjs';
import CommentMock from './mock.comment';
import { TopicItemMock, TopicCreateMock } from './mock.topic';
import UserMock from './mock.member';

/* 定义mock数据的基础结构 */
export interface IMockBase {
    Url: string | RegExp;
    Method: 'get' | 'post' | 'delete' | 'put';
    Res: any;
}

// 设置mock数据返回延时200~600ms,模拟接口数据的异步返回
Mock.setup({
    timeout: '200-600'
});

// mock数据集
const routerList: IMockBase[] = [
    ...UserMock,
    ...TopicItemMock,
    ...TopicCreateMock,
    ...CommentMock
];

// 循环创建mock接口拦截数据
routerList.forEach(e => {
    Mock.mock(e.Url, e.Method, e.Res);
});

// 导出Mock
export default Mock;