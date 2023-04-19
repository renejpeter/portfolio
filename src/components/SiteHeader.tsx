import { routes } from "@/constants/routes";
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
            className="flex items-center justify-center -mt-1 text-white"
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
        </div>

        <nav className="hidden md:block flex-1">
          <ul className="flex items-center justify-center space-x-6 lg:space-x-8 text-md font-medium lg:text-lg">
            <li>
              <Link href={routes.home} className="inline-flex underlined">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href={routes.about} className="inline-flex underlined">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href={routes.skills} className="inline-flex underlined">
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link href={routes.projects} className="inline-flex underlined">
                <span>Projects</span>
              </Link>
            </li>
            {/* <li>
              <Link href={routes.blog} className="inline-flex underlined">
                <span>Blog</span>
              </Link>
            </li> */}
            <li>
              <Link href={routes.contact} className="inline-flex underlined">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="absolute top-5 right-6 flex items-center space-x-2.5 md:top-[1.125rem] lg:right-12 lg:top-[1.625rem]">
          <li role="presentation">
            <Link
              href={routes.socials.github}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 249"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
                ></path>
                <path
                  fill="currentColor"
                  d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
                ></path>
              </svg>
            </Link>
          </li>

          <li role="presentation">
            <Link
              href={routes.socials.linkedIn}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                ></path>
                <path
                  fill="#141416"
                  d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                ></path>
              </svg>
            </Link>
          </li>

          <li role="presentation" className="flex md:hidden">
            <button
              type="button"
              className="flex items-center justify-center h-11 w-11"
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
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SiteHeader;
