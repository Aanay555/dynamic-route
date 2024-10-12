import Image from "next/image";

const YemenDescription = () => {
  return (
    <div className="p-6">
      
      <p className="text-base leading-7">
      Yemen, country situated at the southwestern corner of the Arabian Peninsula. <br/>
      It is mostly mountainous and generally arid, though there are broad patches with sufficient<br/>
       precipitation to make agriculture successful. The people speak various dialects of Arabic <br/>
       and are mostly Muslims.
      </p>
    </div>
  );
};

export default YemenDescription;

export const YemenGallery = () => {
  return (
    <div className="p-6">
      
      <div className="flex flex-wrap justify-between gap-4 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="p-2">
            <Image
              src="/yemen/y1.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/yemen/y2.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/yemen/y3.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          
          <li className="p-2">
            <Image
              src="/yemen/y4.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/yemen/y7.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/yemen/y6.jpg"
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
