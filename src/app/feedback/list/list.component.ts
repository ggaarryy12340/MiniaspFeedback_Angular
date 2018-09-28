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
    this.feedbackService.delete(id);
    location.reload();
  }

  doExport() {
    this.exportService.JSONToCSVConvertor(JSON.stringify(this.feedbackList), 'FeedbackData', true);
  }
}
