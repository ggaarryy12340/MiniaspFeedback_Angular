import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../model/feedback';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExportService } from '../../services/export.service';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private exportService : ExportService, private feedbackService : FeedbackService) { }

   feedbackList : Feedback[];

  ngOnInit() {
    this.feedbackService.getAll().subscribe(res => {
      this.feedbackList = res;
    });
  }

  doDelete(id : number) {
    this.feedbackService.delete(id).subscribe((res) => {
      if(res['id'] == id){
        alert('刪除成功');
      }else{
        alert('刪除失敗');
      }
      location.reload();
    },
    err => alert("刪除失敗")
    );
  }

  doExport() {
    this.exportService.JSONToCSVConvertor(JSON.stringify(this.feedbackList), 'FeedbackData', true);
  }
}
