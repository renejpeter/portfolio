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
          <Link
            href="/"
            className="flex items-center justify-center -mt-1"
            aria-label="Rene J. Peter logo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1270.43 1384.92"
              className="w-12 h-12"
            >
              <path
                fill="currentColor"
                d="M1240.98,709.34c-35.68,44.68-131.97,107.67-187.97,120.9c-15.91,3.76-299.27,98.51-306.4,42.14 c-7.03-55.58,35.79-60.21,73.13-74.02c47-17.4,251.36-78.73,296.73-115.52c26.03-21.1,43.52-45.44,45.02-60.72 c1.88-19.18-17.56-45.71-42.12-43.95c-80.12,5.74-219.8,66.91-276.85,90.93c-16.36,6.89-11.24-1.45-19.63,14.82 c-36.54,70.91-74.71,141.53-103.64,215.62c-21.22,54.34-62.97,233.58-76.81,263.03c-7.03,14.96-20.64,29.17-34.89,37.64 c-10.22,6.06-28.67,6.42-39.25,1.05c-7.9-4.01-13.04-21.36-12.64-32.53c3.63-100.41,41.26-191.4,79.41-282.42 c26.62-63.52,50.75-128.08,75.65-191.89c2.82-7.22-0.41-15.49-7.48-18.64c-0.2-0.09-0.4-0.17-0.6-0.25 c-50.1-19.49-59.17-45.26-30.25-91.19c4.46-7.09,15.01-11.75,23.7-14.54c29.01-9.3,245.92-50.51,316.73-71.06 c77.3-22.44,127.15-24.51,208.46,8.01c14.65,5.86,27.37,11.85,38.03,19.08v-60.98c0-82.11-43.81-157.99-114.92-199.05L750.14,38.16 c-71.11-41.06-158.73-41.06-229.84,0L126.04,265.79C54.93,306.85,11.12,382.72,11.12,464.84v323.99 c12.17-34.68,26.39-68.81,40.7-102.94c25.13-59.95,47.9-120.88,71.4-181.11c2.66-6.81-0.38-14.62-7.06-17.59 c-0.19-0.08-0.38-0.16-0.57-0.24c-47.29-18.4-55.85-42.72-28.55-86.07c4.21-6.69,14.16-11.09,22.37-13.72 c27.38-8.78,251.52-71.72,318.35-91.12c72.96-21.18,148.15-31.12,219.6,10.43c30.66,17.83,54.17,40.91,62.85,76.58 c10.73,44.12,1.94,75.93-39.85,92.73c-50.07,20.13-143.55,50.5-196.4,62.98c-15.01,3.55-68.91,15.96-87.36,17.05 c-4.34,0.26-5.42,6.19-1.43,7.93c24.66,10.76,61.92,7.88,103.73,18.03c45.49,11.04,96.83,36.94,130.89,65.11 c31.71,26.21,56.12,59.65,46.03,104.95c-2.62,11.77-10.96,25.8-20.81,31.05c-5.64,3.01-23.67-6.97-29.16-15.55 c-37.34-58.39-93.38-82.64-158.44-96.32c-60.44-12.71-119.81-30.73-179.32-47.55c-51.05-14.43-60.09-47.29-18.05-80.6 c29.08-23.04,65.25-38.91,100.49-51.96c44.36-16.42,137.16-39.73,182.24-54.44c4.94-1.61,54.23-20.55,55.65-34.98 c1.78-18.1-46.9-32.14-70.07-30.48c-75.62,5.42-207.45,63.15-261.29,85.82c-15.44,6.5-30.03,22.69-37.95,38.04 c-34.49,66.92-70.51,133.57-97.81,203.51c-20.02,51.29-59.43,220.46-72.5,248.25c-6.64,14.12-19.48,27.53-32.93,35.52 c-1.62,0.96-3.48,1.76-5.48,2.42c16.38,56,53.75,104.57,105.69,134.56l394.26,227.62c71.11,41.06,158.73,41.06,229.84,0 l394.26-227.62c71.11-41.06,114.92-116.93,114.92-199.05V685.67C1253.59,693.4,1247.43,701.26,1240.98,709.34z"
              ></path>
            </svg>
          </Link>
          {/* <div
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
          </div> */}
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
