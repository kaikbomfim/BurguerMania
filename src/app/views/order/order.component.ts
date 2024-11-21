import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, TitleComponent, ButtonComponent, InputComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
