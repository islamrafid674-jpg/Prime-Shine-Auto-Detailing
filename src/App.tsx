/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { Services } from './components/Services';
import { ParallaxSection } from './components/ParallaxSection';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <Hero />
      <TrustBanner />
      <Services />
      <ParallaxSection />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
