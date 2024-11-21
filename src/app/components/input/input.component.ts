import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() name!: string;
  @Input() size: 'default' | 'large' = 'default';
}
