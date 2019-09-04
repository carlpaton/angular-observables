import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs'
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {

  private counterSubject = new BehaviorSubject<number>(0)
  private countObservable$: Observable<number>
  private foo = 'this is the text value of foo'
  constructor() { }

  ngOnInit() {
    this.countObservable$ = this.counterSubject
  }

  inc() {
    // debugger
    let _count = this.counterSubject.getValue() + 1
    this.counterSubject.next(_count)
  }
}