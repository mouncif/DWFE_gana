import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfournisseursComponent } from './listfournisseurs.component';

describe('ListfournisseursComponent', () => {
  let component: ListfournisseursComponent;
  let fixture: ComponentFixture<ListfournisseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfournisseursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
