import { IMockBase } from "./mock.base";

export const TopicItemMock: IMockBase[] = [
    {
        Url: '/api/topic/list',
        Method: 'get',
        Res: {
            "data|10-15": [{
                "id": "@increment(1)",
                "title": "@ctitle",
                /**节点 */
                "node": {
                    /**节点英文名 */
                    nameEn: "@cword",
                    /**节点中文名 */
                    nameCn: "@cname"
                },
                /**创建时间 */
                "createTime": "@date(yyyy-MM-dd hh:mm:ss)",
                /**创建用户 */
                "createUser": "@cword",
                /**最后回帖用户 */
                "lastReplyUser": "@cword",
                /**最后回帖时间 */
                "lastReplyTime": "@date(yyyy-MM-dd hh:mm:ss)",
                /**评论数量 */
                "commentCount|1-999": 1
            }]
        }
    }
]

export const TopicCreateMock: IMockBase[] = [
    {
        Url: '/api/topic/create',
        Method: 'get',
        Res: {
            "data|10-15": [{
                "id|+1": Number,
                "title|1": String,
                "tag|1": String,
                // /**节点 */
                // "node|1": Node,
                // /**创建时间 */
                // "createTime": Date,
                // /**创建用户 */
                // "createUser|1": String,
                // /**最后回帖用户 */
                // "lastReplyUser|1": String,
                // /**最后回帖时间 */
                // "lastReplyTime|1": String,
                // /**评论数量 */
                // commentCount: Number
            }]
        }
    }
]