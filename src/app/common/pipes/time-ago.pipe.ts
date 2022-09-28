import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(dateTime: Date): string {
    if (dateTime) {
      return this.pastTime(dateTime);
    }
    return '';
  }

  /**
   * 计算某个时间与当前时间相比，过去了多少小时或者多少天
   * @param dateTime 待比较的时间
   * @returns 
   */
  private pastTime(dateTime: Date | string): string {
    let now = new Date();
    let tempDateTime: Date;
    if (dateTime instanceof Date) {
      tempDateTime = dateTime;
    }
    else {
      tempDateTime = new Date(dateTime);
    }
    // 起始日期到现在相差秒数
    let seconds = now.getTime() / 1000 - tempDateTime.getTime() / 1000
    // 相差分钟数
    let minutes = Math.floor(seconds / 60);
    // 小于 1 天，则精确到 m 小时 n 分钟
    if (minutes < 1440) {
      if (minutes < 60) {
        return `${minutes} 分钟前`;
      }
      else {
        // 相差小时
        let hours = Math.floor(minutes / 60);
        let leftMinutes = minutes % 60;
        return `${hours} 小时 ${leftMinutes} 分钟前`;
      }
    }
    // 大于 1 天，则直接显示 n 天前
    else {
      // 相差天数
      let days = Math.floor(minutes / 60 / 24);
      return `${days} 天前`;
    }
  }
}
