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
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const Route = createFileRoute('/register')({
  beforeLoad: async () => {
    const token = localStorage.getItem('token')
    if (token) {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: RouteComponent,
})

// Interface untuk error validation
interface ValidationErrors {
  [key: string]: string[]
}

interface ErrorResponse {
  status: boolean
  message: string
  errors?: ValidationErrors
}

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(
    false,
  )
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({}) // State untuk menyimpan validation errors
  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const registerMutation = useMutation({
    mutationFn: async (data: {
      username: string
      email: string
      password: string
      password_confirmation: string
    }) => {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData: ErrorResponse = await response.json()

      if (!response.ok) {
        // Jika status code 422 (Validation Error)
        if (response.status === 422) {
          throw { status: 422, data: responseData }
        }
        throw new Error('Register failed')
      }
      return responseData
    },
    onSuccess: (response) => {
      if (response.status === true) {
        setErrors({}) // Clear errors jika berhasil
        toast.success('Register successful! Please login.')
        navigate({ to: '/login' })
      } else {
        toast.error('Register failed: ' + response.message)
      }
    },
    onError: (error: any) => {
      setIsLoading(false)
      if (error.status === 422 && error.data.errors) {
        setErrors(error.data.errors)
        toast.error(error.data.message || 'Validation failed')
      } else {
        setErrors({})
        toast.error('Registration failed. Please try again.')
      }
      console.log(error)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Clear previous errors
    setErrors({})

    if (password !== passwordConfirmation) {
      toast.error("Passwords don't match!")
      return
    }

    setIsLoading(true)
    registerMutation.mutate({
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
  }

  // Helper function untuk mendapatkan class error
  const getInputErrorClass = (fieldName: string) => {
    return errors[fieldName]
      ? 'h-12 sm:h-14 bg-white/80 border-2 border-red-400 rounded-xl focus:border-red-500'
      : 'h-12 sm:h-14 bg-white/80 border-2 border-purple-100 rounded-xl'
  }

  // Helper function untuk render error message
  const renderErrorMessage = (fieldName: string) => {
    if (errors[fieldName] && errors[fieldName].length > 0) {
      return (
        <div className="text-red-500 text-sm mt-1">
          {errors[fieldName].map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-300/25 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <Card className="w-full shadow-2xl border-0 bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500"></div>

          <CardHeader className="space-y-1 pb-6 pt-8 px-6 sm:px-8">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-slate-800">
              Register
            </CardTitle>
            <CardDescription className="text-center text-slate-600 text-base">
              Create an account to start your journey
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 px-6 sm:px-8">
              {/* Username */}
              <div className="space-y-3">
                <Label
                  htmlFor="username"
                  className="text-sm font-semibold text-slate-700 flex items-center space-x-2"
                >
                  <User className="h-4 w-4 text-secondary-500" />
                  <span>Username</span>
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={getInputErrorClass('username')}
                />
                {renderErrorMessage('username')}
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4 text-secondary-500" />
                  <span>Email Address</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={getInputErrorClass('email')}
                />
                {renderErrorMessage('email')}
              </div>

              {/* Password */}
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
                    required
                    className={`${getInputErrorClass('password')} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {renderErrorMessage('password')}
              </div>

              {/* Password Confirmation */}
              <div className="space-y-3">
                <Label
                  htmlFor="password_confirmation"
                  className="text-sm font-semibold text-slate-700 flex items-center space-x-2"
                >
                  <Lock className="h-4 w-4 text-secondary-500" />
                  <span>Confirm Password</span>
                </Label>
                <div className="relative group">
                  <Input
                    id="password_confirmation"
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                    className={getInputErrorClass('password_confirmation')}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPasswordConfirmation(!showPasswordConfirmation)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPasswordConfirmation ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {renderErrorMessage('password_confirmation')}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-6 pt-6 px-6 sm:px-8 pb-8">
              <Button
                type="submit"
                className="w-full h-12 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </Button>

              <div className="text-center text-sm text-slate-600 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                <span className="block sm:inline">
                  Already have an account?
                </span>{' '}
                <Link
                  to="/login"
                  className="text-primary-500 hover:text-primary-600 font-semibold underline"
                >
                  Sign in here
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
