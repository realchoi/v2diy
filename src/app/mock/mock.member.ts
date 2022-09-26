import { IMockBase } from "./mock.base";

const MemberMock: IMockBase[] = [
    {
        Url: '/user/list',
        Method: 'get',
        Res: {
            "data|5-10": [{
                "Id|+1": "@guid",
                "Name|1": "@cname(2)"
            }]
        }
    },
    {
        Url: '/user/add',
        Method: 'post',
        Res: {
            "Id|1": "@guid",
            "Name|1": "@cname()"
        }
    }];
export default MemberMock;