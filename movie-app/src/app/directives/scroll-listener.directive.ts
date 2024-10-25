import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollListener]',
  standalone: true
})
export class ScrollListenerDirective implements OnInit, OnDestroy {

  @Input() elementClass: string = '';
  @Input() activeStyles: { [key: string]: string } = {};
  @Input() rootMargin: string = '0px';
  @Input() startScrollThreshold: number = 0.1;
 
  private scrollHandler!: () => void;
  private observer!: IntersectionObserver;
  private elementInView: boolean = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    const height = window.innerHeight;
    const element = this.elRef.nativeElement as HTMLElement;

    const observerOptions = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.startScrollThreshold
    };

    // Создаем наблюдателя
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.elementInView = true;
          this.applyStyles(); // Применить стили сразу, если элемент в области видимости
          window.addEventListener('scroll', this.scrollHandler);
        } else {
          this.elementInView = false;
          window.removeEventListener('scroll', this.scrollHandler);
        }
      });
    }, observerOptions);

    // Обработчик скролла
    this.scrollHandler = () => {
      const scrolled = window.scrollY;
      const elementTop = element.getBoundingClientRect().top;

      if (this.elementInView && element) {
        const ratio = Math.min(scrolled / height, 1);
        
        for (const [styleName, styleValue] of Object.entries(this.activeStyles)) {
          this.renderer.setStyle(element, styleName, this.interpolateStyleValue(styleValue, ratio));
        }
      }
    };

    // Запускаем наблюдение за элементом
    this.observer.observe(this.elRef.nativeElement);

    // **Проверка позиции элемента при инициализации**
    this.checkElementVisibility();
  }

  // Проверяем видимость элемента при инициализации и применяем стили, если элемент уже виден
  private checkElementVisibility(): void {
    const rect = this.elRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom >= 0) {
      // Элемент виден, применяем стили сразу
      this.elementInView = true;
      this.applyStyles();
    }
  }

  // Применяем стили к элементу
  private applyStyles(): void {
    const element = this.elRef.nativeElement as HTMLElement;
    const scrolled = window.scrollY;
    const height = window.innerHeight;
    const ratio = Math.min(scrolled / height, 1);
    
    for (const [styleName, styleValue] of Object.entries(this.activeStyles)) {
      this.renderer.setStyle(element, styleName, this.interpolateStyleValue(styleValue, ratio));
    }
  }

  // Функция для интерполяции значений стилей
  private interpolateStyleValue(styleValue: string, ratio: number): string {
    if (styleValue.includes('calc')) {
      return styleValue.replace(/calc\((.+)\)/, (match, p1) => `calc(${parseFloat(p1) * ratio})`);
    } else {
      return styleValue.replace(/(\d+\.?\d*)/, (match) => `${parseFloat(match) * ratio}`);
    }
  }
 
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}



// import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appScrollListener]',
//   standalone: true
// })
// export class ScrollListenerDirective implements OnInit, OnDestroy {

//   @Input() elementClass: string = ''
//   @Input() activeStyles: { [key: string]: string } = {}
//   @Input() rootMargin: string = '0px'
//   @Input() startScrollThreshold:number = 0.1
 
//   private scrollHandler!: () => void
//   private observer!: IntersectionObserver
//   private elementInView: boolean = false

//   constructor(private renderer: Renderer2, private elRef: ElementRef) { }

//   ngOnInit(): void {
//     const height = window.innerHeight
//     const element = this.elRef.nativeElement as HTMLElement

//     const observerOptions = {
//       root: null,
//       rootMargin: this.rootMargin,
//       threshold: this.startScrollThreshold
//     }

//     this.observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           this.elementInView = true
//           window.addEventListener('scroll', this.scrollHandler)
//         } else {
//           this.elementInView = false
//           window.removeEventListener('scroll', this.scrollHandler)
//         }
//       })
//     }, observerOptions)

//     this.scrollHandler = () => {
//       const scrolled = window.scrollY
//       const elementTop = element.getBoundingClientRect().top

//       if (this.elementInView && element) {
//         const ratio = Math.min(scrolled / height, 1)
        
//         for (const [styleName, styleValue] of Object.entries(this.activeStyles)) {
//           this.renderer.setStyle(element, styleName, this.interpolateStyleValue(styleValue, ratio))
//         }
//       }
//     }

//     this.observer.observe(this.elRef.nativeElement)
//   }

//   private interpolateStyleValue(styleValue:string, ratio:number):string {
//     if (styleValue.includes('calc')) {
//       return styleValue.replace(/calc\((.+)\)/, (match, p1) => `calc(${parseFloat(p1) * ratio})`);
//     }else {
//       return styleValue.replace(/(\d+\.?\d*)/, (match) => `${parseFloat(match) * ratio}`);
//     }
//   }
 
//  ngOnDestroy(): void {
//   window.removeEventListener('scroll', this.scrollHandler);
//   if (this.observer) {
//     this.observer.disconnect();
//   }
//  }
// }


