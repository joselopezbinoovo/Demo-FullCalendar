import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterModalComponent } from './creater-modal.component';

describe('CreaterModalComponent', () => {
  let component: CreaterModalComponent;
  let fixture: ComponentFixture<CreaterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
