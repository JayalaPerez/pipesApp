import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@Component({
  selector: 'app-no-comunes',
  standalone: true,
  imports: [ CommonModule, CardModule, PrimeNgModule],
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

}
