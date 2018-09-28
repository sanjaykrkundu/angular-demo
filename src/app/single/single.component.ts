import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  emp$: Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getEmp(1).subscribe(
      data=>this.emp$ = data
    )
  }


}
