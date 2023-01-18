import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateControlComponent } from './generate-control.component';

describe('GenerateControlComponent', () => {
  let component: GenerateControlComponent;
  let fixture: ComponentFixture<GenerateControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
