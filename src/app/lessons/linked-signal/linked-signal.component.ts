import {
  Component,
  computed,
  linkedSignal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  protected readonly firstName: WritableSignal<string> = signal('Tarek');
  protected readonly lastName: WritableSignal<string> = signal('Ahmed'); //  هنا عرفت 2 قيمة الاسم الاول والاخير من نوع writableSignalيعني اقدر اعدل علي قيم السجنال نفسها
  protected readonly count = signal(0);

  protected readonly doubledCount = linkedSignal<number, number>({
    source: this.count,
    computation: (
      newValue: number,
      prevValue?: { source: number; value: number }
    ) => {
      const prev = prevValue?.value;
      if (prev === undefined) return newValue;
      return prev !== newValue ? newValue * 2 : newValue;
    },
  });
  incrementCount = () => {
    this.count.update((count) => count + 1);
  };
  /**
   * @param () => `${this.firstName()} ${this.lastName()}`
   * @returns هنا هرجع قيمة الاسم الاول والاخير
   * @description هنا عرفت قيمة الاسم الاول والاخير من نوع linkedSignalيعني اقدر اعدل علي قيم السجنال نفسها
   * @description هنا computed بتقرا القيمة من اليوزر نيم واللاست نيم مش بعرف اعدل فيها بعكس linked signal اقدر اعدل فيها نفسها
   */
  protected readonly fullName = linkedSignal(
    () => `${this.firstName()} ${this.lastName()}`
  );
  protected readonly fullNameReadOnly = computed(
    () => `${this.firstName()} ${this.lastName()}`
  );

  protected readonly setFullName = () => {
    this.fullName.set('Abdo Atef');
    // هنا اهو انا قادر اعدل فيها عادي
    console.log(this.fullName());
  };
  protected readonly updateFullName = () => {
    this.fullName.update((fullName) =>
      fullName === 'Abdo Atef' ? 'Tarek Ahmed' : 'Abdo Atef'
    );
    console.log(this.fullName());
    // هنا اهو انا قادر احدثها برضو  عادي بس هنا شبه map انا باخد القيمة القديمة واحدثها بقيمة جديدة
  };

  // setFullNameReadOnly = () => {
  //   this.fullNameReadOnly.set('Abdo Atef');

  //   console.log(this.fullNameReadOnly());

  // } هنا لما جيت استخدم computed اني اعدل عليها رفضت
  protected readonly fullNameComputed = computed(() => `${this.fullName()}`); // وكان الحل بدل مستخدم effect بستخدم computed عشان اقرا كل اما قيمة linked signal تتغير
}
