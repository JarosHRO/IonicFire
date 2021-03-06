import { Component, OnInit } from '@angular/core';
import { PeoplesService } from 'src/app/services/peoples.service';
import { People } from 'src/app/models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
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
