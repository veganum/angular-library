import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ViewportScroller,CommonModule } from '@angular/common';

@Component({
  selector: 'jfn-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-button.component.html',
  styleUrl: './top-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopButtonComponent implements OnInit {
  public showButton = false // Para mostrar u ocultar el botón

  private readonly SCROLL_TO_DISPLAY = 100 //Scroll mínimo a sobrepasar para mostrarse

  private readonly TOP_POSITION: [number, number] = [0, 0] // Coordenadas X Y

  @Input() text: string = ''; // Texto del botón
  @Input() showIcon: boolean = true; // Para controlar se se muestra el icono svg
  @Input() color: string = '#068fea'; // Color de botón

  constructor(
    // @Inject(DOCUMENT) private readonly document: Document, // Interfáz que nos permite acceder al DOM
    // Clase de Angular para controlar el scroll
    private readonly viewportScroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
    if (this.text) {
      this.showIcon = false
    }
  }

  // Decorador para manejar eventos del DOM en esta caso el evento scroll
  // El objeto window representa la ventana que contiene un documento DOM (Document Object Model)
  // const { scrollTop  } = this.document.scrollingElement as HTMLElement
  @HostListener('window:scroll')
  private onWindowScroll(): void {
    const scrollTop  = this.viewportScroller.getScrollPosition();
    this.showButton = scrollTop[1] > this.SCROLL_TO_DISPLAY
  }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition(this.TOP_POSITION)
  }

}
