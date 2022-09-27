export class MarkdownConfig {
    public width = '100%';
    public height = '620px';
    public path = 'assets/editor.md/lib/';
    public codeFold = true;
    public searchReplace = true;
    public toolbar = true;
    public emoji = false;
    public taskList = true;
    public tex = true;
    public readOnly = false;
    public tocm = true;
    public watch = true;
    public previewCodeHighlight = true;
    public saveHTMLToTextarea = true;
    public markdown = '';
    public flowChart = true;
    public syncScrolling = true;
    public sequenceDiagram = true;
    public imageUpload = true;
    public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
    public imageUploadURL = '';
    public placeholder = '在线 Markdown 编辑'

    constructor() {
    }
}
