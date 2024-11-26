import { CountryFlags } from "./country-flags";
import { CountryName } from "./country-name";

export interface Country {
    capital: string[];
    region: string;
    name: CountryName;
    population: number;
    flags: CountryFlags;
}