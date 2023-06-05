import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvIndexMapComponent } from './uv-index-map.component';

describe('UvIndexMapComponent', () => {
  let component: UvIndexMapComponent;
  let fixture: ComponentFixture<UvIndexMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvIndexMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvIndexMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
