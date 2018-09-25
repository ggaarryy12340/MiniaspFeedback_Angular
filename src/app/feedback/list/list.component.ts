import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../model/feedback';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExportService } from '../../export.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private exportService : ExportService) { }

   feedbackList : Feedback[];

  ngOnInit() {
    this.http.get<Feedback[]>('http://localhost:55643/api/Feedbacks').subscribe((res : Feedback[]) => {
      this.feedbackList = res;
    })
  }

  doDelete(id : number) {
    this.http.delete('http://localhost:55643/api/Feedbacks/' + id.toString() ).subscribe((res) => {
      if(res['id'] == id){
        alert('刪除成功');
      }else{
        alert('刪除失敗');
      }
      location.reload();
    })
  }

  doExport() {
    this.exportService.JSONToCSVConvertor(JSON.stringify(this.feedbackList), 'FeedbackData', true);
  }
}
