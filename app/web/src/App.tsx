function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            Kol Torah
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Welcome to the Kol Torah web application
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <div className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
