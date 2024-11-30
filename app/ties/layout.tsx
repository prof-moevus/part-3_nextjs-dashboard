
export default function TestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section> 
        <h2>Titre de test</h2>
        {children}
      </section>
    );
  }