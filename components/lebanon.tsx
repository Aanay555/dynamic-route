import Image from "next/image";

const LebanonDescription = () => {
  return (
    <div className="p-6">
      
      <p className="text-base leading-7">
      Lebanon, country consisting of a narrow strip of territory on the eastern shore of the Mediterranean Sea. 
      It is one of the {`world's`} smaller sovereign states. The capital is Beirut.
      </p>
    </div>
  );
};

export default LebanonDescription;

export const LebanonGallery = () => {
  return (
    <div className="p-6">
      
      <div className="flex flex-wrap justify-between gap-4 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="p-2">
            <Image
              src="/lebanon/l1.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/lebanon/l2.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/lebanon/l3.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          
          <li className="p-2">
            <Image
              src="/lebanon/l4.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/lebanon/l5.jpg"
              alt="countryImage"
              width={200}
              height={100}
              className="rounded-lg shadow-md"
            />
          </li>
          <li className="p-2">
            <Image
              src="/lebanon/l6.jpg"
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
