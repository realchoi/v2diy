import { Node } from "./node.model"
/**话题列表 model */
export interface ITopicItem {
    /**主键 Id */
    id: number,
    /**标题 */
    title: string,
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
    /**评论数量 */
    commentCount: Number
}