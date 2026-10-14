import { NgModule } from '@angular/core';

//Ordenar alfabeticamente los imports de PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';



//Este modulo es solo para exportar los modulos de PrimeNG que se van a usar en la app, para no tener que importarlos en cada componente que los use. 

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    //Lo mismo aca ordenar alfabeticamente los exports de PrimeNG
    CardModule,
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
