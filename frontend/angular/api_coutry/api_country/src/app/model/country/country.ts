export interface Country {
  name?: string;
  capital?: string;
  area?: number;
  population?: number;
  flag?: string;
  total_count: number;
}

export interface CountryApi{
  items: Country[];
  total_count: number;
}
