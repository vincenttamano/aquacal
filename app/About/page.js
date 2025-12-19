import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialsCarousel from '../components/Testimonials';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-12 bg-blue-50 flex flex-col items-center space-y-16">
        {/* Title & Introduction */}
        <section className="text-center reveal py-10 px-6 bg-white rounded-2xl shadow-md max-w-3xl">
          <h1 className="text-5xl font-bold text-blue-800 mb-8">About AquaCal</h1>
          <p className="max-w-xl text-black mb-6">
            AquaCal is your personal water tracker to help you stay hydrated every day. 
            Choose your bottle size, track your water intake, and reach your hydration goals!
          </p>
          <p className="max-w-xl text-black">
            Our goal is to make healthy hydration habits simple, fun, and interactive. 
            Stay refreshed and energized with AquaCal!
          </p>
        </section>

        {/* Features Section */}
        <section className="max-w-3xl w-full text-center bg-white p-8 rounded-2xl shadow-md reveal">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8">Features</h2>
          <ul className="text-black space-y-4 list-disc list-inside">
            <li>Track your daily water intake effortlessly</li>
            <li>Customize bottle sizes and hydration goals</li>
            <li>Interactive reminders to keep you on track</li>
            <li>Visual progress charts to see your improvement</li>
            <li>Friendly, motivational notifications</li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="max-w-3xl w-full text-center bg-white p-8 rounded-2xl shadow-md reveal">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8">How It Works</h2>
          <p className="text-black mb-6">
            1. Select your bottle size and set your daily goal. <br />
            2. Log your water intake each time you drink. <br />
            3. Receive reminders to help you stay consistent. <br />
            4. Watch your hydration progress with easy-to-read charts.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="max-w-3xl w-full text-center bg-white p-8 rounded-2xl shadow-md reveal">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8">Our Mission</h2>
          <p className="text-black">
            At AquaCal, we believe that staying hydrated is key to a healthier, happier life. 
            Our mission is to make hydration tracking accessible, fun, and a daily habit for everyone.
          </p>
        </section>

        <TestimonialsCarousel />
      </main>

      <Footer />
    </div>
  );
}
