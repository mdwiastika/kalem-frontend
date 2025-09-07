import { useEffect, useState } from 'react'

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-lg animate-bounce"
        style={{ animationDuration: '3s' }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-pink-300/15 to-purple-300/15 rounded-full blur-md animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-bounce"
        style={{ animationDuration: '4s', animationDelay: '2s' }}
      ></div>

      {/* Floating Hearts */}
      <div className="absolute top-1/3 left-1/4 text-pink-200/30 animate-float">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className="absolute top-2/3 right-1/3 text-purple-200/30 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
