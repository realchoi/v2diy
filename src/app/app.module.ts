import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config'

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { AppRoutingModule } from './app-routing.module';
import { TopicListComponent } from './features/community/topic-list.component';
import { FrameComponent } from './common/components/frame/frame.component';
import { CommunityHeaderComponent } from './features/community/components/community-header/community-header.component';
import { TopicItemComponent } from './features/community/components/topic-item/topic-item.component';
import { TopicDetailComponent } from './features/community/components/topic-detail/topic-detail.component';
import { MarkedPipe } from './common/pipes/marked.pipe';
import { CommentItemComponent } from './common/components/comment-item/comment-item.component';
import { TimeAgoPipe } from './common/pipes/time-ago.pipe';
import { CommentReplyComponent } from './common/components/comment-reply/comment-reply.component';
import { TopicCreateComponent } from './features/community/components/topic-create/topic-create.component';
import { MarkdownComponent } from './common/components/markdown/markdown.component';

/**NGZorro 组件全局配置 */
const ngZorroConfig: NzConfig = {
  // message: { nzTop: 120 },
  // notification: { nzTop: 240 }
}

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    FrameComponent,
    CommunityHeaderComponent,
    TopicItemComponent,
    TopicDetailComponent,
    MarkedPipe,
    CommentItemComponent,
    TimeAgoPipe,
    CommentReplyComponent,
    TopicCreateComponent,
    MarkdownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzAvatarModule,
    NzDividerModule,
    NzInputModule,
    NzAlertModule,
    NzCardModule,
    NzSelectModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
