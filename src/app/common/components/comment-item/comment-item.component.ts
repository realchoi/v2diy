import { Component, OnInit, Input } from '@angular/core';

import { ICommentItem } from '../../models/comment/comment-item.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  /**评论条目信息 */
  @Input() commentItem: ICommentItem | undefined;
  /**是否显示分割线 */
  @Input() showDivider: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
