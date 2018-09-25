import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Feedback } from '../../model/feedback';
import { ActivatedRoute, Router} from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private http : HttpClient, private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(query => {
      this.id = query['id'];
    })

    this.http.get<Feedback>('http://localhost:55643/api/Feedbacks/' + this.id ).subscribe((res : Feedback) => {
      this.feedback = res;
    })
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
    this.http.put('http://localhost:55643/api/Feedbacks/' + this.id, this.feedback).subscribe(
      res => console.log(res)
    );

    alert('修改成功');
    this.router.navigate(['/feedback', 'edit', this.id]);
  }



}
