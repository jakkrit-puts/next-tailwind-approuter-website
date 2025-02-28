export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`antialiased`}>
          <nav>Header FE</nav>
          {children}
          <footer>Footer FE</footer>
        </body>
      </html>
    );
  }
  