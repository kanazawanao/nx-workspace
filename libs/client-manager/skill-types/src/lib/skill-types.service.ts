import { SkillTypeEntryModel } from './skill-types-entry.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class SkillTypesService {
  constructor(private formBuilder: FormBuilder, private ruter: Router) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new SkillTypeEntryModel());
  }

  navigateSkillTypesEntry(id: number): void {
    this.ruter.navigate(['/skill-types', id]);
  }
}