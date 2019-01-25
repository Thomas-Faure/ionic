import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessagePage } from './add-message.page';

describe('AddMessagePage', () => {
  let component: AddMessagePage;
  let fixture: ComponentFixture<AddMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
