import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <Header />

      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold">Ace Your Next Interview</h1>

          <p className="mt-6 text-xl text-gray-600">
            Personalized MCQs, AI Interviews, Resume Optimization and Analytics.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-violet-600 text-white px-6 py-3 rounded"
            >
              Get Started
            </Link>

            <Link href="/login" className="border px-6 py-3 rounded">
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold">Adaptive MCQs</h3>

            <p className="mt-3">
              Personalized tests based on role, company and skillset.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold">AI Interviewer</h3>

            <p className="mt-3">Practice realistic interviews powered by AI.</p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold">Resume Intelligence</h3>

            <p className="mt-3">Improve ATS compatibility and job relevance.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
