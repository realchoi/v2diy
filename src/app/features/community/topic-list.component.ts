import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ITopicItem } from 'src/app/domains/topic/model/topic-item.model';
import { TOPICS } from './mock-topics';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  loading = false;
  /**话题列表 */
  topics: ITopicItem[] = [];

  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    const topics = of(TOPICS);
    console.log('文章', topics);
    topics.subscribe(topics => this.topics = topics);

    // this._http.get("/api/topic/list").subscribe((res: any) => {
    //   console.log("假数据：", res);
    //   this.topics = res.data as ITopicItem[];
    // })
  }

  createTopic(): void {
    this._router.navigate(['topic/create'])
  }
}
