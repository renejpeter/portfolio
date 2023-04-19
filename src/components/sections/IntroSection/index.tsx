const IntroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center py-[25vh]"
    >
      <div className="w-full mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="flex gap-10">
          <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-extrabold tracking-tight text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tighter xl:leading-tighter mb-3 lg:mb-6">
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
