import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { RepoInfo } from '../models/repoInfo.model';  

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repository name', () => {
    const repo: RepoInfo = {
      name: 'Test Repo',
      id: 1,
      description: '',
      topics: [],
    };
    component.repoInfo = repo;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Test Repo');
  });

  it('should display repository description', () => {
    const repo: RepoInfo = {
      name: '',
      id: 1,
      description: 'Test Description',
      topics: [],
    };
    component.repoInfo = repo;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'Test Description'
    );
  });

  it('should display repository topics as buttons', () => {
    const repo: RepoInfo = {
      name: '',
      id: 1,
      description: '',
      topics: ['Topic 1', 'Topic 2'],
    };
    component.repoInfo = repo;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toContain('Topic 1');
    expect(buttons[1].textContent).toContain('Topic 2');
  });
});
