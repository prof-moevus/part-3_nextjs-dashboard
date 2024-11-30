import '@/app/ui/christmas.css';


export default function TestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        {children}
      </section>
    );
  }