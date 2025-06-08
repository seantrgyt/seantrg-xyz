export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Your Vercel Project</h1>
          <p className="text-lg text-gray-600">This is a starter template ready for deployment</p>
        </header>

        <section className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                • Edit this page in <code className="bg-gray-200 px-2 py-1 rounded">app/page.tsx</code>
              </li>
              <li>
                • Add new pages by creating files in the <code className="bg-gray-200 px-2 py-1 rounded">app</code>{" "}
                directory
              </li>
              <li>• Deploy to Vercel with one click</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Next.js</h3>
              <p className="text-blue-700 text-sm">Built with Next.js 15 and App Router for optimal performance</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Tailwind CSS</h3>
              <p className="text-green-700 text-sm">Styled with Tailwind CSS for rapid development</p>
            </div>
          </div>
        </section>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Ready to deploy on{" "}
            <a
              href="https://vercel.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
