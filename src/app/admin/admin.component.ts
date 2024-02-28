import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  title : string = "Bonjour !";
  isAdmin : boolean = true;
  handleStatus() : void {
    this.isAdmin=!this.isAdmin;
  }
}
