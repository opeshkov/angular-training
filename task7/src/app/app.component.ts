import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import tagsValidator from "../validators/tagsValidator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task7';

  private tagsFormGroup: FormGroup;
  private predefinedTags: String[] = ['Lohika', 'Angular', 'JavaScript'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.tagsFormGroup = this.fb.group({
      tags: [[], tagsValidator(this.predefinedTags)]
    });
  }
}
