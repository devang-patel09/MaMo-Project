// import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
      <div className="absolute top-[300px] right-[-100px] w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          AI<span className="text-purple-400">BugTracker</span>
        </h1>

        <div className="hidden md:flex gap-10 text-sm text-gray-300">
          <a href="#">Features</a>
          <a href="#">Docs</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </div>

        <button className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition-all">
          Get Started
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-8">
          🚀 Powered by AI
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight max-w-5xl mx-auto">
          Ship fewer bugs.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Resolve them faster.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          AI-powered issue tracking platform for modern development teams.
          Track bugs, manage sprints, collaborate in real-time, and ship
          better software faster.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            Start Free
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
            Book Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-[40px]" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl">
            
            {/* Fake Navbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="text-sm text-gray-400">
                AI Bug Dashboard
              </div>
            </div>

            {/* Fake Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

              {/* Left */}
              <div className="bg-[#0D1117] rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">
                  Open Issues
                </h3>

                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="font-medium">Login Bug</p>
                    <span className="text-xs text-red-400">High Priority</span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="font-medium">Payment Failure</p>
                    <span className="text-xs text-yellow-400">
                      Medium Priority
                    </span>
                  </div>
                </div>
              </div>

              {/* Center */}
              <div className="bg-[#0D1117] rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">
                  AI Suggestions
                </h3>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    AI detected possible authentication middleware issue in
                    token verification logic.
                  </p>
                </div>

                <div className="mt-4 bg-white/5 p-4 rounded-xl">
                  <p className="text-sm text-gray-400">
                    Suggested Fix:
                  </p>

                  <p className="mt-2 text-sm font-mono text-green-400">
                    Verify JWT before protected route access.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="bg-[#0D1117] rounded-2xl p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">
                  Sprint Progress
                </h3>

                <div className="space-y-5">

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Backend API</span>
                      <span>80%</span>
                    </div>

                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[80%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Frontend UI</span>
                      <span>65%</span>
                    </div>

                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[65%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        
        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
            Features
          </p>

          <h2 className="text-5xl font-bold">
            Built for modern dev teams.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:-translate-y-2 transition-all backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl mb-6">
              🤖
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Bug Explanation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Automatically analyze errors and generate understandable bug
              explanations with smart AI assistance.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:-translate-y-2 transition-all backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Auto Priority
            </h3>

            <p className="text-gray-400 leading-relaxed">
              AI automatically detects bug severity and assigns smart
              priorities based on impact.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:-translate-y-2 transition-all backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl mb-6">
              📊
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Sprint Analytics
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Monitor productivity, issue resolution time, and team sprint
              velocity in real-time.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-16 text-center">
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10" />

          <div className="relative">
            <h2 className="text-5xl font-bold leading-tight">
              Stop chasing bugs.
              <br />
              Start shipping.
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful AI-powered bug tracking platform for developers who
              want faster workflows and better releases.
            </p>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500">
        © 2026 AIBugTracker. Built for developers.
      </footer>
    </div>
  );
}

export default App;