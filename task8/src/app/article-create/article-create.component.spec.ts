import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreateComponent } from './article-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../app-routing.module";
import {ArticleListComponent} from "../article-list/article-list.component";
import {DebugElement} from "@angular/core";


describe('ArticleCreateComponent', () => {
  let component: ArticleCreateComponent;
  let fixture: ComponentFixture<ArticleCreateComponent>;
  let debugElement: DebugElement;

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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
