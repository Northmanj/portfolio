const Header = () => {
    return (
      <header className="py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">Gregory Oundo</h1>
        <nav className="space-x-6 text-gray-300">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  