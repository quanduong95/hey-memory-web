import { Navbar, Footer } from '../../components/index';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};
