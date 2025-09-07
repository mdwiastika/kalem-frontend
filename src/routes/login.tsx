import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMutation } from '@tanstack/react-query'
import {
  createFileRoute,
  Link,
  redirect,
  useNavigate,
} from '@tanstack/react-router'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const Route = createFileRoute('/login')({
  beforeLoad: async () => {
    const token = localStorage.getItem('token')
    if (token) {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Login failed')
      }
      return response.json()
    },
    onSuccess: (response) => {
      if (response.status === true) {
        localStorage.setItem('token', 'Bearer ' + response.data.token)
        toast.success('Login successful!')
        navigate({ to: '/dashboard' })
      } else {
        toast.error('Login failed: ' + response.message)
      }
    },
    onError: (error) => {
      console.error('Login error:', error)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    loginMutation.mutate({ email, password })
    setIsLoading(false)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-300/25 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md relative z-10">
        <div className="text-center mb-8 sm:mb-10 px-4">
          <div className="flex items-center justify-center mb-4 space-x-2"></div>
        </div>

        {/* Login Card */}
        <Card className="w-full shadow-2xl border-0 bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500"></div>

          <CardHeader className="space-y-1 pb-6 pt-8 px-6 sm:px-8">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-slate-800">
              Sign In
            </CardTitle>
            <CardDescription className="text-center text-slate-600 text-base">
              Enter your credentials to continue your wellness journey
            </CardDescription>
          </CardHeader>

          <div onSubmit={handleSubmit}>
            <CardContent className="space-y-6 px-6 sm:px-8">
              {/* Email Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4 text-secondary-500" />
                  <span>Email Address</span>
                </Label>
                <div className="relative group">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 sm:h-14 bg-white/80 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all duration-300 text-base placeholder-slate-400 shadow-sm hover:shadow-md group-hover:border-purple-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700 flex items-center space-x-2"
                >
                  <Lock className="h-4 w-4 text-secondary-500" />
                  <span>Password</span>
                </Label>
                <div className="relative group">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 sm:h-14 bg-white/80 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all duration-300 text-base placeholder-slate-400 shadow-sm hover:shadow-md pr-12 group-hover:border-purple-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-purple-500 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-purple-200 text-purple-500 focus:ring-2 focus:ring-purple-300 transition-colors duration-200"
                  />
                  <span className="text-slate-600 group-hover:text-slate-700 transition-colors">
                    Remember me
                  </span>
                </label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-6 pt-6 px-6 sm:px-8 pb-8">
              {/* Sign In Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-500 text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign In</span>
                  </div>
                )}
              </Button>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-slate-600 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                <span className="block sm:inline">Don't have an account?</span>{' '}
                <Link
                  to="/register"
                  type="button"
                  className="text-primary-500 hover:text-primary-600 font-semibold transition-colors duration-200 underline decoration-primary-200 hover:decoration-primary-400 underline-offset-2"
                >
                  Sign up here
                </Link>
              </div>

              {/* Motivational Text */}
              <div className="text-center text-xs text-slate-500 mt-4">
                <p className="italic">
                  Take a deep breath. You're in the right place. 🌸
                </p>
              </div>
            </CardFooter>
          </div>
        </Card>

        {/* Bottom decorative text */}
        <div className="text-center mt-8 text-xs text-slate-400">
          <p>Kalem - Your companion for mental wellness</p>
        </div>
      </div>
    </div>
  )
}
