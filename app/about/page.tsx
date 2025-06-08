export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Page</h1>
          <p className="text-lg text-gray-600">This is an example of a second page in your Next.js project</p>
        </header>

        <section className="max-w-2xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              This project demonstrates how easy it is to create multiple pages in a Next.js application. Each file in
              the <code>app</code> directory automatically becomes a route.
            </p>

            <p>
              You can navigate between pages, add components, and build a full web application that's ready for
              production deployment on Vercel.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
