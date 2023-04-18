import Link from "next/link";
import TechStackBlock from "./TechStackBlock";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-[25vh]"
    >
      <div className="w-full px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-7xl gr-limegreen-blue text-center font-extrabold mx-auto max-w-screen-md mb-3 lg:mb-6">
          Skills &amp; Experience
        </h2>
        <p className="text-md lg:text-lg leading-normal text-center max-w-screen-md mx-auto mb-4">
          Building dynamic content management systems and RESTful APIs using
          Laravel, Codeigniter and PhalconPHP. Microservices and scripts with
          Python, Golang and Linux Bash. Frontend interfaces with plain HTML,
          CSS and JavaScript. Frontend libraries and frameworks such as jQuery,
          AlpineJS, Bootstrap, TailwindCSS, NextJS and Nuxt.
        </p>
        <p className="text-md lg:text-lg text-center mb-2 lg:mb-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-orange-500 font-medium hover:underline"
          >
            <span>Check out my recent work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </p>
        <TechStackBlock />
      </div>
    </section>
  );
};

export default SkillSection;
