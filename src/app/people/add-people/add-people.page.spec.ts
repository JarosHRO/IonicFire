import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeoplePage } from './add-people.page';

describe('AddPeoplePage', () => {
  let component: AddPeoplePage;
  let fixture: ComponentFixture<AddPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeoplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
