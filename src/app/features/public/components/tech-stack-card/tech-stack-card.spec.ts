import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackCard } from './tech-stack-card';

describe('TechStackCard', () => {
  let component: TechStackCard;
  let fixture: ComponentFixture<TechStackCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
