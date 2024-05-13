import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyComponent } from './body-component.component';
import { CardComponent } from '../card/card.component';
import { RepoInfo } from '../models/repoInfo.model';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyComponent, CardComponent],
    });
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-card component for each item in counterArray', () => {
    // Arrange
    const counterArray: RepoInfo[] = [
      new RepoInfo('Repo 1', 1, 'Description 1', ['Topic 1', 'Topic 2']),
      new RepoInfo('Repo 2', 2, 'Description 2', ['Topic 3', 'Topic 4']),
    ];
    component.counterArray = counterArray;

    // Act
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement;
    const cardElements = compiled.querySelectorAll('app-card');
    expect(cardElements.length).toBe(counterArray.length);
  });

  it('should pass correct repoInfo data to each app-card component', () => {
    // Arrange
    const counterArray: RepoInfo[] = [
      new RepoInfo('Repo 1', 1, 'Description 1', ['Topic 1', 'Topic 2']),
      new RepoInfo('Repo 2', 2, 'Description 2', ['Topic 3', 'Topic 4']),
    ];

    const responseArray = [
      'Repo 1Description 1 Topic 1  Topic 2 ',
      'Repo 2Description 2 Topic 3  Topic 4 ',
    ];
    component.counterArray = counterArray;

    // Act
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement;
    const cardElements = compiled.querySelectorAll('app-card');

    cardElements.forEach((cardElement: HTMLElement, index: number) => {
      const cardComponent = cardElement.textContent;
      expect(cardComponent).toEqual(responseArray[index]);
    });
  });
});
