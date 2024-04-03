import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appImageScale]'
})
export class ImageScaleDirective {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('click') onClick() {
    if (this.elRef.nativeElement.classList.contains('enlarged')) {
      this.renderer.removeClass(this.elRef.nativeElement, 'enlarged');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'enlarged');
    }
  }
}
