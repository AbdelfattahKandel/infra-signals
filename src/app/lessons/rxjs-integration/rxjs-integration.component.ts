import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-integration',
  imports: [],
  templateUrl: './rxjs-integration.component.html',
  styleUrl: './rxjs-integration.component.css'
})
export class RxjsIntegrationComponent {
  // هنا بعرف سجنال بسيط عشان اعد بيه عدد الدوسات اللي بتحصل من الزرار
  protected readonly manualClicks: WritableSignal<number> = signal(0);

  // هنا بعمل Observable من RxJS بترجع رقم كل ثانية لغاية خمسة بس
  private readonly counter$ = interval(2000).pipe(
    take(5),// هنا بحدد الاشتراكات عشان امنع memory leak
    map(step => step + 1)// وبخليه يبدأ من 1 عشان ميشغلش دماغه ويبدأ من صفر
  );

  // هنا بستخدم toSignal عشان احول الـ Observable لسجنال اقدر استخدمه في التمبليت بسهولة
  protected readonly timerSignal = toSignal(this.counter$, { initialValue: 0 });

  // هنا بحسب مجموع القيمة اللي جاية من RxJS مع عدد النقرات اليدوي
  protected readonly total = computed(() => this.timerSignal() + this.manualClicks());

  // هنا بتابع القيم بس عشان اطبعها في الـ console لو حبيت اتأكد من sync
  protected readonly logEffect = effect(() => {
    console.info('[RxjsIntegration] timer:', this.timerSignal(), 'clicks:', this.manualClicks(), 'total:', this.total());
  });

  // هنا بزود عدد الدوسات
  protected addClick(): void {
    this.manualClicks.update(prev => prev + 1);
  }

  // هنا برجع كل حاجة للصفر لو حبيت ابدأ من جديد
  protected reset(): void {
    this.manualClicks.set(0);
  }
}
