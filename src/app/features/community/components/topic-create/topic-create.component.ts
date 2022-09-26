import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.scss']
})
export class TopicCreateComponent implements OnInit {
  /**选择的节点 */
  selectedNode = null;
  /**话题的主题 */
  topicTitle: string | null = null;;
  /**话题内容 */
  topicContent: string = "";
  /**回复按钮是否显示加载状态 */
  isLoading: boolean = false;
  /**是否显示回复成功与否的提示 */
  showAlert: boolean = false;
  /**提示类型 */
  alertType: "success" | "info" | "warning" | "error" = "success";
  alertMessage: string = "发布成功";
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  /**提交回复 */
  submitReply(): void {
    if (!this.validateInput()) {
      return;
    }
    this.isLoading = true;
    this.showAlert = false;
    // 调用接口新增回复
    this._http.post('/api/topic/create', {})
      .subscribe(res => {
        setTimeout(() => {
          this.isLoading = false;
          this.showAlert = true;
          this.alertType = "success";
          this.alertMessage = "发布成功";
        }, 2000);
      });
  }

  /**验证必填项 */
  validateInput(): boolean {
    // 节点
    if (!this.selectedNode) {
      this.showAlert = true;
      this.alertType = "error";
      this.alertMessage = "请选择一个节点";
      return false;
    }
    // 主题
    if (!this.topicTitle || this.topicTitle.length < 5) {
      this.showAlert = true;
      this.alertType = "error";
      this.alertMessage = "主题至少需要 5 个字符";
      return false;
    }
    // 内容
    if (!this.topicContent || this.topicContent.length < 5) {
      this.showAlert = true;
      this.alertType = "error";
      this.alertMessage = "内容至少需要 5 个字符";
      return false;
    }
    return true;
  }
}
