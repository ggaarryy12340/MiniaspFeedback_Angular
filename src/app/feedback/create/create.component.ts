import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Feedback } from '../../model/feedback';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private feedbackSvc : FeedbackService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      this.feedback.TicketID = query['TicketID'];
    })
  };

  feedback = {
    TicketID: '',
    Name: '',
    Experience: '',
    HowToWork: '',
    Suggestion: '',
    WantToLearn: '',
  }

  doReset(form: NgForm) {
    form.reset();
    this.feedback = {
      Name: '',
      TicketID: '',
      Experience: '',
      HowToWork: '',
      Suggestion: '',
      WantToLearn: ''
    }
  }

  doSubmit() {
    //將feedback存入資料庫
    this.feedbackSvc.create(this.feedback);
    this.router.navigate(['/end']);
  }

}
