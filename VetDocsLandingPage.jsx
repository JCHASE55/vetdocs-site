export default function VetDocsLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto grid gap-6">
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img
            src="/vetdocs-hero.jpg"
            alt="German Shepherd and American Flag"
            className="w-full object-cover h-72 md:h-96"
          />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-xl shadow">
            <h1 className="text-2xl md:text-4xl font-bold">VetDocs</h1>
            <p className="text-sm md:text-base">Veteran-Owned Resume & Document Writing Services</p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            At VetDocs, we help veterans and professionals craft clear, powerful resumes and documents to land jobs, benefits, and educational opportunities. Founded by a retired Army veteran, we understand your language — and how to translate it for civilian success.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow">
          <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Professional Resume Writing</li>
            <li>Cover Letters & LinkedIn Profiles</li>
            <li>Military-to-Civilian Translation</li>
            <li>Document Formatting & Proofreading</li>
          </ul>
        </div>
        <div className="text-center">
          <a
            href="mailto:support@vetdocs4u.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <p className="text-sm mt-2 text-gray-600">Or email us directly: support@vetdocs4u.com</p>
        </div>
      </div>
    </div>
  );
}