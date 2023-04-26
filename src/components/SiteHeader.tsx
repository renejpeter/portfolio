"use client";

import MenuIcon from "@/assets/svgs/MenuIcon";
import GithubLogo from "@/assets/svgs/GithubLogo";
import LinkedInLogo from "@/assets/svgs/LinkedInLogo";
import SiteLogo from "@/assets/svgs/SiteLogo";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@/assets/svgs/CloseIcon";

const menuItems: Record<string, string> = {
  Home: routes.home,
  About: routes.about,
  Skills: routes.skills,
  Projects: routes.projects,
  Contact: routes.contact,
};

const SiteHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function openMenu() {
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 flex items-center px-6 h-20 lg:px-12 lg:h-24 py-4 text-lg bg-brand z-20"
    >
      <div className="flex items-center justify-between w-full">
        <div className="absolute left-6 top-5 lg:left-12 lg:top-7">
          <Link
            href="/"
            className="flex items-center justify-center -mt-1 text-white"
            aria-label="Rene J. Peter logo"
          >
            <SiteLogo className="w-12 h-12" />
          </Link>
        </div>

        <nav className="hidden md:block flex-1">
          <ul className="flex items-center justify-center space-x-6 lg:space-x-8 text-md font-medium lg:text-lg">
            {Object.keys(menuItems).map((x) => (
              <li key={x}>
                <Link href={menuItems[x]} className="inline-flex underlined">
                  <span>{x}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="absolute top-5 right-6 flex items-center space-x-2.5 md:top-[1.125rem] lg:right-12 lg:top-[1.625rem]">
          <li role="presentation">
            <Link
              href={routes.socials.github}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11"
              target="_blank"
            >
              <GithubLogo className="w-6 h-6" />
            </Link>
          </li>

          <li role="presentation">
            <Link
              href={routes.socials.linkedIn}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11"
              target="_blank"
            >
              <LinkedInLogo className="w-6 h-6" />
            </Link>
          </li>

          <li role="presentation" className="flex md:hidden">
            <button
              type="button"
              className="flex items-center justify-center h-11 w-11"
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-controls="mobile-menu"
              aria-expanded={showMenu}
            >
              <MenuIcon className="w-8 h-8" />
            </button>

            {showMenu && (
              <>
                <div
                  role="button"
                  className="fixed inset-0 bg-black/80 transition"
                  onClick={closeMenu}
                ></div>
                <button
                  type="button"
                  className="fixed top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center bg-brand z-10"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  aria-controls="mobile-menu"
                  aria-expanded={showMenu}
                >
                  <CloseIcon className="w-8 h-8" />
                </button>
              </>
            )}

            <aside
              id="mobile-menu"
              className={`${
                showMenu ? "translate-x-0" : "-translate-x-80"
              } fixed inset-y-0 left-0 w-80 transition-transform`}
            >
              <nav className="relative w-full h-full flex items-center bg-brand text-xl py-12">
                <ul>
                  {Object.keys(menuItems).map((k) => (
                    <li key={k}>
                      <Link
                        href={menuItems[k]}
                        className="h-14 flex items-center px-12"
                        onClick={closeMenu}
                      >
                        <span>{k}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SiteHeader;
