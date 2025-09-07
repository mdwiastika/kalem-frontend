'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Apakah aplikasi Kalem gratis?',
    answer:
      'Ya! Kalem menyediakan fitur dasar secara gratis termasuk journaling, beberapa sesi meditasi, dan akses ke komunitas. Untuk fitur premium seperti meditasi unlimited dan AI assistant personal, tersedia paket berlangganan dengan harga terjangkau.',
  },
  {
    question: 'Apakah data saya aman di aplikasi Kalem?',
    answer:
      'Keamanan dan privasi adalah prioritas utama kami. Semua data Anda dienkripsi end-to-end dan disimpan dengan standar keamanan tinggi. Kami tidak akan pernah membagikan informasi personal Anda kepada pihak ketiga tanpa persetujuan eksplisit.',
  },
  {
    question: 'Bisakah saya menggunakan Kalem tanpa koneksi internet?',
    answer:
      'Sebagian besar fitur Kalem dapat digunakan offline, termasuk journaling, meditasi yang sudah didownload, dan teknik relaksasi. Namun, fitur komunitas dan sinkronisasi data memerlukan koneksi internet.',
  },
  {
    question: 'Apakah Kalem bisa menggantikan terapi profesional?',
    answer:
      'Kalem adalah tools pendukung untuk kesehatan mental dan tidak dimaksudkan untuk menggantikan terapi profesional. Jika Anda mengalami kondisi mental yang serius, kami sangat menyarankan untuk berkonsultasi dengan psikolog atau psikiater berlisensi.',
  },
  {
    question: 'Bagaimana cara kerja fitur AI Assistant?',
    answer:
      'AI Assistant kami menganalisis pola mood dan aktivitas Anda untuk memberikan rekomendasi personal. Misalnya, jika Anda merasa cemas, AI akan menyarankan teknik pernapasan atau sesi meditasi yang sesuai. Semua analisis dilakukan dengan menjaga privasi data Anda.',
  },
  {
    question: 'Apakah ada batasan usia untuk menggunakan Kalem?',
    answer:
      'Kalem dirancang untuk pengguna berusia 13 tahun ke atas. Untuk pengguna di bawah 18 tahun, kami menyarankan penggunaan dengan pengawasan orang tua atau wali.',
  },
  {
    question: 'Bagaimana cara membatalkan langganan premium?',
    answer:
      'Anda dapat membatalkan langganan kapan saja melalui pengaturan akun di aplikasi atau melalui App Store/Play Store. Setelah dibatalkan, Anda tetap dapat menggunakan fitur premium hingga periode berlangganan berakhir.',
  },
  {
    question: 'Apakah Kalem tersedia dalam bahasa lain selain Indonesia?',
    answer:
      'Saat ini Kalem tersedia dalam Bahasa Indonesia dan Bahasa Inggris. Kami berencana menambahkan lebih banyak bahasa di update mendatang berdasarkan feedback pengguna.',
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    )
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <Card
          key={index}
          className="border-pink-100 hover:border-pink-200 transition-all duration-300 overflow-hidden"
        >
          <CardContent className="p-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-pink-50/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-pink-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-pink-600" />
                )}
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openItems.includes(index)
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
