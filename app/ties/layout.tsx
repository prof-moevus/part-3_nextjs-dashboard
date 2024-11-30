
export default function TestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
        <h2>Titre de test</h2>
        {children}
        </body>
      </html>
    );
  }