export class TodoItem {

  public id: number;
  public title: string;
  public complete: boolean;

  constructor(id: number, title: string, complete: boolean = false) {
    this.id = id;
    this.title = title;
    this.complete = complete;
  }
}
