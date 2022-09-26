import { IUser } from "../user/user.model";

/**评论条目信息 */
export interface ICommentItem {
    /**评论内容 */
    content: string,
    /**作者 */
    author: IUser,
    /**回复时间 */
    replyTime: Date,
    /**楼层 */
    floorNumber: Number
}