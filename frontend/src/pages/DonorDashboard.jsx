
import { Link } from 'react-router-dom'
import {
  Leaf, LayoutDashboard, Package, Plus,
  Clock, CheckCircle2, Heart, TrendingUp,
  MapPin, ArrowUpRight, Bell, Settings,
  Utensils, Truck, Users
} from 'lucide-react'

function DonorDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f7f4] md:flex">

      {/* Sidebar */}
      <aside className="bg-[#123d2b] text-white md:w-64 p-6 flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <Leaf size={29} />
          <span className="text-2xl font-bold">FeedOne</span>
        </Link>

        <p className="text-xs text-green-200 uppercase tracking-widest mb-4">
          Workspace
        </p>

        <nav className="space-y-2">
          <div className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
            <LayoutDashboard size={19} />
            <span className="font-medium">Overview</span>
          </div>

          <div className="flex items-center gap-3 text-green-100 hover:bg-white/10 rounded-xl px-4 py-3">
            <Package size={19} />
            My Donations
          </div>

          <div className="flex items-center gap-3 text-green-100 hover:bg-white/10 rounded-xl px-4 py-3">
            <Truck size={19} />
            Pickups
          </div>

          <div className="flex items-center gap-3 text-green-100 hover:bg-white/10 rounded-xl px-4 py-3">
            <Heart size={19} />
            Impact
          </div>
        </nav>

        <div className="mt-auto pt-12 space-y-3">
          <div className="flex items-center gap-3 text-green-100 px-3 py-2">
            <Settings size={18} />
            Settings
          </div>
          <div className="border-t border-white/20 pt-5 flex items-center gap-3">
            <div className="bg-green-200 text-green-900 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              D
            </div>
            <div>
              <p className="font-semibold text-sm">Food Donor</p>
              <p className="text-xs text-green-200">Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-5 md:p-9 max-w-7xl">

        {/* Top bar */}
        <header className="flex justify-between items-center mb-9">
          <div>
            <p className="text-sm text-slate-500">Workspace / Overview</p>
            <h1 className="text-3xl font-bold text-slate-900 mt-1">
              Dashboard
            </h1>
          </div>

          <button className="bg-white border border-slate-200 p-3 rounded-xl">
            <Bell size={20} className="text-slate-600" />
          </button>
        </header>

        {/* Welcome banner */}
        <section className="bg-[#174b34] text-white rounded-3xl p-7 md:p-9 mb-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <p className="text-green-200 font-medium mb-3">
              YOUR FOOD RESCUE JOURNEY
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Every meal saved makes a difference.
            </h2>
            <p className="text-green-100 mt-3">
              List your surplus food and connect with verified NGOs
              to get it to people who need it.
            </p>

            <button className="mt-6 bg-white text-green-900 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-50">
              <Plus size={19} />
              Create a donation
            </button>
          </div>

          <Leaf
            size={190}
            className="absolute -right-5 -bottom-10 text-white/10"
          />
        </section>

        {/* Statistics */}
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {[
            {
              label: 'Total donations',
              value: '0',
              icon: Package,
              note: 'All time'
            },
            {
              label: 'Food rescued',
              value: '0 kg',
              icon: Utensils,
              note: 'Food saved'
            },
            {
              label: 'Successful pickups',
              value: '0',
              icon: CheckCircle2,
              note: 'Completed'
            },
            {
              label: 'People supported',
              value: '0',
              icon: Users,
              note: 'Estimated reach'
            }
          ].map((item) => (
            <div key={item.label} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500">{item.label}</p>
                <item.icon size={21} className="text-green-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mt-4">
                {item.value}
              </h3>
              <p className="text-xs text-slate-400 mt-2">{item.note}</p>
            </div>
          ))}
        </section>

        {/* Donations and side panel */}
        <section className="grid xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Recent donations
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Track your food listings
                </p>
              </div>
              <button className="text-green-700 font-semibold text-sm">
                View all
              </button>
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-2xl py-12 text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Package size={29} className="text-green-700" />
              </div>
              <h4 className="font-semibold text-slate-800 mt-4">
                No donations yet
              </h4>
              <p className="text-sm text-slate-500 mt-2">
                Your first donation will appear here.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900">
                Your impact
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Your contribution so far
              </p>

              <div className="bg-green-50 rounded-xl p-5 mt-5">
                <Heart className="text-green-700" size={25} />
                <h3 className="text-2xl font-bold text-green-900 mt-3">
                  Be the first!
                </h3>
                <p className="text-sm text-green-800 mt-1">
                  Start rescuing food and build your impact.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900">
                Quick guide
              </h3>
              <div className="space-y-4 mt-5">
                <div className="flex gap-3">
                  <Package className="text-green-700 shrink-0" size={20} />
                  <p className="text-sm text-slate-600">
                    List your surplus food with quantity and expiry details.
                  </p>
                </div>
                <div className="flex gap-3">
                  <MapPin className="text-green-700 shrink-0" size={20} />
                  <p className="text-sm text-slate-600">
                    Connect with a verified NGO nearby.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Truck className="text-green-700 shrink-0" size={20} />
                  <p className="text-sm text-slate-600">
                    Coordinate pickup and track delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs text-slate-400 mt-10">
          FeedOne · Rescue food. Share hope.
        </footer>
      </main>
    </div>
  )
}

export default DonorDashboard
