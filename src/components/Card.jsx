import Link from "next/link";

export default function Card({ data }) {
  return (
    <Link
      href={`/${data.name.common}`}
      className='border boreder-1 rounded-md m-2 shadow-lg  h-80 w-64  '>
      <div className='p-0 m-0  object-cover    '>
        {" "}
        <img
          src={`${data.flags.png}`}
          className='max-w-64 max-h-36 h-36 w-64'
          alt={`name`}
        />
      </div>
      <div className='p-4  '>
        <h2 className=' font-semibold'>{data.name.official}</h2>

        <p className='text-sm'>
          <span className='font-semibold '>Population</span>: {data.population}{" "}
        </p>
        <p className='text-sm'>
          <span className='font-semibold  '>Region</span>: {data.region}
        </p>
        <p className='text-sm'>
          <span className='font-semibold '>Capital</span>: {data.capital}
        </p>
      </div>
    </Link>
  );
}
