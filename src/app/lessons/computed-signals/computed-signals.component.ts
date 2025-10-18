import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  standalone: true,
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})
export class ComputedSignalsComponent {

  protected readonly FirstName : WritableSignal<string> = signal('Tarek');
  protected readonly LastName : WritableSignal<string> = signal('Ramadan');

  fullName = computed(() => `${this.FirstName()}, ${this.LastName()}`); // هنا دايما لما بستخدم computed لازم اكون بعتمد علي اشارات تانية ومقدر اعدل عليه هعمل مثال ان احاول اعدل عليه وهعمله comment للملاحظة بس
  // changeComputed(){
  //   this.fullName().update((value) => value + ' Tarek Ramadan');
  //   this.fullName().set('Tarek Ramadan');
  // }

}
