import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals-basics',
  standalone: true,
  imports: [],
  templateUrl: './signals-basics.component.html',
  styleUrl: './signals-basics.component.css',
})
export class SignalsBasicsComponent {
  //هنا انا بعرف المتغيرات ب السجنال وهي من نوع writableSignal
  protected readonly firstName: WritableSignal<string> = signal('Tarek');
  protected readonly lastName: WritableSignal<string> = signal('Ahmed');

  //  هنا انا بحطهم في متغير يجمعهم بس للقراءة بس مقدر اغيرهم لانهم للقراءة فقط دي computed
  protected fullNameReadOnly = computed<string>(
    () => `${this.firstName()} ${this.lastName()}`
  );

  // هنا انا بعرف المتغيرات ب السجنال وهي من نوع writableSignal تاني عشان اقدر اغيرهم هنا وفيه بديل للخطوة دي عن طريق linked signal بس دي مختلفة عشان هي قابلة للتعديل عكس computed
  protected readonly fullName: WritableSignal<string> = signal(
    `${this.firstName()} ${this.lastName()}`
  );
  // effect هي عبارة عن طريقة بقدر اتابع التغيرات لما تحصل عليها بس في الامثلة دي انا بغير القيم بس اقدر اتابع التغيرات لما تحصل عليها
  protected readonly FullNameEffect = effect(() => {
    this.fullName.set(`${this.firstName()} ${this.lastName()}`);
  });
  // هنا انا برجمهم للاساس عن طريق اني بستخدم set للقيم الافتراضية تاني
  protected resetAll(): void {
    this.firstName.set('Abdo');
    this.lastName.set('Atef');
  }
  // هنا انا بستخدم القيم عشان احدثهم عن طريق القيم القديمة ليهم بستخدم الشروط هنا عشان اغير القيم عن طريق التحديث update
  protected updateFirstName(): void {
    this.firstName.update((firstName) => {
      if (firstName === 'Abdo') {
        return 'Tarek';
      } else {
        return 'Abdo';
      }
    });
  }
  //هنا نفس الكلام بس بستخدم ternary oprator
  protected updateLastName(): void {
    this.lastName.update((lastName) =>
      lastName === 'Ahmed' ? 'Atef' : 'Ahmed'
    );
  }
  // هنا انا بغير القيم بس اقدر اتابع التغيرات لما تحصل عليها
  protected changeFullNameDirectly(): void {
    this.fullName.update((full) =>
      full === 'Tarek Ahmed' ? 'Abdo Atef' : 'Tarek Ahmed'
    );
  }
  // هنا انا بتابع التغيرات لما تحصل عليها بس في الامثلة دي انا بغير القيم بس اقدر اتابع التغيرات لما تحصل عليها ودي وظيفة effect الحقيقية
  protected readonly logEffect = effect(() => {
    console.log('firstName', this.firstName());
    console.log('lastName', this.lastName());
    console.log('fullName (linked)', this.fullName());
    console.log('fullNameReadOnly (computed)', this.fullNameReadOnly());
  });
}
//دايما لما بستخدم السجنالز لازم اعاملهم اكنهم function() بس حتي في template