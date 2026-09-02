export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#08080a]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                S
              </span>
              <span className="text-base font-semibold tracking-tight">Seltrix</span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed">
              AI-powered visual store manager. Your footage never leaves your store.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-zinc-600">About (coming soon)</span></li>
              <li><span className="text-sm text-zinc-600">Blog (coming soon)</span></li>
              <li><a href="https://form.jotform.com/262158097289167" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-zinc-600">Privacy Policy</span></li>
              <li><span className="text-sm text-zinc-600">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Seltrix. All rights reserved.</p>
          <p className="text-xs text-zinc-600">
            AI runs locally. Your footage never leaves your store.
          </p>
        </div>
      </div>
    </footer>
  )
}