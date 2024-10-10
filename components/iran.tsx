import Image from "next/image";

const IranDescription = () => {
  return (
    <div className="p-6">
      
      <p className="text-base leading-7">
      It is the sixth-largest country entirely in Asia and one of the world's most mountainous countries.<br/>
      Officially an Islamic republic, Iran has a Muslim-majority population. The country is divided into <br/>
      five regions with 31 provinces.Tehran is the nation's capital, largest city and financial center.<br/>
      </p>
    </div>
  );
};

export default IranDescription;

export const IranGallery = () => {
  return (
    <div className="p-6">
      
      <div className="flex flex-wrap justify-between gap-4 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="p-2">
            <Image
              src="/iran/iran1.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/iran/iran2.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/iran/iran3.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          
          <li className="p-2">
            <Image
              src="/iran/iran4.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/iran/iran5.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/iran/iran6.jpg"
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
