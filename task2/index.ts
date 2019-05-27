import { fromEvent, of, Observable } from 'rxjs';
import { filter, map, debounceTime, switchMap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

function fetchRepos(repoName: string) : Observable<Array<string>> {
  if (!repoName) return of([]);
  return ajax(`https://api.github.com/search/repositories?q=${repoName}&sort=stars&order=desc`).pipe(
    map((resp: AjaxResponse) => resp.response.items),
    switchMap(items => fetchBranches(items))
  );
}

function fetchBranches(repos: Array<any>) : Observable<Array<string>> {
  if (!repos.length) return of([]);
  const firstRepo = repos[0];
  let branchesUrl: string = firstRepo.branches_url;
  branchesUrl = branchesUrl.replace('{/branch}', '');
  return ajax(branchesUrl).pipe(
    map((resp: AjaxResponse) => resp.response.map(branch => branch.name))
  );
}

const foundBranches$ : Observable<Array<string>> = fromEvent(document.getElementById('repoName'), 'input').pipe(
  map((ev: Event) => (<HTMLInputElement>event.target).value),
  debounceTime(1000),
  switchMap(
    value => fetchRepos(value)
  )
);

foundBranches$.subscribe(branchNames => {
  const searchResults: HTMLElement = document.getElementById('searchResults');
  if (branchNames.length) {
    const items: Array<String> = branchNames.map(branchName => `<li>${branchName}</li>`);
    searchResults.innerHTML = 'Search results:<br/>' + items.join('');
  } else {
    searchResults.innerHTML = 'No results'
  }
});
