import { FeaturesSection } from '../../components/FeaturesSection/FeaturesSection';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { IntroSection } from '../../components/IntroSection/IntroSection';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';

export const Home = () => {
  return (
    <section>
      <DefaultLayout>
        <main className=' bg-white px-6'>
          <HeroSection />
          <IntroSection />
          <FeaturesSection />
        </main>
      </DefaultLayout>
    </section>
  );
};
