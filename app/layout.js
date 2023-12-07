import Sidebar from '@/components/Sidebar';
import './globals.css';
import Navbar from '@/components/Navbar';


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="grid [grid-template-columns:250px_1fr] min-h-[100vh]">
        <div className='relative'>
         <Sidebar />
        </div>
        <div>
         <Navbar/>
         <main className="mt-16 p-4">{children}</main>
        </div>  
      </body>
    </html>
  );
}
