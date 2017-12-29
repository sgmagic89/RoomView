/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirmwareupdateComponent } from './firmwareupdate.component';

describe('FirmwareupdateComponent', () => {
  let component: FirmwareupdateComponent;
  let fixture: ComponentFixture<FirmwareupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
