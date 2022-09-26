import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-reply',
  templateUrl: './comment-reply.component.html',
  styleUrls: ['./comment-reply.component.scss']
})
export class CommentReplyComponent implements OnInit {
  /**回复内容 */
  replyContent: string = "";
  /**回复按钮是否显示加载状态 */
  isLoading: boolean = false;
  /**是否显示回复成功与否的提示 */
  showAlert: boolean = false;
  /**提示类型 */
  alertType: "success" | "info" | "warning" | "error" = "success";
  alertMessage: string = "回复成功";
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  /**提交回复 */
  submitReply(): void {
    if (!this.replyContent || this.replyContent.length < 5) {
      this.showAlert = true;
      this.alertType = "error";
      this.alertMessage = "请至少回复 5 个字符";
      return;
    }
    this.isLoading = true;
    this.showAlert = false;
    // 调用接口新增回复
    this._http.post('/api/comment/add', {})
      .subscribe(res => {
        setTimeout(() => {
          console.log({ '回复结果：': res });
          this.isLoading = false;
          this.showAlert = true;
          this.alertType = "success";
          this.alertMessage = "回复成功";
          console.log("回复成功")
        }, 2000);
      });
  }

  /**Ctrl + Enter 事件 */
  onCtrlEnter(event: any): void {
    this.submitReply();
  }
}
