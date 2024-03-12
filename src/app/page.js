"use client";
import Card from "@/components/Card";
import Dropdowns from "@/components/Dropdowns";
import { useState } from "react";
import { countryNameFetcher } from "./[country]/page";
import Image from "next/image";
import whiteSearch from "../../public/searchw.png";
import BlackSearch from "../../public/searchb.png";
import { useTheme } from "next-themes";

export default function Home() {
  const [contries, setCountries] = useState([]);
  if (contries.length == 0) {
    countryFetcher().then((data) => {
      setCountries(data);
    });
  }
  const filterhandeler = async (e) => {
    let search = e.target.value;
    await countryNameFetcher(search).then((data) => {
      if (search.length !== 0 && data.countries.status !== 404) {
        setCountries(data.countries);
      }
    });
  };

  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <div className={`m-0 p-0 `}>
        <main className='flex flex-col  min-h-screen m-4  '>
          <div className='w-[80%] mx-auto '>
            <div className='flex flex-col  sm:justify-between   m-4   sm:flex sm:flex-row'>
              <div className='flex flex-grow '>
                <form
                  onChange={filterhandeler}
                  className='p-0 m-0  w-5/6 border rounded-lg  p-4 shadow-lg flex'>
                  {resolvedTheme === "dark" ? (
                    <Image
                      src={whiteSearch}
                      className='inline mr-2'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={BlackSearch}
                      className='inline mr-2'
                      width={20}
                      height={20}
                    />
                  )}

                  <input
                    className='  w-full p-2    '
                    type='text'
                    placeholder='Search for a country... '></input>
                </form>
              </div>
              <div className='mt-8 sm:'>
                <Dropdowns setCountries={setCountries} />
              </div>
            </div>
            <div className='flex flex-wrap justify-evenly '>
              {contries.length == 0 ? (
                <p className='text-2xl text-opacity-50 italic mt-[10%]'>
                  Loading...
                </p>
              ) : (
                contries?.map((data) => {
                  return <Card key={data.name.official} data={data} />;
                })
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

async function countryFetcher() {
  let res = null;
  try {
    res = await fetch(`https://restcountries.com/v3.1/all`);
  } catch (error) {
    console.log(error);
  }
  return res.json();
}
