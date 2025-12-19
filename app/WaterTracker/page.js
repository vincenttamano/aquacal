import Header from '../components/Header';
import Footer from '../components/Footer';
import WaterTracker from '../components/Water';

export default function WaterTrackerPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* PAGE INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-14 text-center bg-white reveal">
          <h1 className="text-4xl font-extrabold mb-4 text-sky-700">
            Daily Water Tracker
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Stay hydrated by tracking how much water you drink throughout the day.
            Choose your bottle size, add your sips, and watch your progress fill up in real time.
          </p>
        </section>

        {/* TRACKER SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-8 reveal">
          <WaterTracker />
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-50 py-16 px-6 reveal">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-black">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-black">1. Choose Your Bottle</h3>
                <p className="text-black">
                  Select the bottle size you normally drink from so tracking stays accurate.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-black">2. Add Your Water</h3>
                <p className="text-black">
                  Enter the amount you drank or use the quick buttons for common sip sizes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-black">3. Reach Your Goal</h3>
                <p className="text-black">
                  Watch the bottle fill up and aim for 100% by the end of the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY HYDRATION MATTERS */}
        <section className="max-w-5xl mx-auto px-6 py-16 reveal">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-black">
            Why Staying Hydrated Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4 text-black text-lg">
              <li>💧 Improves focus and concentration</li>
              <li>💧 Helps regulate body temperature</li>
              <li>💧 Supports digestion and metabolism</li>
              <li>💧 Keeps skin healthy and energized</li>
            </ul>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
              <p className="text-black">
                Most people don’t drink enough water during the day.
                Using a visual tracker makes hydration easier, more engaging,
                and helps build long-term healthy habits.
              </p>
            </div>
          </div>
        </section>

        {/* TIP / CTA */}
        <section className="bg-sky-700 py-14 px-6 text-center reveal">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Pro Tip 💡
          </h2>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto">
            Try drinking a glass of water every hour. Small, consistent sips add up
            faster than you think!
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
