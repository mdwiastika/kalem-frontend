import Navigation from '@/layouts/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Navigation />
      <hr />
      <section
        id="beranda"
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-content min-h-screen font-family-sans"
      >
        <div className="flex justify-center flex-row flex-auto items-center flex-wrap gap-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Selamat Datang di <span className="text-primary-500">Kalem</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Platform manajemen keuangan pribadi yang membantu Anda mengatur
              dan melacak pengeluaran dengan mudah.
            </p>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#fitur">
              <div className="rounded-md shadow">
                <a
                  href="#fitur"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
                >
                  Jelajahi Fitur
                </a>
              </div>
            </a>
            <a href="#beranda">
              <div className="rounded-md shadow">
                <a
                  href="#beranda"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-50"
                >
                  Mulai Sekarang
                </a>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
