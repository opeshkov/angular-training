import { Directive, ElementRef, Attribute, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColoredSize]'
})
export class ColoredSizeDirective implements OnInit {


  @Input('appColoredSize') fileSize: string;


  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (parseInt(this.fileSize) > 1024) {
      this.el.nativeElement.style.backgroundColor = 'tomato';
    } else {
      this.el.nativeElement.style.backgroundColor = 'yellowgreen';
    }
  }
}
