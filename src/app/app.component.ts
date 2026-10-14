import { Component, LOCALE_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, TitleCasePipe} from '@angular/common';

//Modulo personalizado de PrimeNG
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el idioma del local 
import localEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEs );


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, 
    CommonModule, 
    TitleCasePipe,
    SharedModule,
    VentasModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ]
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'Juan';


  mostrarNombre(){
    console.log( this.nombre );
    
  }

}
