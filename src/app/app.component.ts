import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso: number = 0;
  altura: number = 0;

  get resultado(): string {
    if (isNaN(this.imc)) {
      return '';
    }

    if (this.imc < 18.5) {
      return `Magreza: seu IMC é ${this.imc.toFixed(2)}. Isso indica um valor abaixo de 18,5 kg/m2.`;
    } else if (this.imc >= 18.5 && this.imc < 24.9) {
      return `Normal: seu IMC é ${this.imc.toFixed(2)}. Isso indica um valor entre 18,5 e 24,9 kg/m2.`;
    } else if (this.imc >= 24.9 && this.imc < 30) {
      return `Sobrepeso: seu IMC é ${this.imc.toFixed(2)}. Isso indica um valor entre 24,9 e 30 kg/m2.`;
    } else {
      return `Obesidade: seu IMC é ${this.imc.toFixed(2)}. Isso indica um valor acima de 30 kg/m2.`;
    }
  }

  get imc(): number {
    return this.peso / (this.altura * this.altura);
  }
}
