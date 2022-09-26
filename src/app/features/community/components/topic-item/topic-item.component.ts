import { Component, OnInit, Input } from '@angular/core';
import { ITopicItem } from 'src/app/domains/topic/model/topic-item.model';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.scss']
})
export class TopicItemComponent implements OnInit {
  /**当前话题信息 */
  @Input() topicItem: ITopicItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
