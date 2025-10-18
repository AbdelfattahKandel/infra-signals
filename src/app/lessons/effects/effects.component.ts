import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {
protected readonly userName : WritableSignal<string> = signal('Tarek Ahmed Ramadan');


protected readonly storedUserName = signal<string | null>(localStorage.getItem('userName'));// هنا بعمل قيمة افتراضية للتخزين عشان هبعت القيمة for template


private readonly persistUserNameEffect = effect(() => {
  const current = this.userName();
  localStorage.setItem('userName', current); //دايما الايفيكت بتابع التغيرات اللي بتحصل للسنجالز مش محتاج انادي عليها بشتتغل لوحدها 
  this.storedUserName.set(localStorage.getItem('userName')); // هنا بباصي القيمة للمتغير اللي عملناه للتخزين عشان اعرضه في التيبمليت  باستخدام set 
});

changeUserName(){
  this.userName.update(prev => prev === 'Tarek Ahmed Ramadan' ? 'Abdo Atef Kandel' : 'Tarek Ahmed Ramadan');
}


// getUserNameFromLocalStoreAge(){
//   console.log(localStorage.getItem('userName'));
//   return localStorage.getItem('userName');
   
// }ده حل تاني تاني 
}
// كنت اقدر اعمل سيرفيس هنا 😂😂😂😂😂😂 عشان اخزن فيه