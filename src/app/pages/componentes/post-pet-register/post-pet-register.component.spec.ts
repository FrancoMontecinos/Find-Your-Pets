import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPetRegisterComponent } from './post-pet-register.component';

describe('PostPetRegisterComponent', () => {
  let component: PostPetRegisterComponent;
  let fixture: ComponentFixture<PostPetRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPetRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
