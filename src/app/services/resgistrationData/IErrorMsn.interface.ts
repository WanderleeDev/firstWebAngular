export interface IErrorMessages {
  [key: string]: {
    required?: string;
    pattern?: string;
    msnHelp?: {
      valid: string;
      invalid: string;
    };
  };

  basic: {
    required: string;
  };
  item: {
    pattern: string;
    msnHelp: IMsnHelp
  };
  date: {
    pattern: string;
    msnHelp: IMsnHelp
  };
  data: {
    pattern: string;
    msnHelp: IMsnHelp
  };
  price: {
    pattern: string;
    msnHelp: IMsnHelp
  };
  flag: {
    pattern: string;
    msnHelp: IMsnHelp
  };
}

export interface IMsnHelp {
  valid: string;
  invalid: string
}
