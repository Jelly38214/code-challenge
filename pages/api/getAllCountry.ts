import type { NextApiRequest, NextApiResponse } from "next";
import type { ICountry } from "../../src/types/index";

type Data = {
  data: ICountry[];
};

export async function getAllCountryHandler(): Promise<ICountry[]> {
  return await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,borders,population,flag,flags,languages,subregion,currencies,tld,cioc"
  )
    .then((data) => data.json())
    .catch(() => []);
}

export default async function getAllCountry(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await getAllCountryHandler();
  res.status(200).json({ data: result });
}
