const posts = Array(10).fill(null);

export default function PortfolioPage() {
  return (
    <article id="portfolio" className="min-h-screen">
      <div className="w-full mx-auto px-12 pt-[20vh]">
        <h1 className="font-extrabold text-7xl text-white text-center mb-20">
          Recent Work
        </h1>
      </div>

      <ul className="grid grid-cols-5 gap-px mb-28">
        {posts.map((n, i) => (
          <li key={i} role="presentation">
            <div className="w-full h-[20vw] bg-gray-950"></div>
          </li>
        ))}
      </ul>
    </article>
  );
}
