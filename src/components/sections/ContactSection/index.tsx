import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-[25vh]"
    >
      <div className="w-full mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="lg:flex items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-3 lg:mb-6 gr-blue-pink">
              Get in Touch
            </h1>
            <ul className="space-y-3 lg:space-y-6 text-base lg:text-xl">
              <li>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-pink-500 bg-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 lg:w-7 lg:h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="pt-2.5">
                    <Link
                      href="mailto:renejp@proton.me"
                      rel="noopener noreferrer"
                    >
                      renejp@proton.me
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-teal-500 bg-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 lg:w-7 lg:h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div className="pt-2.5">
                    <Link href="tel:+18684928627">+1 (868) 492-8627</Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-orange-500 bg-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="pt-2.5">
                    Trincity, Trinidad and Tobago, W.I.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex flex-1">
            <Image
              src="https://i.imgur.com/aUFcgNf.png"
              alt="Map of Southern Caribbean"
              className="map-img"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
