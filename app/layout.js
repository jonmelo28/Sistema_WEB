
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div>
          <aside className="bg-zinc-900
          h-full p-4 w-[250px]" >
            <Link href="/">
              <Image src="/images/jm.png"
               width={150}
               height={150}
              />
            </Link>
            <nav>
              <li>
                Usuario
              </li>
            </nav>
          </aside>
        </div>
        <div></div>  
      </body>
    </html>
  );
}
