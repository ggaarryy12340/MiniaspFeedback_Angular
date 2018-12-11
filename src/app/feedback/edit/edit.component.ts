import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Feedback } from '../../model/feedback';
import { ActivatedRoute, Router} from '@angular/router'
import { NgForm } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private http : HttpClient, private route : ActivatedRoute, private router: Router, private feedbackService : FeedbackService) { }

  ngOnInit() {
    this.route.params.subscribe(query => {
      this.id = query['id'];
    })

    this.feedbackService.getSingle(this.id).subscribe(
      (res : Feedback) => {
        this.feedback = res;
      },(err : HttpErrorResponse) => {
        console.log(err);
        this.router.navigate(['/feedback']);
        alert("錯誤的Request");
      }
    )
  }

  feedback : Feedback;
  id : string;

  doTest() {
    console.log(this.feedback);
  }

  doReset(form: NgForm) {
    form.reset();
    this.feedback = {
      id : Number(this.id),
      name: '',
      ticketID: '',
      experience: '',
      howToWork: '',
      suggestion: '',
      wantToLearn: ''
    }
  }

  doEdit() {
    this.feedbackService.Edit(this.id, this.feedback).subscribe(res => {
      alert('修改成功');
      this.router.navigate(['/feedback', 'edit', this.id]);
    },(error) => {
      alert('修改失敗');
      console.log(error);
    });

  }



}
