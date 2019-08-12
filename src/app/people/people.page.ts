import { Component, OnInit, Input } from '@angular/core';
import { PeoplesService } from '../services/peoples.service';
import { People } from '../models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

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
