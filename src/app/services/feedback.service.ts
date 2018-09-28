import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getAll() {
    //回傳觀察者物件，需要結果實在自行subscribe
    return this.http.get<Feedback[]>('http://localhost:55643/api/Feedbacks');
  }

  delete(id : number) {
    this.http.delete('http://localhost:55643/api/Feedbacks/' + id.toString() ).subscribe((res) => {
      if(res['id'] == id){
        alert('刪除成功');
      }else{
        alert('刪除失敗');
      }
    })
  }

  create(feedback) {
    this.http.post('http://localhost:55643/api/Feedbacks', feedback).subscribe(
      res => console.log(res)
    );
  }

  Edit(id : string, feedback : Feedback) {
    this.http.put('http://localhost:55643/api/Feedbacks/' + id, feedback).subscribe(
      res => console.log(res)
    );
  }
}
