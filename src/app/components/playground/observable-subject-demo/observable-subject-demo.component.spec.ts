import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSubjectDemoComponent } from './observable-subject-demo.component';

describe('ObservableSubjectDemoComponent', () => {
  let component: ObservableSubjectDemoComponent;
  let fixture: ComponentFixture<ObservableSubjectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableSubjectDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableSubjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
