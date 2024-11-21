import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false; // Controla a visibilidade do menu
  menuIcon = 'menu'; // Controla o ícone exibido no botão

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o valor booleano do controle de visibilidade
    this.menuIcon = this.isMenuOpen ? 'close' : 'menu'; // Muda o ícone do menu
  }
}
