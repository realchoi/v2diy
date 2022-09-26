import { Node } from "./node.model"
import { ICommentItem } from "src/app/common/models/comment/comment-item.model";

/**话题详情 model */
export interface ITopicDetail {
    /**主键 Id */
    id: number,
    /**标题 */
    title: string,
    /**内容 */
    content: string,
    /**节点 */
    node: Node,
    /**创建时间 */
    createTime: Date,
    /**创建用户 */
    createUser: string,
    /**最后回帖用户 */
    lastReplyUser: string,
    /**最后回帖时间 */
    lastReplyTime: Date,
    /**阅读次数 */
    readTimes: Number,
    /**评论数量 */
    commentCount: Number,
    /**评论条目 */
    comments: ICommentItem[]
}