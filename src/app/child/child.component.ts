import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {

  @Input() foo : string;
  @Input() countObservable : Observable<number>;
  @Input() counterSubject : Observable<number>;

  constructor() { }

  ngOnInit() {
  }

}