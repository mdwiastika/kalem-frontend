import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Link } from '@tanstack/react-router'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [current, setCurrent] = useState('')

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#fitur', label: 'Fitur' },
    { href: '#testimoni', label: 'Testimoni' },
    { href: '#faq', label: 'FAQ' },
    { href: '#download', label: 'Download' },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setCurrent(hash)
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, easeOut: easeOut },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.3 + i * 0.1 },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 font-family-sans ${
        scrolled
          ? 'bg-neutral-50/70 border-slate-200 shadow-lg'
          : 'bg-neutral-50/60 border-slate-300'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/">
            <motion.div className="flex items-center" variants={logoVariants}>
              {/* img logo kalem */}
              <img
                src="./kalem-logo.svg"
                alt="Kalem Logo"
                className="w-8 h-8 mr-2"
              />
              <div>
                {/* img text kalem */}
                <img
                  src="./kalem-text.svg"
                  alt="Kalem Text Logo"
                  className="h-5"
                />
              </div>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={navItemVariants}
                >
                  <a
                    href={item.href}
                    className={`hover:text-primary-500 font-medium transition-colors duration-300 relative group ${
                      item.href === current
                        ? 'text-primary-500'
                        : 'text-secondary-500'
                    }`}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full"
                      transition={{ duration: 0.3 }}
                      whileHover={{ width: '100%' }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="hidden md:block"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/login"
              download={true}
              className="bg-primary-500 hover:bg-primary-600 text-neutral-50 font-semibold px-6 py-2 rounded-full cursor-pointer inline-block"
            >
              Masuk Akun
            </Link>
          </motion.div>

          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-700"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    className="cursor-pointer"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    className="cursor-pointer"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-2 pt-2 pb-6 space-y-3 bg-neutral-50 border-t border-slate-100">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={mobileNavItemVariants}
                    custom={index}
                  >
                    <a
                      href={item.href}
                      className={`hover:text-primary-500 block px-3 py-2 font-medium ${
                        current === item.href
                          ? 'text-primary-500'
                          : 'text-secondary-500'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileNavItemVariants}
                  custom={navItems.length}
                >
                  <a href="/all-in-one-financial.xlsx" download={true}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        to="/login"
                        className="bg-primary-500 hover:bg-primary-500 text-neutral-100 font-semibold w-full mt-4 cursor-pointer"
                      >
                        Masuk Akun
                      </Link>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
