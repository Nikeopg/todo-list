import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiTextareaModule } from '@taiga-ui/legacy';
import { TuiButton } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'lib-feature-case-converter',
  standalone: true,
  imports: [
    CommonModule,
    TuiInputModule,
    TuiButton,
    TuiTextareaModule,
    FormsModule,
  ],
  templateUrl: './feature-case-converter.component.html',
  styleUrl: './feature-case-converter.component.less',
})
export class FeatureCaseConverterComponent {

  private caseTextSubject = new BehaviorSubject<string>('');
  public caseText: string = '';

  constructor() {
    this.caseTextSubject.subscribe(text => {
      this.caseText = text;
    });
  }

  public onUpperCase() {
    this.caseTextSubject.next(this.caseText.toUpperCase());
  }

  public onLowerCase() {
    this.caseTextSubject.next(this.caseText.toLowerCase());
  }

  public onTextChanged(text: string) {
    this.caseTextSubject.next(text);
  }

  public onCapitalize() {
    this.caseTextSubject.next(this.caseText.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
  }
}
