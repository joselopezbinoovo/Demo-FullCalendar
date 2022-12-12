import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSourceModelComponent } from './create-source-model.component';

describe('CreateSourceModelComponent', () => {
  let component: CreateSourceModelComponent;
  let fixture: ComponentFixture<CreateSourceModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSourceModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSourceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
