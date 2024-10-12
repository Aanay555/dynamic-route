

import Image from "next/image";

const PakistanDescription = () => {
  return (
    <div className="p-6">
      
      <p className="text-base leading-7">
        Pakistan, officially known as the Islamic Republic of Pakistan, <br />
        is a country located in South Asia. It is the world's fifth-most
        populous country, <br />
        with over 240 million people, and the second-largest Muslim-majority
        nation. Pakistan shares <br />
        borders with India to the east, Afghanistan and Iran to the west, and
        China to the north. <br />
        To its south, it has a coastline along the Arabian Sea.
      </p>
    </div>
  );
};

export default PakistanDescription;

export const PakistanGallery = () => {
  return (
    <div className="p-6">
      
      <div className="flex flex-wrap justify-between gap-4 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="p-2">
            <Image
              src="/pakistan/pak1.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/pakistan/pak2.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/pakistan/pak3.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          
          <li className="p-2">
            <Image
              src="/pakistan/pak6.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/pakistan/pak5.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/pakistan/pak7.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
