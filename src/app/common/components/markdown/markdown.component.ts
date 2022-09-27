import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MarkdownConfig } from './markdown.config';

declare var editormd: any;

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MarkdownComponent),
    multi: true
  }]
})
export class MarkdownComponent implements OnInit, ControlValueAccessor {
  markdownConfig: MarkdownConfig = new MarkdownConfig();
  markdownContent: string = '';

  // editormd 对象
  private markdownEditor: any;

  private onChange = (_: any) => { };
  private onTouched = () => { };

  constructor() { }

  ngOnInit(): void {
    this.editorStartup();
  }

  writeValue(obj: any): void {
    this.markdownContent = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private editorStartup(): void {
    this.createEditor();
  }

  private createEditor(): void {
    this.markdownEditor = editormd('markdown-editor', this.markdownConfig);
    if (this.markdownEditor) {
      // 注册变更事件
      this.markdownEditor.on('change', () => {
        this.onChange(this.markdownContent);
        // 获取 html 格式的内容
        // console.log(this.markdownEditor.getHTML());
        // 获取 markdown 格式的内容
        // console.log(this.markdownEditor.getMarkdown());
      });
    }
  }
}
