import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import {DebugElement} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../app-routing.module";
import {ActivatedRoute} from "@angular/router";
import { of } from "rxjs";
import { ArticleCreateComponent } from '../article-create/article-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {articles, ArticlesService} from "../articles.service";
import {delay} from "rxjs/operators";

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleListComponent,
        ArticleCreateComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({new: false})
          }
        },
        {
          provide: ArticlesService,
          useClass: ArticlesService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(debugElement.componentInstance).toBeTruthy();
  });

  it('should show loader when data is being loaded', () => {
    fixture.detectChanges()
    const loader = debugElement.query(By.css('.fa-spinner'));
    expect(loader).toBeTruthy();
  });

  it('should hide loader when data is loaded', fakeAsync(() => {
    fixture.detectChanges();
    tick(3000);
    fixture.detectChanges();
    const loader = debugElement.query(By.css('.fa-spinner'));
    expect(loader).toBeNull();
  }));

  it('should show all articles', fakeAsync(() => {
    fixture.detectChanges();
    tick(3000);
    fixture.detectChanges();
    const articleRows = debugElement.queryAll(By.css('tbody tr'));
    expect(articleRows.length).toBe(3);
  }));

  it('should show 1 less article after deletion', fakeAsync(() => {
    fixture.detectChanges();
    tick(3000);
    fixture.detectChanges();
    const removeButton = debugElement.query(By.css('.btn-danger'));
    removeButton.triggerEventHandler('click', null);
    tick(3000);
    fixture.detectChanges();
    const articleRows = debugElement.queryAll(By.css('tbody tr'));
    expect(articleRows.length).toBe(2);
  }));

  it('should show has new article alert when route params contain a flag', fakeAsync(() => {
    // fixture.detectChanges();
    // tick(3000);
    // TestBed.overrideProvider(ActivatedRoute, { useValue: { queryParams: of({new: true})}})
    // fixture.detectChanges();
    // // tick(10000);
    // // fixture.detectChanges();
    // const successCreationAlertText = debugElement.query(By.css('.alert-success')).nativeElement.innerText;
    // expect(successCreationAlertText).toEqual('Article has been created successfully!');
  }));

});
