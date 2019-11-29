import { async, ComponentFixture, TestBed } from '@react/core/testing';
import { IonicModule } from '@ionic/react';

import { P2Page } from './p2.page';

describe('P2Page', () => {
  let component: P2Page;
  let fixture: ComponentFixture<P2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
