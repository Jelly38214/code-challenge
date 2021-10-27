interface ICountryName {
  common: string;
  official: string;
  nativeName: Record<string, { official: string; common: string }>;
}

export interface ICountry {
  name: ICountryName;
  tld: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  flag: string;
  flags: Record<"png" | "svg", string>;
  population: number;
  cioc: string;
}
