import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-create-signal',
  imports: [],
  templateUrl: './create-signal.component.html',
  styleUrl: './create-signal.component.css'
})
export class CreateSignalComponent {

  // هنا انا بعرف المتغيرات من نوع signals بس من نوع writableSignal
  protected readonly FirstName : WritableSignal<string> = signal('Tarek');
  protected readonly LastName : WritableSignal<string> = signal('Ramadan');

  // هنا انا بعرف المتغير من نوع computed
  fullName = computed(() => `${this.FirstName()}, ${this.LastName()}`); // ده دايما للقراءة بس مقدر استخدم عليه set or updtae 
  
// لو حابب اغير القيم بس اقدر استخدم عليه set or update

setFirstName() : void{
this.FirstName.set('Abdo'); // بقدر اعمل تعيين لاي قيمة عايزها بس لازم تكون string لاني معرفها كده 
}
updateFirstName() : void{
  this.FirstName.update(prevFirstName => prevFirstName === 'Tarek' ? 'Abdo' : 'Tarek');//هنا بقدر اعمله تحديث بناء علي القيمة القديمة 
}


setLastName() : void{
this.LastName.set('Atef'); // بقدر اعمل تعيين لاي قيمة عايزها بس لازم تكون string لاني معرفها كده 
}
updateLastName() : void{
  this.LastName.update(prevLastName => prevLastName === 'Ramadan' ? 'Atef' : 'Ramadan');//هنا بقدر اعمله تحديث بناء علي القيمة القديمة 
}
 resetAll() : void{// طبعا هنا اقدر ارجعهم للقيمة الابتدائية
  this.FirstName.set('Tarek');
  this.LastName.set('Ramadan');
}

// هنا انا بتابع التغيرات لما تحصل عليها بس في الامثلة دي انا بغير القيم بس اقدر اتابع التغيرات لما تحصل عليها
effectLog = effect(() => {
  console.log('FirstName', this.FirstName());
  console.log('LastName', this.LastName());
})

}
