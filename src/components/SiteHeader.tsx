import Link from "next/link";

const SiteHeader = () => {
  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 flex items-center px-12 h-24 py-4 text-lg bg-brand z-20"
    >
      <div className="flex items-center w-full">
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

        <nav className="flex-1">
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

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded border-2 h-10 px-4 transition-colors hover:text-teal-500 hover:border-teal-500"
        >
          <span className="font-medium">Get in Touch</span>
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
