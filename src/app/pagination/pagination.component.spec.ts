import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    const emitSpy = spyOn(component.newPageNumber, 'emit');
    component.currentPageNumber = 0;
    component.getNewPageNumber(+1);
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should not emit event', () => {
    const emitSpy = spyOn(component.newPageNumber, 'emit');
    component.currentPageNumber = 1;
    component.getNewPageNumber(+1);
    expect(emitSpy).not.toHaveBeenCalled();
  });
});