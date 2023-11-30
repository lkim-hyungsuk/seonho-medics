import Link from "next/link";
import MobileMenu from "./mobile-menu";
import DropdownMenu from "./dropdown-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          {/* <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#A8763E"
                  d="M14.483 1.515c.48-.488 1.267-.488 1.747 0l9.243 9.243c.489.488.489 1.279 0 1.768l-9.243 9.243c-.48.488-1.267.488-1.747 0l-9.243-9.243c-.489-.488-.489-1.279 0-1.768l9.243-9.243z"
                />
              </svg>
            </Link>
          </div> */}

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-custom-smokeyBlack hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-custom-smokeyBlack hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="font-medium text-custom-smokeyBlack hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li> */}
              <li>
                <Link
                  href="/products"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-500 ml-3"
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
