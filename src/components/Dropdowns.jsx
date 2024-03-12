"use client";

export default function Dropdowns({ setCountries }) {
  const dopdownhandler = async (e) => {
    const data = await getCountryRegion(e.target.value);
    setCountries(data);
  };
  return (
    <>
      <select
        onChange={dopdownhandler}
        name='Country'
        id='Country'
        label='Filter by Region'
        className='p-3 border  rounded-md shadow-lg'>
        <option value='' defaultValue={" Filter by Region"} hidden>
          Filter by Region{" "}
        </option>

        <option value='africa'> Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </>
  );
}

async function getCountryRegion(region) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
