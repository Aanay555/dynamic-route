import Image from "next/image";

const PalestineDescription = () => {
  return (
    <div className="p-6">
      
      <p className="text-base leading-7">
      Palestine is sometimes called the Holy Land. It is a sacred place for three major religions: <br/>
      Judaism, Christianity, and Islam. Palestine is important to Jews because the ancient kingdom of <br/>
      Israel was located there.Jews believe that God promised the land to them.
      </p>
    </div>
  );
};

export default PalestineDescription;

export const PalestineGallery = () => {
  return (
    <div className="p-6">
      
      <div className="flex flex-wrap justify-between gap-4 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="p-2">
            <Image
              src="/palestine/palis1.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/palestine/palis2.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/palestine/palis3.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          
          <li className="p-2">
            <Image
              src="/palestine/palis4.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/palestine/palis5.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/palestine/palis6.jpg"
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
