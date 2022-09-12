import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPractiseComponent } from './api-practise.component';

describe('ApiPractiseComponent', () => {
  let component: ApiPractiseComponent;
  let fixture: ComponentFixture<ApiPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPractiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
