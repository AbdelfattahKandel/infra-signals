import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lessons = [
    { label: 'Signals Basics', path: '/lessons/signals-basics' },
    { label: 'Create Signal', path: '/lessons/create-signal' },
    { label: 'Computed Signals', path: '/lessons/computed-signals' },
    { label: 'Effects', path: '/lessons/effects' },
    { label: 'Signal Templates', path: '/lessons/signal-templates' },
    { label: 'RxJS Integration', path: '/lessons/rxjs-integration' },
    { label: 'Linked Signal', path: '/lessons/linked-signal' }
  ];
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
