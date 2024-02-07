import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsAgendadorComponent } from './ds-agendador.component';

describe('DsAgendadorComponent', () => {
  let component: DsAgendadorComponent;
  let fixture: ComponentFixture<DsAgendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsAgendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsAgendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
