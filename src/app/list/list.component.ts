import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  empData$: Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getEmps().subscribe(
      data=>this.empData$ = data
    )

    console.log(this.empData$);
  }

}
