import { FormControl } from "@angular/forms";

export interface IFormValidate {
  item: FormControl<string | null>;
  date: FormControl<string | null>;
  flag: FormControl<string | null>;
  data: FormControl<string | null>;
  price: FormControl<string | null>;
}
