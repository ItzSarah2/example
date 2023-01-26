import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyTestComponent } from './vocabulary-test.component';

describe('VocabularyTestComponent', () => {
  let component: VocabularyTestComponent;
  let fixture: ComponentFixture<VocabularyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabularyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
