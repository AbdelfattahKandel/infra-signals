import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lessons/signals-basics',
    pathMatch: 'full'
  },
  {
    path: 'lessons',
    children: [
      {
        path: 'signals-basics',
        loadComponent: () => import('./lessons/signals-basics/signals-basics.component').then(m => m.SignalsBasicsComponent)
      },
      {
        path: 'create-signal',
        loadComponent: () => import('./lessons/create-signal/create-signal.component').then(m => m.CreateSignalComponent)
      },
      {
        path: 'computed-signals',
        loadComponent: () => import('./lessons/computed-signals/computed-signals.component').then(m => m.ComputedSignalsComponent)
      },
      {
        path: 'effects',
        loadComponent: () => import('./lessons/effects/effects.component').then(m => m.EffectsComponent)
      },
      {
        path: 'signal-templates',
        loadComponent: () => import('./lessons/signal-templates/signal-templates.component').then(m => m.SignalTemplatesComponent)
      },

      {
        path: 'rxjs-integration',
        loadComponent: () => import('./lessons/rxjs-integration/rxjs-integration.component').then(m => m.RxjsIntegrationComponent)
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'lessons/signals-basics'
  }
];
