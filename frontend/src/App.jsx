
import {
  ArrowRight,
  Leaf,
  Utensils,
  Users,
  Truck,
  MapPin,
  Clock,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import DonorDashboard from './pages/DonorDashboard'
function Home() {
  return (
    <div className="min-h-screen bg-[#fafbf8] text-slate-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-green-700 p-2 rounded-xl">
            <Leaf className="text-white" size={22} />
          </div>
          <span className="text-2xl font-bold text-green-800">
            FeedOne
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#how-it-works" className="hover:text-green-700">
            How it works
          </a>
          <a href="#mission" className="hover:text-green-700">
            Our mission
          </a>
          <a href="#impact" className="hover:text-green-700">
            Impact
          </a>
        </div>

           <Link
       to="/register"
       className="bg-green-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-800"
     >
       Get started <ArrowRight className="inline ml-1" size={16} />
     </Link>
      </nav>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        <section>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-7">
            <Leaf size={16} />
            Together for a hunger-free tomorrow
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Good food deserves
            <span className="text-green-700"> a second chance.</span>
          </h1>

          <p className="text-lg text-slate-500 leading-8 mt-6 max-w-lg">
            Connecting surplus food from restaurants, hostels and
            communities with NGOs and people who need it.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#how-it-works"
              className="bg-green-700 text-white px-7 py-4 rounded-xl font-semibold hover:bg-green-800"
            >
              Explore FeedOne <ArrowRight className="inline ml-2" size={18} />
            </a>

            <a
              href="#mission"
              className="border border-slate-300 px-7 py-4 rounded-xl font-semibold hover:bg-white"
            >
              Our mission
            </a>
          </div>

          <div className="flex items-center gap-3 mt-10 text-sm text-slate-500">
            <HeartHandshake className="text-green-700" size={22} />
            <span>Reducing food waste. Strengthening communities.</span>
          </div>
        </section>

        {/* Product visual */}
        
{/* Product visual */}
 <section className="relative transition duration-500 hover:scale-[1.03]">
  <div className="grid grid-cols-2 gap-4">
    <div className="row-span-2 transition duration-500 hover:scale-[1.03]">
      <img
        src="/donor.jpg"
        alt="Food donation volunteer"
        className="w-full h-full min-h-[400px] object-cover rounded-3xl shadow-lg transition duration-500 hover:scale-[1.03]"
      />
    </div>

    <div>
      <img
        src="/ngo.jpg"
        alt="Community food distribution"
        className="w-full h-48 object-cover rounded-3xl shadow-lg transition duration-500 hover:scale-[1.03]"
      />
    </div>

    <div>
      <img
        src="/impact.jpg"
        alt="Community sharing a meal"
        className="w-full h-48 object-cover rounded-3xl shadow-lg transition duration-500 hover:scale-[1.03]"
      />
    </div>
  </div>

  <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg p-4 transition duration-500 hover:scale-[1.03]">
    <p className="text-green-700 font-bold transition duration-500 hover:scale-[1.03]">
      Together, we make a difference.
    </p>
    <p className="text-sm text-slate-500 transition duration-500 hover:scale-[1.03]">
      Rescue food. Share hope.
    </p>
  </div>
</section>

      </main>

      {/* Mission */}
      <section id="mission" className="bg-white py-16 px-8 text-center">
        <p className="text-green-700 font-semibold mb-3">OUR MISSION</p>
        <h2 className="text-3xl font-bold">
          Waste less. Share more. Feed more.
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mt-4 leading-7">
          FeedOne aims to make food redistribution easier by bringing
          donors, verified NGOs and volunteers together on one platform.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-7xl mx-auto py-16 px-8">
        <div className="text-center mb-10">
          <p className="text-green-700 font-semibold mb-2">HOW IT WORKS</p>
          <h2 className="text-3xl font-bold">One platform. Three roles.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Utensils,
              title: "Food donors",
              description:
                "Restaurants, hostels and event organizers list surplus food.",
            },
            {
              icon: Users,
              title: "NGO partners",
              description:
                "Verified NGOs accept donations and coordinate distribution.",
            },
            {
              icon: Truck,
              title: "Volunteers",
              description:
                "Authorized volunteers help collect and deliver food.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-7"
              >
                <div className="bg-green-100 w-fit p-3 rounded-xl mb-5">
                  <Icon className="text-green-700" size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="bg-green-800 text-white py-14 px-8 text-center">
        <h2 className="text-3xl font-bold">Small actions. Greater impact.</h2>
        <p className="text-green-100 mt-3">
          Every successful food rescue can make a difference.
        </p>
        <p className="text-xs text-green-200 mt-5">
          Impact statistics will appear here once real platform data is available.
        </p>
      </section>

      <footer className="text-center text-sm text-slate-500 py-7">
        © 2026 FeedOne. Building a future with less food waste.
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/donor-dashboard" element={<DonorDashboard />} />
    </Routes>
  )
}

export default App
