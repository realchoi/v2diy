import { Component, OnInit, Input } from '@angular/core';
import { ITopicDetail } from 'src/app/domains/topic/model/topic-detail.model';
import { ICommentItem } from 'src/app/common/models/comment/comment-item.model';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  /**当前话题详情 */
  @Input() topicDetail: ITopicDetail | undefined;
  constructor() { }

  ngOnInit(): void {
    this.topicDetail = {
      id: 7,
      title: "Intel i5 12400F 和 AMD 5600 怎么选？",
      content: `## 需求

公司业务上有一个需求，在页面上选择两张表中的各一个字段，将二者建立业务上的外键关系，前提是需要两者都是索引字段，否则会影响后续的查询效率。所以现在需要查询某个字段是否是索引字段。

## 过程

以前没怎么用过 PostgreSQL，所以不太熟（其实对所有数据库都不熟😣），Google 上搜索了很久都没发现该问题的解决方法，有的都是查询某张表中的索引，搞的我一度怀疑是不是 PostgreSQL 不支持该查询。最后时刻，我用全英文关键字又搜索了一次，别说，居然出来了！又是 Stackoverflow！这不禁让我想起前两天看到的一篇[帖子](https://www.v2ex.com/t/874223, "中文互联网已死")，中文互联网真的已经死了。

## 解决

这是 Stackoverflow 上面相关问题的链接：[List columns with indexes in PostgreSQL](https://stackoverflow.com/questions/2204058/list-columns-with-indexes-in-postgresql)

在此我将其中的两个方法摘抄记录一下。`,
      node: {
        nameEn: "pc-diy",
        nameCn: "攒机"
      },
      createUser: "realchoi",
      createTime: new Date(2022, 8, 22, 20, 36, 54),
      lastReplyUser: "Rsy",
      lastReplyTime: new Date(2022, 8, 22, 20, 36, 54),
      readTimes: 347,
      commentCount: 3,
      comments: [{
        content: "是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些",
        author: {
          id: 1,
          userName: "realchoi",
          nickName: "realchoi",
          avatarUrl: "//cdn.v2ex.com/avatar/bab8/abf4/190048_large.png?m=1653817009"
        },
        replyTime: new Date(2022, 8, 22, 20, 36, 54),
        floorNumber: 1
      },
      {
        content: "实在要用 ujs ，把它开一下也没啥问题，可以和 turbo_stream 用在一起",
        author: {
          id: 1,
          userName: "hellonunam",
          nickName: "hellonunam",
          avatarUrl: "https://l.ruby-china.com/user/avatar/21212/7fde11.jpg!md"
        },
        replyTime: new Date(2022, 8, 22, 21, 36, 54),
        floorNumber: 2
      },
      {
        content: "是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些",
        author: {
          id: 1,
          userName: "realchoi",
          nickName: "realchoi",
          avatarUrl: "//cdn.v2ex.com/avatar/bab8/abf4/190048_large.png?m=1653817009"
        },
        replyTime: new Date(2022, 8, 22, 20, 36, 54),
        floorNumber: 3
      },
      {
        content: "实在要用 ujs ，把它开一下也没啥问题，可以和 turbo_stream 用在一起",
        author: {
          id: 1,
          userName: "hellonunam",
          nickName: "hellonunam",
          avatarUrl: "https://l.ruby-china.com/user/avatar/23196.jpg!md"
        },
        replyTime: new Date(2022, 8, 22, 21, 36, 54),
        floorNumber: 4
      },
      {
        content: "是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些",
        author: {
          id: 1,
          userName: "realchoi",
          nickName: "realchoi",
          avatarUrl: "//cdn.v2ex.com/avatar/bab8/abf4/190048_large.png?m=1653817009"
        },
        replyTime: new Date(2022, 8, 22, 20, 36, 54),
        floorNumber: 5
      },
      {
        content: "实在要用 ujs ，把它开一下也没啥问题，可以和 turbo_stream 用在一起",
        author: {
          id: 1,
          userName: "hellonunam",
          nickName: "hellonunam",
          avatarUrl: "https://l.ruby-china.com/user/avatar/23196.jpg!md"
        },
        replyTime: new Date(2022, 8, 22, 21, 36, 54),
        floorNumber: 6
      },
      {
        content: "是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些是可以，但绑着 stimulus 用多爽呢！结构上来看 stimulus 结构上也要优雅一些",
        author: {
          id: 1,
          userName: "realchoi",
          nickName: "realchoi",
          avatarUrl: "//cdn.v2ex.com/avatar/bab8/abf4/190048_large.png?m=1653817009"
        },
        replyTime: new Date(2022, 8, 22, 20, 36, 54),
        floorNumber: 7
      },
      {
        content: "实在要用 ujs ，把它开一下也没啥问题，可以和 turbo_stream 用在一起",
        author: {
          id: 1,
          userName: "hellonunam",
          nickName: "hellonunam",
          avatarUrl: "https://l.ruby-china.com/user/avatar/23196.jpg!md"
        },
        replyTime: new Date(2022, 8, 22, 21, 6, 54),
        floorNumber: 8
      }]
    }
  }

}
