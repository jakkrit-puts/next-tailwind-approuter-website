export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <nav>Header Admin</nav>
        <section>Navbar Admin</section>
        {children}
        <footer>Footer Admin</footer>
      </body>
    </html>
  );
}
