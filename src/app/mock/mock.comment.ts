import { IMockBase } from "./mock.base";

const CommentMock: IMockBase[] = [
    {
        Url: '/api/comment/list',
        Method: 'get',
        Res: {
            "data|5-10": [{
                "Id|+1": "@guid",
                "Name|1": "@cname(2)"
            }]
        }
    },
    {
        Url: '/api/comment/add',
        Method: 'post',
        Res: {
            "Id|1": "@guid",
            "Name|1": "@cname()"
        }
    }];
export default CommentMock;