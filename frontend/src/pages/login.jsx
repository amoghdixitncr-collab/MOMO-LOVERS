
import { Link } from 'react-router-dom'
import { Leaf, Mail, Lock } from 'lucide-react'

function Login() {
  return (
    <div className="min-h-screen bg-[#fafbf8] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <Leaf className="text-green-700" size={28} />
          <span className="text-2xl font-bold text-green-800">
            FeedOne
          </span>
        </Link>

        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-slate-500 mt-2 mb-8">
          Sign in to continue your food rescue journey.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email address
            </label>
            <div className="flex items-center border rounded-xl px-4">
              <Mail className="text-slate-400" size={18} />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-4">
              <Lock className="text-slate-400" size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          New to FeedOne?{' '}
          <Link to="/register" className="text-green-700 font-semibold">
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
