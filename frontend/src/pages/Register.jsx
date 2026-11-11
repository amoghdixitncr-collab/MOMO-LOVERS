import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Leaf, User, Mail, Lock } from 'lucide-react'
function Register() {
  const navigate = useNavigate()
  const [role, setRole] = useState('')
  const handleRegister = (e) => {
  e.preventDefault()

  if (!role) {
    alert('Please select your role')
    return
  }

  if (role === 'donor') {
    navigate('/donor-dashboard')
  } else {
    alert(`${role} dashboard is coming soon!`)
  }
}

  return (
    <div className="min-h-screen bg-[#fafbf8] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <Leaf className="text-green-700" size={28} />
          <span className="text-2xl font-bold text-green-800">
            FeedOne
          </span>
        </Link>

        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="text-slate-500 mt-2 mb-8">
          Join us in rescuing surplus food.
        </p>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium mb-2">
              Full name
            </label>
            <div className="flex items-center border rounded-xl px-4">
              <User className="text-slate-400" size={18} />
              <input type="text" placeholder="Your name"
                className="w-full p-3 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email address
            </label>
            <div className="flex items-center border rounded-xl px-4">
              <Mail className="text-slate-400" size={18} />
              <input type="email" placeholder="you@example.com"
                className="w-full p-3 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-4">
              <Lock className="text-slate-400" size={18} />
              <input type="password" placeholder="Create a password"
                className="w-full p-3 outline-none" />
            </div>
            <div>
  <label className="block text-sm font-medium mb-2">
    Register as
  </label>

  <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="w-full border rounded-xl p-3 outline-none bg-white"
  defaultValue=""
  required
>
    <option value="" disabled>Select your role</option>
    <option value="donor">Food Donor</option>
    <option value="ngo">NGO Partner</option>
    <option value="volunteer">Volunteer</option>
  </select>
</div>
          </div>

          <button type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800">
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already registered?{' '}
          <Link to="/login" className="text-green-700 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register