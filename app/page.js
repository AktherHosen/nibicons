import { ICONS } from '../data/icons';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IconBrowser from '../components/IconBrowser';
import InstallSection from '../components/InstallSection';
import UsageSection from '../components/UsageSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero count={ICONS.length} />

      <section className="section" id="browse">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Browse the set</h2>
              <p>Click any icon to copy its SVG markup, or open its page for size and usage details.</p>
            </div>
          </div>
          <IconBrowser icons={ICONS} />
        </div>
      </section>

      <section className="section" id="install">
        <div className="wrap">
          <InstallSection />
        </div>
      </section>

      <section className="section" id="usage">
        <div className="wrap">
          <UsageSection />
        </div>
      </section>

      <Footer />
    </>
  );
}
