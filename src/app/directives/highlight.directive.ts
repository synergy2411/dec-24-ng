import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  bgColor: string = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = 'goldenrod';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }
  // constructor(private elRef: ElementRef) {
  //   this.elRef.nativeElement.style.backgroundColor = 'goldenrod';
  // }
}

// <div appHighlight></div>
