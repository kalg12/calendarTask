import Link from "next/link";
export const metadata = {
  title: "Calendario de actividades",
  description:
    "Este sitio web muestra las próximas tareas a realizar en el SR - La Laja",
};

const Links = [
  { href: "/", label: "Inicio" },
  { href: "/crear", label: "Crear evento" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <ul>
              {Links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
