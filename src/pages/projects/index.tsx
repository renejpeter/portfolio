import Head from "next/head";
import Image from "next/image";
import EcmWorkImage from "@/assets/ecm-ss.png";
import KiskadeeWorkImage from "@/assets/task-manager-ss.png";
import RenePeterWorkImage from "@/assets/portfolio-ss.png";
import Link from "next/link";
import { projects } from "@/constants/projects";

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
            {projects.map((p, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-12 text-md md:text-base"
              >
                <div className="flex-1">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    className="rounded-xl"
                    placeholder="blur"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                    {p.title}
                  </h2>
                  <p className="mb-6">{p.summary}</p>

                  <ul className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((n) => (
                      <li key={n} role="presentation">
                        <div className="flex items-center justify-center px-3.5 h-7 rounded-full bg-white bg-opacity-10">
                          <span className="text-sm">{n}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {p.url && p.url !== null && (
                    <p>
                      <Link
                        href={p.url}
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
