import { Component, OnInit } from '@angular/core';
import { PeoplesService } from 'src/app/services/peoples.service';
import { People } from 'src/app/models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.page.html',
  styleUrls: ['./add-people.page.scss'],
})
export class AddPeoplePage implements OnInit {

  public people: People = new People();

  constructor(private peoplesService: PeoplesService, private router: Router) { }

  ngOnInit() {
    this.people = {
      name: '',
      biography: '',
      heroe: ''
    };
  }

  sendPeople() {
    this.peoplesService.addPeople(this.people);
    this.router.navigate(['/people']);
  }

}
