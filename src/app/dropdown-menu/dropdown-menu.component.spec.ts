import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownMenuComponent } from './dropdown-menu.component';

describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMenuComponent],
    });
    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with dropdown closed', () => {
    const dropdownOptions =
      fixture.nativeElement.querySelector('#dropdownOptions');
    expect(dropdownOptions.classList).toContain('hidden');
  });

  it('should open dropdown when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('#dropdownBtn');
    const dropdownOptions =
      fixture.nativeElement.querySelector('#dropdownOptions');

    button.click();
    fixture.detectChanges();

    expect(dropdownOptions.classList).not.toContain('hidden');
  });

  it('should close dropdown when button is clicked again', () => {
    const button = fixture.nativeElement.querySelector('#dropdownBtn');
    const dropdownOptions =
      fixture.nativeElement.querySelector('#dropdownOptions');

    // Open dropdown
    button.click();
    fixture.detectChanges();

    // Close dropdown
    button.click();
    fixture.detectChanges();

    expect(dropdownOptions.classList).toContain('hidden');
  });

  it('should select page size when option is clicked', () => {
    const button = fixture.nativeElement.querySelector('#dropdownBtn');

    const getSelectedPageSizeSpy = spyOn(component.pageSizeEvent, 'emit');
    component.getSelectedPageSize(10);

    // Checking that the selected page size is updated
    expect(getSelectedPageSizeSpy).toHaveBeenCalledOnceWith(10); // Assuming 10 is selected, update as needed
  });

  it('should display correct number of options', () => {
    const button = fixture.nativeElement.querySelector('#dropdownBtn');

    // Open dropdown
    button.click();
    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll('a');
    expect(options.length).toBe(6); // Assuming 6 options are displayed, update as needed
  });

  it('should display correct option text', () => {
    const button = fixture.nativeElement.querySelector('#dropdownBtn');

    // Open dropdown
    button.click();
    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll('a');
    expect(options[0].textContent.trim()).toBe('10'); // Assuming the first option is '10', update as needed
    expect(options[1].textContent.trim()).toBe('30'); // Assuming the second option is '30', update as needed
    
  });
});
