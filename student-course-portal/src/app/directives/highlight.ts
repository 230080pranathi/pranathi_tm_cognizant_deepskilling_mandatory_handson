import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  // Default highlight color
  @Input() appHighlight = 'yellow';

  constructor(private elementRef: ElementRef) {}

  // Add highlight when mouse enters the element
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.appHighlight;
  }

  // Remove highlight when mouse leaves the element
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

}