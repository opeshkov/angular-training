import {async, TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import {Subscription} from "rxjs";

describe('ArticlesService', () => {
  let subscription1: Subscription;
  let subscription2: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    subscription1 = null;
    subscription2 = null;
  });

  afterEach(() => {
    if (subscription1) {
      subscription1.unsubscribe();
    }
    if (subscription2) {
      subscription2.unsubscribe();
    }
  })

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });

  it('should create new article', async(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    let initialized = false;
    subscription1 = service.articles$.subscribe(result => {
      if (!initialized) {
        expect(result.length).toBe(2);
        initialized = true;
      } else {
        expect(result.length).toBe(3);
      }
    });
    const article$ = service.createArticle$({
      title: 'Article11',
      text: 'Cool Article'
    });
    subscription2 = article$.subscribe(result => expect(result.id).toBeTruthy());
  }));

  it('should remove article', async(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    let initialized = false;
    subscription1 = service.articles$.subscribe(result => {
      if (!initialized) {
        expect(result.length).toBe(3);
        initialized = true;
      } else {
        expect(result.length).toBe(2);
      }
    });
    service.removeArticle(3);
  }));

});
