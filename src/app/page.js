'use client'

import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const STRIPE_CHECKOUT = 'https://buy.stripe.com/eVq4gy0Iq0nV7Yq0dq2Ry01'

export default function Home() {
  const [activeTab, setActiveTab] = useState('restaurant')
  const [preorderOpen, setPreorderOpen] = useState(false)

  const openPreorder = () => setPreorderOpen(true)

  return (
    <>
      <Nav onPreorder={openPreorder} />
      <main>
        <Hero onPreorder={openPreorder} />
        <PlatformFeatures />
        <IndustryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'restaurant' && <RestaurantUseCases />}
        {activeTab === 'retail' && <RetailUseCases />}
        {activeTab === 'warehouse' && <WarehouseUseCases />}
        <HowItWorks />
        <Pricing onPreorder={openPreorder} />
        <CTABanner onPreorder={openPreorder} />
      </main>
      <Footer />
      {preorderOpen && <PreorderModal onClose={() => setPreorderOpen(false)} />}
    </>
  )
}

/* ── Hero ── */
function Hero({ onPreorder }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/6 rounded-full blur-[100px] animate-float-delayed" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-sm text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Now in beta — early access pricing available
          </span>
        </div>

        <h1 className="animate-fade-in animate-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          Your cameras record everything.{' '}
          <span className="text-gradient">Finally make sense of it all.</span>
        </h1>

        <p className="animate-fade-in animate-delay-2 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 text-balance">
          Seltrix watches your security footage so you don&apos;t have to. Search any moment in seconds. 
          Get alerted when something matters. All local. No cloud. No subscription.
        </p>

        <p className="animate-fade-in animate-delay-2 text-base text-zinc-500 max-w-xl mx-auto mb-10">
          For restaurants, retail stores, and warehouses — any business that needs to know what 
          really happened while they weren&apos;t looking.
        </p>

        <div className="animate-fade-in animate-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button type="button" onClick={onPreorder}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-zinc-200 transition-all shadow-lg shadow-white/5">
            Get Early Access
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a href="#platform"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-zinc-300 font-medium hover:border-white/20 hover:text-white transition-all">
            See how it works
          </a>
        </div>

        <p className="animate-fade-in animate-delay-4 mt-6 text-sm text-zinc-500">
          $799 Starter Kit
        </p>
      </div>
    </section>
  )
}

/* ── Platform Features ── */
function PlatformFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Search Everything',
      desc: 'Ask questions in plain English. &quot;Show me who was at the register at 3pm.&quot; Get the exact clip in seconds. No more scrubbing through hours of footage.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Track What Matters',
      desc: 'Define events you care about — cash payments, deliveries, after-hours access. Seltrix watches for them and keeps a searchable record.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Get Alerts That Matter',
      desc: 'Register unattended? Back door opened at 2am? Suspicious void at the counter? Know immediately — not tomorrow, not next week.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '100% Local. No Cloud.',
      desc: 'Everything runs on the Seltrix Hub in your store. Your footage never leaves. No monthly fees for search. Just hardware you own.',
    },
  ]

  return (
    <section id="platform" className="border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-sm tracking-wide uppercase mb-4">Platform</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            Your cameras. Supercharged.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Seltrix connects to your existing camera system and adds a layer of AI intelligence.
            Works with most ONVIF-compatible IP cameras. 5-minute setup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Industry Tabs ── */
function IndustryTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'restaurant', label: 'Restaurants', desc: 'Cash visibility, delivery tracking, void detection' },
    { id: 'retail', label: 'Retail', desc: 'Register monitoring, theft detection, foot traffic' },
    { id: 'warehouse', label: 'Warehouse', desc: 'Loading dock, inventory tracking, after-hours' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-8">
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold text-sm tracking-wide uppercase mb-4">Solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
          Built for how you actually run your business
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Different industries have different pain points. Seltrix adapts to yours.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 rounded-xl border text-left transition-all min-w-[200px] ${
              activeTab === tab.id
                ? 'border-blue-500/40 bg-blue-500/[0.06] text-white'
                : 'border-white/[0.06] bg-white/[0.01] text-zinc-400 hover:border-white/[0.12] hover:text-zinc-200'
            }`}
          >
            <div className="font-semibold text-base mb-0.5">{tab.label}</div>
            <div className="text-xs text-zinc-500">{tab.desc}</div>
          </button>
        ))}
      </div>
    </section>
  )
}

/* ── Use Case Card ── */
function UseCaseCard({ index, tag, tagColor, title, subtitle, bullets }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center py-16 border-b border-white/[0.04] last:border-0">
      {/* Text side */}
      <div className={index % 2 === 0 ? '' : 'md:order-2'}>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tagColor}`}>
          {tag}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-6">
          {subtitle}
        </p>
        <ul className="space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
              <svg className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div className={index % 2 === 0 ? '' : 'md:order-1'}>
        <div className="rounded-2xl bg-[#0c0c10] border border-white/[0.06] overflow-hidden shadow-2xl shadow-black/30">
          <ScreenMockup index={index} />
        </div>
        <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl -z-10" />
      </div>
    </div>
  )
}

/* ── Screen Mockups (simplified CSS representations) ── */
function ScreenMockup({ index }) {
  const images = [
    '/images/cash-visibility.png',
    '/images/delivery-tracking.png',
    '/images/smart-search.png',
    '/images/void-detection.png',
  ]

  const labels = [
    'Complete Cash Visibility — Seltrix Dashboard',
    'Delivery Tracking — Pickup Verification',
    'Smart Search — AI Video Search Results',
    'Void Detection — Suspicious Transaction Alert',
  ]

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
      <img
        src={images[index]}
        alt={labels[index]}
        className="w-full h-auto"
      />
    </div>
  )
}

/* ── Restaurant Use Cases ── */
function RestaurantUseCases() {
  const cases = [
    {
      tag: 'Cash Visibility',
      tagColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
      title: 'Complete Cash Visibility',
      subtitle: 'Not every transaction lives in your POS. Seltrix connects your cameras with POS data to make every cash payment searchable, traceable, and backed by video evidence.',
      bullets: [
        'Detect cash payments with no matching POS record — the #1 theft method in restaurants',
        'Search by amount, table, time, or event type in seconds',
        'Every flagged transaction includes a timestamped video clip for proof',
        'Get alerted when a server accepts cash without printing a receipt',
      ],
    },
    {
      tag: 'Delivery Tracking',
      tagColor: 'bg-green-500/20 text-green-400 border border-green-500/30',
      title: 'Prevent Delivery Mix-Ups. Resolve Disputes Fast.',
      subtitle: 'Keep a clear video record of every pickup — so when there is a mistake, you have the evidence to find the truth, not point fingers.',
      bullets: [
        'Track every delivery pickup: which driver, which order, what time',
        'Search by order ID, driver, platform (DoorDash, UberEats, Grubhub)',
        'Full event timeline: order placed on shelf → driver picks up → driver leaves',
        'Beat chargebacks with clear video evidence of correct handoff',
      ],
    },
    {
      tag: 'Smart Search',
      tagColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      title: 'Search Smart. Find Anything in Seconds.',
      subtitle: 'Seltrix automatically understands what happens in your videos, organizes every event, and makes it instantly searchable.',
      bullets: [
        'Ask in plain English: "Show me the person in the red hoodie who came in after 2am"',
        'AI automatically tags objects, people, and actions in every frame',
        'Search across all cameras simultaneously — front counter, back door, dining room',
        'Smart tags (After Hours, Cash Drawer Opened, High Risk) make browsing effortless',
      ],
    },
    {
      tag: 'Void Detection',
      tagColor: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
      title: 'Find Suspicious Voids with Visual Proof',
      subtitle: 'Seltrix automatically detects voided transactions with no valid reason and shows you exactly what happened.',
      bullets: [
        'Cross-references POS void records with camera footage to flag anomalies',
        'Checks for missing reasons, missing returned items, and unusual timing',
        'Risk scoring (0-100) helps you prioritize which events to review first',
        'Full video timeline: Order Completed → Cash Drawer Opened → Order Voided → No Items Returned',
      ],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      {cases.map((c, i) => (
        <UseCaseCard key={i} index={i} {...c} />
      ))}
    </section>
  )
}

/* ── Retail Use Cases ── */
function RetailUseCases() {
  const cases = [
    {
      tag: 'Register Monitoring',
      tagColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
      title: 'Stop Register Theft Before Inventory Day',
      subtitle: 'One retailer found 27 employees sweethearting — and spent weeks reviewing footage manually. Seltrix catches it in real time.',
      bullets: [
        'Flag cash drawer opens with no sale recorded — the #1 retail theft method',
        'Detect sweethearting: employees giving unauthorized discounts to friends',
        'Cross-reference POS void records with camera footage automatically',
        'Real Reddit: "I had to look through so much video it wasn\'t even funny" after finding 32 people involved',
      ],
    },
    {
      tag: 'Employee Monitoring',
      tagColor: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
      title: 'Know What Happens When You\'re Not There',
      subtitle: 'Multi-location owners can\'t be everywhere. Seltrix watches so you don\'t have to rely on trust alone.',
      bullets: [
        'Alert when employees leave without clocking out, take extended breaks, or bring bags into storage',
        'Detect phone use during customer-facing hours — the #1 multi-location owner complaint',
        'Track broken/damaged product incidents with automatic video logging for inventory accuracy',
        'Real Reddit: "I rely heavily on staff and cameras to monitor what\'s going on" — liquor store owner with 3 locations',
      ],
    },
    {
      tag: 'Shoplifting Detection',
      tagColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
      title: 'Active Shoplifting Prevention, Not Passive Recording',
      subtitle: 'Your 4K cameras record everything but alert you to nothing. Seltrix turns them into an active defense system.',
      bullets: [
        'Get instant alerts when known shoplifters re-enter your store',
        'Track high-value items and get notified when they disappear from view',
        'AI watches for concealment behavior — bagging items, fitting room anomalies',
        'Real Reddit: "I\'m looking for a more active solution rather than passively staring at a screen all day"',
      ],
    },
    {
      tag: 'Foot Traffic Analytics',
      tagColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      title: 'Turn Cameras Into a Revenue Tool',
      subtitle: 'Your cameras already watch every customer. Seltrix tells you what they actually do.',
      bullets: [
        'Count foot traffic by hour, day, and store zone — no additional sensors needed',
        'Measure window-to-register conversion: who walks in vs. who buys',
        'Compare staffed vs. unstaffed hours to optimize scheduling',
        'Track promotion impact: did that window display actually increase sales?',
      ],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      {cases.map((c, i) => (
        <UseCaseCard key={i} index={i} {...c} />
      ))}
    </section>
  )
}

/* ── Warehouse Use Cases ── */
function WarehouseUseCases() {
  const cases = [
    {
      tag: 'Loading Dock',
      tagColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      title: 'Track Every Shipment. Prove Every Load.',
      subtitle: 'Logistics pros are mounting cameras to look INTO trailers during loading. Seltrix gives you the searchable record without the custom hardware.',
      bullets: [
        'Auto-detect truck arrivals and departures with timestamps and visual confirmation',
        'Search by carrier, dock door, time range, or PO number in seconds',
        'Resolve shipping disputes instantly: "Show me the ACER container being loaded Tuesday at 3pm"',
        'Real Reddit: IT security firm asked for "a rubber arm camera to look into the trailer as it is loaded" — this need is real',
      ],
    },
    {
      tag: 'After Hours',
      tagColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
      title: 'Secure Every Square Foot After Closing',
      subtitle: 'After-hours access is the #1 security concern for warehouses. Most break-ins are inside jobs, and most go undetected for days.',
      bullets: [
        'Instant alert when anyone enters after scheduled hours — with video clip attached',
        'Track movement through restricted zones with full timeline playback',
        'Differentiate authorized personnel (cleaners, security) from unknown intruders',
        'Automatic daily after-hours activity report for multi-site operations managers',
      ],
    },
    {
      tag: 'Inventory Protection',
      tagColor: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
      title: 'Close the Gap Between Inventory System and Reality',
      subtitle: 'Your WMS says 500 units. Physical count says 480. Seltrix shows you exactly when and where the 20 disappeared.',
      bullets: [
        'Cross-reference WMS/ERP timestamps with camera footage for receiving verification',
        'Flag unusual activity: after-hours pallet movement, unauthorized forklift use, stockroom loitering',
        'Create custom alert zones for high-value inventory areas',
        'Export timestamped video evidence for insurance claims and supplier disputes',
      ],
    },
    {
      tag: 'Safety & Compliance',
      tagColor: 'bg-green-500/20 text-green-400 border border-green-500/30',
      title: 'Safety That Doesn\'t Wait for an Accident Report',
      subtitle: 'Forklift accidents cause 85 deaths and 35,000 serious injuries per year. Your cameras can prevent the next one.',
      bullets: [
        'Flag forklift-pedestrian proximity events before they become accidents',
        'Detect blocked emergency exits, spills, unsafe stacking, and missing PPE',
        'Automatic incident timeline for OSHA reporting and insurance claims',
        'Verify safety protocol compliance across all shifts — not just when the safety manager is watching',
      ],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      {cases.map((c, i) => (
        <UseCaseCard key={i} index={i} {...c} />
      ))}
    </section>
  )
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Connect the Hub',
      desc: 'Plug the Seltrix Hub into your network. It auto-discovers your ONVIF cameras. 5 minutes, no IT person needed.',
    },
    {
      step: '02',
      title: 'AI Watches Everything',
      desc: 'The Hub processes all your footage locally. It detects people, objects, and events — building a searchable index.',
    },
    {
      step: '03',
      title: 'Ask Anything',
      desc: 'Open the app. Ask a question. Get results in seconds. Set up alerts for events you care about.',
    },
  ]

  return (
    <section id="how-it-works" className="border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Three steps to turn your cameras into an AI operations center
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40" />

          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="relative mx-auto w-24 h-24 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6">
                <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-blue-500/20">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Pricing ── */
function Pricing({ onPreorder }) {
  return (
    <section id="pricing" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <p className="text-blue-400 font-semibold text-sm tracking-wide uppercase mb-4">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
          One price. No surprises. No subscriptions.
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Buy the hardware once. AI search is free forever. Premium analytics are optional.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-10 relative">
          <p className="text-zinc-500 text-sm mb-3">Starter Kit</p>
          <div className="text-5xl font-bold mb-2">$799</div>
          <p className="text-zinc-500 text-sm mb-8">4 cameras + AI Hub · One-time purchase</p>
          <ul className="space-y-3 mb-10">
            {['4 wireless indoor cameras', 'AI Hub with local processing', 'AI Search — free forever', '256GB local storage', 'iOS + Android app'].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <svg className="w-4 h-4 mt-0.5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <button type="button" onClick={onPreorder}
            className="block text-center w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
            Pre-order Starter Kit
          </button>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 relative glow-border">
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/20">
            Optional
          </div>
          <p className="text-zinc-500 text-sm mb-3">Premium BI</p>
          <div className="text-5xl font-bold mb-2">
            $50<span className="text-xl text-zinc-500 font-normal">/mo</span>
          </div>
          <p className="text-zinc-500 text-sm mb-8">Per location</p>
          <ul className="space-y-3 mb-10">
            {['AI event detection & alerts', 'Cash + POS cross-referencing', 'Daily AI report (email)', 'Multi-location dashboard', '30-day video history search'].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <svg className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <button type="button" onClick={onPreorder}
            className="block text-center w-full py-3 rounded-xl border border-purple-500/30 text-purple-300 font-semibold hover:border-purple-400/50 hover:text-purple-200 transition-all">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTABanner({ onPreorder }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-blue-800/20" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            Stop watching footage. Start asking questions.
          </h2>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
            Join 200+ business owners on the waitlist. Early access pricing is available for the $799 Starter Kit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button type="button" onClick={onPreorder}
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-zinc-200 transition-all shadow-xl shadow-white/5">
              Pre-order Starter Kit
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            $799 Starter Kit
          </p>
        </div>
      </div>
    </section>
  )
}

function PreorderModal({ onClose }) {
  const [formData, setFormData] = useState({
    industry: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    zipcode: '',
    address: '',
    installationService: '',
  })

  const updateField = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sessionStorage.setItem('seltrix-preorder', JSON.stringify(formData))
    window.location.assign(STRIPE_CHECKOUT)
  }

  const keepFormOpen = (event) => {
    if (event.target !== event.currentTarget) return
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div className="fixed inset-0 z-[100] isolate flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="preorder-title" onClick={keepFormOpen} onPointerDown={keepFormOpen}>
      <button type="button" tabIndex={-1} className="absolute inset-0 h-full w-full cursor-default bg-black/75 backdrop-blur-sm" onClick={keepFormOpen} onPointerDown={keepFormOpen} aria-label="Pre-order form background" />
      <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111114] p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={onClose} className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white" aria-label="Go back">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>

        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-400">$799 Starter Kit</p>
        <h2 id="preorder-title" className="mb-2 text-3xl font-bold tracking-tight">Pre-order Seltrix</h2>
        <p className="mb-7 text-sm leading-6 text-zinc-400">Tell us about your location and installation preference, then continue to Stripe for secure payment.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="industry" className="mb-2 block text-sm font-medium text-zinc-200">Industry</label>
            <select id="industry" value={formData.industry} onChange={updateField('industry')} required className="w-full rounded-xl border border-white/10 bg-[#08080a] px-4 py-3.5 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
              <option value="" disabled>Select your industry</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Retail">Retail</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-zinc-200">Contact name</label>
              <input id="contact-name" value={formData.contactName} onChange={updateField('contactName')} required autoComplete="name" placeholder="Full name" className="w-full rounded-xl border border-white/10 bg-[#08080a] px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-zinc-200">Contact phone</label>
              <input id="contact-phone" type="tel" value={formData.contactPhone} onChange={updateField('contactPhone')} required autoComplete="tel" placeholder="(513) 555-0123" className="w-full rounded-xl border border-white/10 bg-[#08080a] px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-zinc-200">Contact email</label>
              <input id="contact-email" type="email" value={formData.contactEmail} onChange={updateField('contactEmail')} required autoComplete="email" placeholder="you@business.com" className="w-full rounded-xl border border-white/10 bg-[#08080a] px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label htmlFor="installation-zipcode" className="mb-2 block text-sm font-medium text-zinc-200">Installation ZIP code</label>
              <input id="installation-zipcode" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" value={formData.zipcode} onChange={updateField('zipcode')} required autoComplete="postal-code" placeholder="45202" className="w-full rounded-xl border border-white/10 bg-[#08080a] px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>

          <div>
            <label htmlFor="installation-address" className="mb-2 block text-sm font-medium text-zinc-200">Address <span className="font-normal text-zinc-500">(optional)</span></label>
            <textarea id="installation-address" value={formData.address} onChange={updateField('address')} rows={2} autoComplete="street-address" placeholder="Street address, city, and state" className="w-full resize-none rounded-xl border border-white/10 bg-[#08080a] px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
          </div>

          <fieldset>
            <legend className="mb-3 block text-sm font-medium text-zinc-200">Installation service</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className={`cursor-pointer rounded-xl border p-4 transition ${formData.installationService === 'Self Install' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-[#08080a] hover:border-white/20'}`}>
                <input type="radio" name="installation-service" value="Self Install" checked={formData.installationService === 'Self Install'} onChange={updateField('installationService')} required className="sr-only" />
                <span className="block font-medium text-white">Self Install</span>
                <span className="mt-1 block text-xs leading-5 text-zinc-500">We’ll ship the Starter Kit with setup instructions.</span>
              </label>
              <label className={`cursor-pointer rounded-xl border p-4 transition ${formData.installationService === 'Technician Install — Metro Cincinnati only' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-[#08080a] hover:border-white/20'}`}>
                <input type="radio" name="installation-service" value="Technician Install — Metro Cincinnati only" checked={formData.installationService === 'Technician Install — Metro Cincinnati only'} onChange={updateField('installationService')} required className="sr-only" />
                <span className="block font-medium text-white">Technician Install</span>
                <span className="mt-1 block text-xs leading-5 text-zinc-500">Currently available only in Metro Cincinnati.</span>
              </label>
            </div>
          </fieldset>

          <div className="rounded-xl border border-blue-500/15 bg-blue-500/[0.06] p-4 text-sm leading-6 text-zinc-300">
            After payment, our team will contact you within 24–48 hours to schedule your installation or provide a shipping update.
          </div>

          <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all hover:bg-zinc-200">
            Pay $799 with Stripe
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          <p className="text-center text-xs text-zinc-500">You’ll complete your purchase securely on Stripe.</p>
        </form>
      </div>
    </div>
  )
}
