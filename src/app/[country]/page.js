"use client";

import CountryCard from "@/components/CountryCard";
import Link from "next/link";
import { Suspense } from "react";

async function page({ params }) {
  const countrydata = countryNameFetcher(params.country);

  const country = await countrydata.then((data) => {
    return data.country;
  });
  return (
    <div className='m-0 p-0'>
      {" "}
      <main className='flex flex-col  min-h-screen m-4       '>
        <div className='w-[80%] mx-auto '>
          <div className='flex flex-col  sm:justify-between   m-4   sm:flex sm:flex-row'>
            <Link
              href={"/"}
              className='mt-8 border p-3 border-slate-600 rounded-lg'>
              &larr; Go back
            </Link>
          </div>
          <div className='flex flex-wrap justify-evenly '>
            <Suspense
              fallback={<h2 className='italic text-2xl '>Loading... </h2>}>
              {country && ( // if country is not null
                <CountryCard
                  key={country.name.population}
                  title={country.name.official}
                  name={country.name.common}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital[0]}
                  lang={country.languages}
                  bord={country.borders}
                  subregion={country.subregion}
                  currencies={country.currencies}
                  tld={country.tld}
                />
              )}
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
export async function countryNameFetcher(name) {
  if (name.length !== 0 && name) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      ).then((rea) => rea.json());
      return { country: res[0], countries: res };
    } catch (error) {
      console.log(error);
    }
  }
}
