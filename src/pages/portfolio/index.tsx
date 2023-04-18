import Head from "next/head";

const posts = Array(10).fill(null);

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Recent Work - René Peter</title>
        <meta
          name="description"
          content="Some of my more recent projects, along with some older stuff that I'm still very proud to say I've worked on."
        />
        <link rel="canonical" href="https://renepeter.xyz/portfolio" />
      </Head>

      <article id="portfolio" className="min-h-screen py-[25vh]">
        <div className="w-full mx-auto px-6 lg:px-12">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-white text-center mb-10 lg:mb-20">
            Recent Work
          </h1>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px">
          {posts.map((n, i) => (
            <li key={i} role="presentation">
              <div className="w-full h-[300px] bg-gray-950"></div>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
