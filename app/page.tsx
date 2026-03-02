import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Nav } from '@/components/Nav';
import { FloatingContact } from '@/components/FloatingContact';
import { WelcomeToast } from '@/components/WelcomeToast';

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeToast />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <FloatingContact />
    </main>
  );
}
