import Link from "next/link";

const Navbar = () => {
  return (
    <main>
      <nav className="bg-gray-800 text-gray-200 py-4 shadow-lg">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link
            href="/"
            className="text-lg hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>
          
          <Link
            href="/Country"
            className="text-lg hover:text-cyan-400 transition duration-300"
          >
            Country
          </Link>
          
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
