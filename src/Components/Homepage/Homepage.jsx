import { Sparkles, Palette, Layers, Zap, Droplet, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen">

      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 animate-float-slow bg-radial-blue blur-[60px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20 animate-float-slow bg-radial-pink blur-[60px]" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-15 animate-float-slow bg-radial-aqua blur-[60px]" />

        {/* Geometric Shapes */}
        <div className="absolute top-40 left-1/4 w-32 h-32 opacity-5 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] animate-float-slow bg-linear-to-br from-[#59F8E8] to-[#6C4AFF]" />
        <div className="absolute bottom-40 right-1/4 w-24 h-24 opacity-5 rounded-[70%_30%_30%_70%/_60%_60%_40%_40%] animate-float-slow bg-linear-to-br from-[#FF6B9D] to-[#FF9B50]" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full text-sm glass-gradient animate-rainbow-glow">
            Design System v1.0
          </span>
        </div>

        <h1 className="mb-6 max-w-4xl mx-auto text-5xl md:text-6xl font-extrabold">
          <span className="bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            A compact design system
          </span>
          <br />
          <span className="bg-linear-to-br from-teal-400 to-green-400 bg-clip-text text-transparent">
            with big ideas
          </span>
        </h1>

        <p className="mb-12 max-w-2xl mx-auto">
          PulseUI Mini combines Material UI principles with modern glassmorphism effects 
          to create stunning, accessible components for your React applications.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-linear-to-br from-blue-600 to-purple-600 text-white">
            Explore Components
          </button>

          <button className="glass-gradient px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
            View Glassmorphism
          </button>

          <button className="glass-pink px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-pink-600 dark:text-pink-300">
            Brand Guide
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-blue-600">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform bg-linear-to-br from-blue-600 to-purple-600">
            <Layers size={32} className="text-white" />
          </div>
          <h3 className="mb-4 text-blue-600">Hybrid Components</h3>
          <p>
            Classic MUI or modern glass variants, mix & match for unique interfaces.
          </p>
        </div>

        <div className="glass-pink p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-pink-600">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform bg-linear-to-br from-pink-500 to-orange-400">
            <Palette size={32} className="text-white" />
          </div>
          <h3 className="mb-4 text-pink-500">Multi-theme Ready</h3>
          <p>
            Seamless light/dark support with smooth theme transitions.
          </p>
        </div>

        <div className="glass-green p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-green-400">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform bg-linear-to-br from-teal-400 to-green-400">
            <Sparkles size={32} className="text-white" />
          </div>
          <h3 className="mb-4 text-green-400">Glassmorphism Styles</h3>
          <p>
            Frosted glass with neon borders and blur for futuristic look.
          </p>
        </div>
      </section>

      {/* Color Playground Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center mb-12">
          <span className="bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Vibrant Color Palette
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform border border-blue-600">
            <div className="w-full h-24 rounded-xl mb-4 bg-linear-to-br from-blue-600 to-purple-600" />
            <p className="text-blue-600">Electric Blue</p>
            <small>#4A90E2</small>
          </div>
          
          <div className="glass-pink p-6 rounded-2xl hover:scale-105 transition-transform border border-pink-500">
            <div className="w-full h-24 rounded-xl mb-4 bg-linear-to-br from-pink-500 to-orange-400" />
            <p className="text-pink-500">Neon Pink</p>
            <small>#FF6B9D</small>
          </div>
          
          <div className="glass-green p-6 rounded-2xl hover:scale-105 transition-transform border border-green-400">
            <div className="w-full h-24 rounded-xl mb-4 bg-linear-to-br from-teal-400 to-green-400" />
            <p className="text-green-400">Vibrant Green</p>
            <small>#00F5A0</small>
          </div>
          
          <div className="glass-orange p-6 rounded-2xl hover:scale-105 transition-transform border border-orange-400">
            <div className="w-full h-24 rounded-xl mb-4 bg-linear-to-br from-orange-400 to-yellow-400" />
            <p className="text-orange-400">Sunset Orange</p>
            <small>#FF9B50</small>
          </div>
        </div>
      </section>

      {/* Interactive Glass Showcase */}
      <section className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-purple p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300">
            <Zap size={32} className="mb-4 text-purple-600" />
            <h4 className="mb-2 text-purple-600">Purple Glass</h4>
            <p>Royal purple with soft glow</p>
          </div>
          
          <div className="glass-gradient p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 animate-rainbow-glow">
            <Star size={32} className="mb-4 text-pink-500" />
            <h4 className="mb-2">
              <span className="bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Gradient Glass
              </span>
            </h4>
            <p>Multi-color gradient border</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 border border-teal-400">
            <Droplet size={32} className="mb-4 text-teal-400" />
            <h4 className="mb-2 text-teal-400">Aqua Glass</h4>
            <p>Neon aqua with blur effect</p>
          </div>
        </div>
      </section>

      {/* Quick Stats with Gradient */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="glass-gradient rounded-3xl p-12 animate-rainbow-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">30+</h2>
              <p>Components</p>
            </div>
            <div>
              <h2 className="bg-linear-to-br from-teal-400 to-green-400 bg-clip-text text-transparent">7</h2>
              <p>Color Variants</p>
            </div>
            <div>
              <h2 className="text-pink-500">∞</h2>
              <p>Possibilities</p>
            </div>
            <div>
              <h2 className="text-green-400">React</h2>
              <p>Built with</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
