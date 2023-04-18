const IntroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center py-[25vh]"
    >
      <div className="w-full mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="flex gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-3 lg:mb-6">
              Hi I&apos;m René, <br />a full-stack{" "}
              <span className="gr-teal-limegreen">website engineer</span>.
            </h1>
            <p className="text-base opacity-50 md:text-lg lg:text-xl">
              {[
                "Backend Web Developer",
                "Systems Engineer",
                "Laravel Artisan",
              ].join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
