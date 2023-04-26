import LocationIcon from "@/assets/svgs/LocationIcon";
import MailIcon from "@/assets/svgs/MailIcon";
import PhoneIcon from "@/assets/svgs/PhoneIcon";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-[50vh] flex items-center justify-center py-[10vh] lg:py-[25vh]"
    >
      <div className="w-full mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="lg:flex items-center gap-10">
          <div className="flex-1 flex flex-col items-center lg:block">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-3 lg:mb-6 gr-blue-pink">
              Get in Touch
            </h1>
            <ul className="space-y-3 lg:space-y-6 text-base lg:text-xl">
              <li>
                <div className="flex items-start justify-center lg:justify-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-pink-500 bg-opacity-10">
                    <MailIcon className="w-5 h-5 lg:w-7 lg:h-7" />
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
                <div className="flex items-start justify-center lg:justify-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-teal-500 bg-opacity-10">
                    <PhoneIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                  </div>
                  <div className="pt-2.5">
                    <Link href="tel:+18684928627">+1 (868) 492-8627</Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start justify-center lg:justify-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-orange-500 bg-opacity-10">
                    <LocationIcon className="w-6 h-6 lg:w-8 lg:h-8" />
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
