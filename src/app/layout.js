import "../styles/tailwind.css";
import Link from "next/link";
export const metadata = {
  title: "Calendario de actividades",
  description:
    "Este sitio web muestra las próximas tareas a realizar en el SR - La Laja",
};
import Image from "next/image";

const Links = [
  { href: "/", label: "Inicio" },
  { href: "/crear", label: "Crear evento" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-6 mr-3 sm:h-10"
                  alt="Flowbite Logo"
                  width={100}
                  height={100}
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Calendario de actividades
                </span>
              </Link>
              <button
                data-collapse-toggle="navbar-multi-level"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-multi-level"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-multi-level"
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  {Links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <Link
                        href={href}
                        className="block px-2 py-1 text-gray-900 rounded-md
                        hover:bg-gray-100 dark:text-gray-400
                        dark:hover:bg-gray-700"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
