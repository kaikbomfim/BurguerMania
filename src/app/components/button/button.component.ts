import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonClass: string = 'primary';
  @Input() route: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: 'default' | 'large' = 'default';
}
