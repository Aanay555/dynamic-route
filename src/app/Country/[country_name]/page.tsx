import Link from "next/link";
import Image from "next/image";
import PakistanDescription, { PakistanGallery } from "../../../../components/pak";
import PalestineDescription from "../../../../components/palestine";
import { PalestineGallery } from "../../../../components/palestine";
import IranDescription from "../../../../components/iran";
import { IranGallery } from "../../../../components/iran";
import YemenDescription from "../../../../components/yemen";
import { YemenGallery } from "../../../../components/yemen";
import LebanonDescription from "../../../../components/lebanon";
import { LebanonGallery } from "../../../../components/lebanon";
type Country_Name = {
  CountryName: string;
  Capital: string;
  Population: string;
  flag: string;
  description: JSX.Element;
  Link: string;
  image: string;
  Gallery: JSX.Element;
};

const CountryName: Country_Name[] = [
  {
    CountryName: "Pakistan",
    Capital: "Islamabad",
    Population: "240 million approx",
    flag: "/pakistan/download.png",
    description: <PakistanDescription />,
    Link: "https://en.wikipedia.org/wiki/Flag_of_Pakistan",
    image: "/pakistan/pak4.jpg",
    Gallery: <PakistanGallery />,
  },
  {
    CountryName: "Palestine",
    Capital: "East Jerusalem",
    Population: "5.5 million approx",
    flag: "/palestine/palestineFlag.jpg",
    description: <PalestineDescription />,
    Link: "https://en.wikipedia.org/wiki/State_of_Palestine",
    image: "/palestine/palestineMap.png",
    Gallery: <PalestineGallery />,
  },
  {
    CountryName: "Iran",
    Capital: "Tehran",
    Population: "89 million approx",
    flag: "/iran/iranFlag.png",
    description: <IranDescription />,
    Link: "https://en.wikipedia.org/wiki/Iran#:~:text=It%20is%20the%20sixth%2Dlargest,largest%20city%20and%20financial%20center.",
    image: "/iran/iranMap.jpg",
    Gallery: <IranGallery />,
  },
  {
    CountryName: "Lebanon",
    Capital: "Beirut",
    Population: "5.5 million approx",
    flag: "/lebanon/lebanonFlag.png",
    description: <LebanonDescription />,
    Link: "https://en.wikipedia.org/wiki/Lebanon",
    image: "/lebanon/lebanonMap.jpg",
    Gallery: <LebanonGallery />,
  },
  {
    CountryName: "Yemen",
    Capital: "Sana'a",
    Population: "34 million approx",
    flag: "/yemen/yemenFlag.png",
    description: <YemenDescription />,
    Link: "https://en.wikipedia.org/wiki/Yemen",
    image: "/yemen/yemenMap.jpg",
    Gallery: <YemenGallery />,
  },
];

const DynamicRoutes = ({ params }: { params: { country_name: string } }) => {
  const country = CountryName.find(
    (item) => item.CountryName.toLowerCase() === params.country_name.toLowerCase()
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {country ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{country.CountryName}</h1>
          <h2 className="text-xl font-semibold mb-2">Capital: {country.Capital}</h2>
          <p className="text-gray-700 mb-2">Population: {country.Population}</p>
          <h3 className="text-lg font-medium mb-2">Flag:</h3>
          <Image src={country.flag} alt="flag" width={100} height={50} className="mb-4" />
          <h3 className="text-lg font-medium mb-2">Description:</h3>
          {country.description}
          <Link href={country.Link}>
            <span className="text-blue-600 hover:underline">Learn more on Wikipedia</span>
          </Link>
          <h3 className="text-lg font-medium mt-4 mb-2">Map:</h3>
          <Image src={country.image} alt="map" height={100} width={200} className="shadow-lg rounded-lg mb-4" />
          <h3 className="text-lg font-medium mb-2">Gallery:</h3>
          {country.Gallery}
        </div>
      ) : (
        <h1 className="text-red-600 text-xl">Country not found!</h1>
      )}
      <h1 className="text-2xl font-semibold mt-6">Select a Country:</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href={"/Country/pakistan"} className="text-blue-600 hover:underline">
            Pakistan
          </Link>
        </li>
        <li>
          <Link href={"/Country/palestine"} className="text-blue-600 hover:underline">
            Palestine
          </Link>
        </li>
        <li>
          <Link href={"/Country/iran"} className="text-blue-600 hover:underline">
            Iran
          </Link>
        </li>
        <li>
          <Link href={"/Country/lebanon"} className="text-blue-600 hover:underline">
            Lebanon
          </Link>
        </li>
        <li>
          <Link href={"/Country/yemen"} className="text-blue-600 hover:underline">
            Yemen
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DynamicRoutes;
