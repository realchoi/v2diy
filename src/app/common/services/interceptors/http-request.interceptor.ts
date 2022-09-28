import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpResponseBase
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, debounceTime, finalize, mergeMap, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      url: environment.baseApiUrl + (req.url.startsWith('/') ? req.url : '/' + req.url)
    }))
    // .pipe(
    //   debounceTime(1000),
    //   // 失败时重试2次
    //   retry(2),
    //   mergeMap((event: any) => {
    //     // 处理后端HTTP接口返回结果
    //     if (event instanceof HttpResponseBase) {
    //       // HTTP返回代码正常
    //       if (event.status >= 200 && event.status < 400) {
    //         // 处理HTTP Response
    //         if (event instanceof HttpResponse) {
    //           const body = event.body;
    //           // 判断后端的成功标志字段是否为true
    //           if (body && body.success) {
    //             // 取出响应体数据的data部分并继续后续操作(将原有的body替换为了body['result'])
    //             // return of(new HttpResponse(Object.assign(event, { body: body.result })));
    //             return event;
    //           } else {
    //             // 抛出异常
    //             throw Error(body.message);
    //           }
    //         }
    //       }
    //     }
    //     // 其余事件类型不作拦截处理
    //     return of(event);
    //   }), catchError((err: HttpErrorResponse) => {
    //     // 如果发生5xx异常，显示一个错误信息提示
    //     //this.appService.showSnackBar(err.message, 4000);
    //     console.error(err.message)
    //     return throwError(err);
    //   }), finalize(() => {
    //     // 最终processingHttpCount减一，并且在减至0的时候移除掉加载动画
    //     // setTimeout(() => --this.processingHttpCount === 0 ?
    //     //   this.appService.showLoadingBar = false : this.appService.showLoadingBar = true, 500);
    //   }));
  }
}
