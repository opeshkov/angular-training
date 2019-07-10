import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });

  it('should create new article', fakeAsync(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    let created = false;
    service.articles$.subscribe(result => {
      if (!created) {
        expect(result.length).toBe(2);
      } else {
        expect(result.length).toBe(3);
      }
    });
    tick(3000);
    created = true;
    const article$ = service.createArticle$({
      title: 'Article11',
      text: 'Cool Article'
    });
    tick(3000);
    article$.subscribe(result => expect(result.id).toBeTruthy())
    tick(3000);
  }));

  it('should remove article', fakeAsync(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    let removed = false;
    service.articles$.subscribe(result => {
      if (!removed) {
        expect(result.length).toBe(3);
      } else {
        expect(result.length).toBe(2);
      }
    });
    tick(3000);
    removed = true;
    const article$ = service.removeArticle(3);
    tick(3000);
  }));

});
