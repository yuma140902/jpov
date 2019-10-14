export interface JpoJson {
  [prefecture: string]: {
    number_str: string;
    number: number;
    timestamp: string;
    source: string;
    author: string;
    less_than?: boolean;
    cities?:
    {
      [city: string]: {
        number_str: string;
        number: number;
        less_than?: boolean;
        areas?:
        {
          [area: string]: {
            number_str: string;
            number: number;
            less_than?: boolean;
          }
        }

      }
    }

  }
}
