import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tramos-tarifa',
  standalone: true,
  imports: [],
  templateUrl: './tramos-tarifa.component.html',
  styleUrl: './tramos-tarifa.component.css',
})
export class TramosTarifaComponent {
  @ViewChild('fileInput') fileInput: any;

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Archivo seleccionado:', file.name);
    }
  }
}
