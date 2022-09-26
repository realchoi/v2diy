import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicListComponent } from './features/community/topic-list.component';
import { TopicDetailComponent } from './features/community/components/topic-detail/topic-detail.component';
import { TopicCreateComponent } from './features/community/components/topic-create/topic-create.component';

/**所有的路由配置 */
const routes: Routes = [
  // { path: '', redirectTo: 'topics', pathMatch: 'full' },
  { path: '', component: TopicListComponent },
  { path: 'topics', component: TopicListComponent },
  { path: 'topic/detail/:id', component: TopicDetailComponent },
  { path: 'topic/create', component: TopicCreateComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
