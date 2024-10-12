import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-6 px-4 mt-8 border-t border-gray-300 shadow-sm">
      <div className="max-w-screen-xl mx-auto text-center">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          <li>
            <Link
              href={"/Country/pakistan"}
              className="text-black text-lg font-bold hover:text-blue-600 transition duration-300"
            >
              Pakistan
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-black">|</span>
          </li>
          <li>
            <Link
              href={"/Country/palestine"}
              className="text-black text-lg font-bold hover:text-blue-600 transition duration-300"
            >
              Palestine
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-black">|</span>
          </li>
          <li>
            <Link
              href={"/Country/iran"}
              className="text-black text-lg font-bold hover:text-blue-600 transition duration-300"
            >
              Iran
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-black">|</span>
          </li>
          <li>
            <Link
              href={"/Country/lebanon"}
              className="text-black text-lg font-bold hover:text-blue-600 transition duration-300"
            >
              Lebanon
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-black">|</span>
          </li>
          <li>
            <Link
              href={"/Country/yemen"}
              className="text-black text-lg font-bold hover:text-blue-600 transition duration-300"
            >
              Yemen
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
