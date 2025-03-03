import ThemeToggle from "./ThemeToggle";
import DemoButton from "./DemoButton";
import logo from './../assets/logo.png';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-dark-100 border-b border-gray-200 dark:border-dark-300 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary dark:text-primary-light">
              <img
                src={logo}
                alt="Scroll to top"
                className="h-8 w-auto object-contain cursor-pointer"
                onClick={scrollToTop}
              />
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#table"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
            >
              Data Set
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex gap-4">
            <DemoButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
