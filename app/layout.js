import './globals.css';

export default function RootLayout({children}){
  return <html>
    <head>
        <title>Sistema Web</title>
    </head>
    <body>{children}</body>
  </html>;
}