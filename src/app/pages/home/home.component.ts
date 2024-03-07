import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  seconds: number = 0;
  timerId: any;

  constructor() {
    this.startTimer();
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  ngOnDestroy(): void {
    // Detener el temporizador antes de que el componente se destruya para evitar fugas de memoria
    clearInterval(this.timerId);
  }
}
