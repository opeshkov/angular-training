import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { ArticleCreateComponent } from './article-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../app-routing.module";
import {ArticleListComponent} from "../article-list/article-list.component";
import {DebugElement} from "@angular/core";
import {ArticlesService} from "../articles.service";
import {By} from "@angular/platform-browser";
import {Observable, of} from "rxjs";
import {IArticle} from "../iarticle";
import {delay} from "rxjs/operators";
import {Router} from "@angular/router";


describe('ArticleCreateComponent', () => {
  let component: ArticleCreateComponent;
  let fixture: ComponentFixture<ArticleCreateComponent>;
  let debugElement: DebugElement;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleCreateComponent,
        ArticleListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: Router,
          useValue: router
        },
        {
          provide: ArticlesService,
          useValue: {
            createArticle$(article: IArticle): Observable<IArticle> {
              return of(article)
                .pipe(
                  delay(2000),
                );
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display disabled button when fields are empty', () => {
    fixture.detectChanges();
    const button = debugElement.query(By.css('.btn-success'));
    expect(button.properties.disabled).toBeTruthy();
  });

  it('should display active button when all fields are filled', () => {
    fixture.detectChanges();
    const titleInput = debugElement.query(By.css('#title'));
    const textInput = debugElement.query(By.css('#text'));
    titleInput.triggerEventHandler('input', { target: { value: 'title' }});
    textInput.triggerEventHandler('input', { target: { value: 'text' }});
    fixture.detectChanges();
    const button = debugElement.query(By.css('.btn-success'));
    expect(button.properties.disabled).toBeFalsy();
  });

  it('should not display loader by default', () => {
    fixture.detectChanges();
    const loader = debugElement.query(By.css('.fa-spinner'));
    expect(loader).toBeNull();
  });

  it('should display loader on submit', () => {
    fixture.detectChanges();
    const titleInput = debugElement.query(By.css('#title'));
    const textInput = debugElement.query(By.css('#text'));
    titleInput.triggerEventHandler('input', { target: { value: 'title' }});
    textInput.triggerEventHandler('input', { target: { value: 'text' }});
    fixture.detectChanges();
    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    const loader = debugElement.query(By.css('.fa-spinner'));
    expect(loader).toBeTruthy();
  });

  it('should redirect to list after submit', fakeAsync(() => {
    fixture.detectChanges();
    const titleInput = debugElement.query(By.css('#title'));
    const textInput = debugElement.query(By.css('#text'));
    titleInput.triggerEventHandler('input', { target: { value: 'title' }});
    textInput.triggerEventHandler('input', { target: { value: 'text' }});
    fixture.detectChanges();
    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    tick(3000);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/list'], { queryParams: { new: true } });
  }));

});
