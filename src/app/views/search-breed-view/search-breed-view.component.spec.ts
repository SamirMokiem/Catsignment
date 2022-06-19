import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBreedViewComponent } from './search-breed-view.component';

describe('SearchBreedViewComponent', () => {
  let component: SearchBreedViewComponent;
  let fixture: ComponentFixture<SearchBreedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBreedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBreedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
