import Link from "next/link";

const Country = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/welcomeImage/world2.jpg")', height: '100vh' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen ">
        <h1 className="text-5xl font-extrabold text-yellow-300 mb-8 animate-fade-in">
          This is Country Page
        </h1>
        <h2 className="text-3xl text-yellow-400 mb-6 animate-bounce">Select the Country:</h2>
        <ul className="space-y-6">
          <li className="text-2xl font-bold">
            <Link href="/Country/pakistan" className="text-yellow-300 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:underline">
              Pakistan
            </Link>
          </li>
          <li className="text-2xl font-bold">
            <Link href="/Country/palestine" className="text-yellow-300 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:underline">
              Palestine
            </Link>
          </li>
          <li className="text-2xl font-bold">
            <Link href="/Country/iran" className="text-yellow-300 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:underline">
              Iran
            </Link>
          </li>
          <li className="text-2xl font-bold">
            <Link href="/Country/lebanon" className="text-yellow-300 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:underline">
              Lebanon
            </Link>
          </li>
          <li className="text-2xl font-bold">
            <Link href="/Country/yemen" className="text-yellow-300 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:underline">
              Yemen
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
