import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements OnInit{
  @Input() rootMargin: string = '0px'
  @Input() threshold: number = 0.1
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('in-view')
        }
      })
    }, options)
    observer.observe(this.el.nativeElement)
  }

}
