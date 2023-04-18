const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-[25vh]"
    >
      <div className="w-full mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="md:flex items-center gap-10">
          <div className="flex-1 md:flex items-center justify-center mb-6 lg:mb-0">
            <div className="bg-gray-900 rounded-full h-40 w-40 md:w-60 md:h-60 lg:h-80 lg:w-80 border-4 border-sky-300"></div>
          </div>
          <div className="flex-1">
            <p className="gr-orange-yelloworange font-bold uppercase mb-3 lg:mb-6 text-sm lg:text-base">
              Who Am I?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 lg:mb-6">
              René J. Peter
            </h2>
            <p className="text-md lg:text-lg mb-4">
              I am a Full-Stack Website and Systems Engineer with over 15 years
              experience in what I do. I am currently working from the
              Caribbean, in the beautiful twin-island Republic of Trinidad and
              Tobago.
            </p>
            <p className="text-md lg:text-lg mb-4">
              Aside from development work, I&apos;m also an avid home cook,
              maintain a small home garden and can enjoy a good webnovel.
            </p>
            <p className="text-md lg:text-lg">
              I&apos;m somewhat of a perfectionist with an extreme attention to
              detail, I aim to solve problems methodically and efficiently. I
              strive to maintain a high level of workmanship as I take pride in
              my craft and the value it brings to the table, not just to the
              organization but to the people who use my apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
