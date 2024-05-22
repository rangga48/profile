export default function Home() {
  return (
    <div>
      <nav className="bg-gray-300 p-4">
        <div className="container mx-auto flex justify-betwee items-center">
          <div className="hidden md:flex space-x-4 ml-auto">
            <a href="#" className="text-black hover:text-white">
              Home
            </a>
            <a href="#" className="text-black hover:text-white">
              About
            </a>
            <a href="#" className="text-black hover:text-white">
              Services
            </a>
            <a href="#" className="text-black hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
