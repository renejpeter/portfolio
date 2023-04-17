const IntroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full mx-auto max-w-screen-xl">
        <div className="flex gap-10">
          <div className="flex-1">
            <h1 className="text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Hi I&apos;m René, <br />a full-stack{" "}
              <span className="gr-teal-limegreen">website engineer</span>.
            </h1>
            <p className="text-xl opacity-50">
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
