import Link from "next/link";
import { useState } from "react";

const SiteHeader = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 flex items-center px-6 h-20 lg:px-12 lg:h-24 py-4 text-lg bg-brand z-20"
    >
      <div className="flex items-center justify-between w-full">
        <div className="absolute left-6 top-5 lg:left-12 lg:top-7">
          <div
            id="site-logo"
            className="relative flex items-center h-10 space-x-1.5"
          >
            <div className="bg-white rounded-sm h-full w-3"></div>
            <div className="flex flex-col space-y-1.5 w-3 h-full">
              <div className="flex-1 bg-white rounded-sm"></div>
              <div className="flex-1 bg-teal-500 rounded-sm"></div>
            </div>
            <div className="bg-teal-500 rounded-sm h-full w-3"></div>
            <div className="bg-white rounded-sm h-full w-3"></div>
            <div className="flex flex-col space-y-1 w-3 h-full">
              <div className="h-1/2 bg-white rounded-sm"></div>
            </div>
            <Link
              href="/"
              className="absolute inset-0"
              aria-label="Rene J. Peter logo"
            ></Link>
          </div>
        </div>

        <nav className="hidden md:block flex-1">
          <ul className="flex items-center justify-center space-x-8">
            <li>
              <Link href="/" className="inline-flex underlined">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#about" className="inline-flex underlined">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="inline-flex underlined">
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="inline-flex underlined">
                <span>Portfolio</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute top-5 right-6 lg:right-12 lg:top-7">
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center justify-center rounded border-2 h-10 px-4 transition-colors hover:text-teal-500 hover:border-teal-500"
          >
            <span className="lg:hidden font-medium">Contact</span>
            <span className="hidden lg:inline-flex font-medium">
              Get in Touch
            </span>
          </Link>
          <button
            type="button"
            className="flex md:hidden items-center justify-center h-11 w-11"
            onClick={() => setMenu((state) => !state)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
