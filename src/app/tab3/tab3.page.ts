import { Component, OnInit } from '@angular/core';
import { PeoplesService } from 'src/app/services/peoples.service';
import { People } from 'src/app/models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public searchText: string;
  public peoples: Array<People> = new Array<People>();

  constructor(private peopleService: PeoplesService, private router: Router) { }

  ngOnInit() {
    this.peopleService.getPeoples().subscribe(data => {
      this.peoples = data;
      console.log(this.peoples);
    });
  }

  addPeople() {
  	this.router.navigate(['/addPeople']);
  }

}
