export interface IErrorMessages {
  [key: string]: {[key: string]: string;};
  basic: {
    required: string;
  };
  item: {
    pattern: string;
  };
  date: {
    pattern: string;
  };
  data: {
    pattern: string;
  };
  price: {
    pattern: string;
  };
  flag: {
    pattern: string;
  };
}
