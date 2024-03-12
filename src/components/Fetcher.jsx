import React from "react";

function Fetcher() {
  const [contries, setCountries] = useState([]);

  return <div>Fetcher</div>;
}

export default Fetcher;
async function countryFetcher(region) {
  let res;
  if (region !== "") {
    res = await fetch(`https://restcountries.com/v3.1/all`);
  } else {
    res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  }
  return res.json();
}
