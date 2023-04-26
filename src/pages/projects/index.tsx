import Head from "next/head";
import Image from "next/image";
import EcmWorkImage from "@/assets/ecm-ss.png";
import KiskadeeWorkImage from "@/assets/task-manager-ss.png";
import RenePeterWorkImage from "@/assets/portfolio-ss.png";
import Link from "next/link";

const posts = Array(10).fill(null);

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Past Projects - René Peter</title>
        <meta
          name="description"
          content="Some of my more recent projects, along with some older stuff that I'm still very proud to say I've worked on."
        />
        <link rel="canonical" href="https://renepeter.xyz/projects" />
      </Head>

      <article id="projects" className="min-h-screen py-[25vh]">
        <div className="w-full mx-auto px-6 lg:px-12">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-white text-center mb-10 lg:mb-20">
            Past Projects
          </h1>
        </div>

        <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            <div className="flex flex-col md:flex-row items-center gap-12 text-md md:text-base">
              <div className="flex-1">
                <Image
                  src={RenePeterWorkImage}
                  alt="Rene Peter Portfolio"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                  Personal Portfolio
                </h2>
                <p className="mb-6">
                  A simple website built with NextJS to illustrate who I am, my
                  skills, experiences and what technologies I&apos;ve worked
                  with both in the past and currently.
                </p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {[
                    "NextJS",
                    "React",
                    "TypeScript",
                    "TailwindCSS",
                    "Frontend",
                    "Static Site Generation",
                  ].map((n) => (
                    <li key={n} role="presentation">
                      <div className="flex items-center justify-center px-3.5 h-7 rounded-full bg-white bg-opacity-10">
                        <span className="text-sm">{n}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p>
                  <Link
                    href="https://renepeter.xyz"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center space-x-1.5 text-orange-500 hover:underline"
                  >
                    <span>Visit website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            {/* eof RP */}

            <div className="flex flex-col md:flex-row items-center gap-12 text-md md:text-base">
              <div className="flex-1">
                <Image
                  src={KiskadeeWorkImage}
                  alt="Task Manager Module"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                  Ship With Kiskadee
                </h2>
                <p className="text-md md:text-base mb-6">
                  Client requested a task management module to be built as an
                  extension of their main business application, and accessible
                  through their internal NextJS web-app. A system was
                  implemented utilizing existing authentication methods,
                  multiple views, assignments, deadlines, comments and
                  statistics to be used for KPIs.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Backend",
                    "RESTful API",
                    "Laravel",
                    "PHP",
                    "Frontend",
                    "NextJS",
                    "React",
                    "MariaDB",
                    "Redis",
                    "TailwindCSS",
                    "AlpineJS",
                  ].map((n) => (
                    <li key={n} role="presentation">
                      <div className="flex items-center justify-center px-3.5 h-7 rounded-full bg-white bg-opacity-10">
                        <span className="text-sm">{n}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* eof Kiskadee */}

            <div className="flex flex-col md:flex-row items-center gap-12 text-md md:text-base">
              <div className="flex-1">
                <Image
                  src={EcmWorkImage}
                  alt="ECM Trinidad Limited"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                  ECM Trinidad Limited
                </h2>
                <p className="mb-6">
                  Client needed a new website to better represent their entry
                  into the residential and commercial market within their
                  industry. Website needed to be managed by a content management
                  system and include a catalog of brands as well as product
                  categories that the company offers.
                </p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Laravel",
                    "PHP",
                    "MariaDB",
                    "Redis",
                    "TailwindCSS",
                    "AlpineJS",
                    "Secure Dashboard",
                    "Full-Stack",
                  ].map((n) => (
                    <li key={n} role="presentation">
                      <div className="flex items-center justify-center px-3.5 h-7 rounded-full bg-white bg-opacity-10">
                        <span className="text-sm">{n}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p>
                  <Link
                    href="https://ecmtt.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center space-x-1.5 text-orange-500 hover:underline"
                  >
                    <span>Visit website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            {/* eof ECM */}
          </div>
        </div>
      </article>
    </>
  );
}
