import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Water from './components/Water';
import Link from 'next/link';
import WebsiteDemo from './components/WebsiteDemo';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-10 reveal">
        <h2 className="text-3xl font-extrabold text-center mb-3 text-black">
          About AquaCal
        </h2>
        <p className="text-lg text-center text-black">
          AquaCal helps you track daily water intake with an intuitive tracker,
          helpful reminders, and visual progress. Stay hydrated, feel better.
        </p>
      </section>

      {/* WHY AQUACAL */}
      <section className="bg-white py-12 px-6 reveal">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-black">Quick Setup</h3>
            <p className="text-black">
              Choose your bottle size and start adding sips. It's fast and friendly.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-black">Visual Progress</h3>
            <p className="text-black">
              See your daily percentage fill and stay motivated to reach your goal.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-black">Track History</h3>
            <p className="text-black">
              Review past days to spot trends and improve hydration habits.
            </p>
          </div>
        </div>
      </section>

      {/* TRY THE TRACKER */}
      <section className="max-w-6xl mx-auto px-6 py-6 reveal">
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold mb-2 text-black">
              Try the Tracker
            </h2>
            <p className="text-black mb-4 max-w-md">
              Play with the interactive tracker below to see how adding water
              updates your progress.
            </p>
            <Link
              href="/WaterTracker"
              className="inline-block w-fit px-4 py-2 rounded bg-sky-700 text-white font-semibold hover:bg-sky-800 transition-colors"
            >
              Open Tracker
            </Link>
          </div>

          {/* TRACKER */}
          <div className="flex justify-center md:justify-end">
            <div className="relative -translate-y-1">
              <Water />
            </div>
          </div>

        </div>
      </section>

      <Features />

      {/* TESTIMONIAL */}
      <section className="bg-gray-50 py-14 px-6 mt-16 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-extrabold mb-3 text-black">
            What people say
          </h3>
          <blockquote className="text-black italic">
            “AquaCal made it so easy to build a hydration habit — highly recommend!”
          </blockquote>
          <cite className="block mt-2 text-sm text-black">
            — Happy User
          </cite>
        </div>
      </section>

    <WebsiteDemo
  videoSrc="https://drive.google.com/file/d/11WpDG-PftZOZsoChPz67iba_ttPP9TZP/view?usp=sharing"
  poster="/poster.jpg"
  title="Demo Video"
/>

      <Footer />
    </main>
  );
}
