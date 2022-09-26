/**话题 Model */
export interface ITopic {
    /**主键 Id */
    id: number,
    /**标题 */
    title: string,
    /**内容 */
    content: string,
    /**归类 */
    category: string,
    /**标签 */
    node: string,
    /**创建时间 */
    createTime: Date,
    /**最后修改时间 */
    lastTime: Date,
    /**创建用户 */
    createUser: string,
    /**最后修改用户 */
    lastUser: string,
    /**最后回帖用户 */
    lastReplyUser: string,
    /**最后回帖时间 */
    lastReplyTime: string,
    /**评论数量 */
    commentCount: Number
}