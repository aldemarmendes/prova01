import { async, ComponentFixture, TestBed } from '@react/core/testing';
import { IonicModule } from '@ionic/react';

import { P3Page } from './p3.page';

describe('P3Page', () => {
  let component: P3Page;
  let fixture: ComponentFixture<P3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
