import Image from "next/image";
import React from "react";

function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  key,
  lang,
  bord,
  subregion,
  tld,
  currencies,
  title,
}) {
  return (
    <>
      <div
        className='flex  flex-col sm:flex sm:flex-row   md:flex md:flex-row  '
        key={key}>
        <Image
          className='object-fill rounded-lg  mx-2'
          src={flag}
          alt={name}
          name={name}
          width={450}
          height={350}
        />
        <div className='flex flex-col w-[50%]'>
          <h1 className='text-3xl font-bold m-2'>{title}</h1>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <span className='font-semibold text-sm'>
                Native Name : <span className='font-normal '>{name}</span>
              </span>
              <br />{" "}
              <p className='font-semibold text-sm'>
                Poulation :<span className='font-normal '>{population}</span>
              </p>{" "}
              <br />
              <p className='font-semibold text-sm'>
                Region : <span className='font-normal '>{region}</span>{" "}
              </p>
              <br />
              <p className='font-semibold text-sm'>
                Sub Region :<span className='font-normal '>{subregion}</span>
              </p>
              <br />
              <p className='font-semibold text-sm'>
                Capital :<span className='font-normal '>{capital}</span>
              </p>
              <br />
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold text-sm'>
                Top Level Domain :{" "}
                <span className='font-normal '>
                  {tld && tld?.map((dt) => <span> {dt + " "} </span>)}{" "}
                </span>
              </p>
              <br />
              <p className='font-semibold text-sm'>
                Currencies :{" "}
                <span className='font-normal '>
                  {Object.keys(currencies).map((data) => " " + data + "  ")}
                </span>
              </p>
              <br />
              <p className='font-semibold text-sm'>
                Languages :{" "}
                {lang && (
                  <span className='font-normal '>
                    {Object.values(lang).map((data) => " " + data + "  ")}
                  </span>
                )}
              </p>
              {""} <br />
            </div>
          </div>
          <div>
            <div className='font-semibold '>
              <p className=' '>
                Border :
                {bord &&
                  bord.map((border) => (
                    <span
                      key={border}
                      className='inline font-normal text-sm border-2 border-gray-500 rounded-md m-1 p-1'>
                      <>{border}</>
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
