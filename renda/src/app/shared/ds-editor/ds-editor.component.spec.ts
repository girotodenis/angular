import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsEditorComponent } from './ds-editor.component';

describe('DsEditorComponent', () => {
  let component: DsEditorComponent;
  let fixture: ComponentFixture<DsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
