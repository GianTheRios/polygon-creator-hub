import { Header } from "./(site)/components/Header";
import { Hero } from "./(site)/components/Hero";
import { Metrics } from "./(site)/components/Metrics";
import { Resources } from "./(site)/components/Resources";
import { ContentHub } from "./(site)/components/ContentHub";
import { Tools } from "./(site)/components/Tools";
import { Community } from "./(site)/components/Community";
import { Footer } from "./(site)/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Hero />
      <Metrics />
      <Resources />
      <ContentHub />
      <Tools />
      <Community />
      <Footer />
    </div>
  );
}
