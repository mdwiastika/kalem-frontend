import AnimatedCounter from '@/components/animations/animated-counter'
import FAQSection from '@/components/faq-section'
import GlassCard from '@/components/glass-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Navigation from '@/layouts/navbar'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Download,
  Heart,
  MessageCircle,
  Play,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Waves,
  Zap,
} from 'lucide-react'

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
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-content"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 scroll-animate">
              <div className="space-y-6">
                <Badge className="glass-pink text-pink-700 px-4 py-2 text-sm font-medium animate-fade-up">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Aplikasi #1 untuk Kesehatan Mental Indonesia
                </Badge>

                <h1
                  className="text-responsive-xl font-bold text-gray-900 leading-tight animate-fade-up"
                  style={{ animationDelay: '0.1s' }}
                >
                  Temukan{' '}
                  <span className="text-gradient-animated relative">
                    Ketenangan
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg -z-10"></div>
                  </span>{' '}
                  dalam Setiap Langkah
                </h1>

                <p
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  Kalem hadir sebagai teman setia dalam perjalanan mental health
                  Anda. Dengan teknologi AI terdepan dan pendekatan holistik,
                  kami membantu Anda mengatasi anxiety dan menemukan
                  keseimbangan hidup.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Button
                  size="lg"
                  className="btn-gradient text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Gratis Sekarang
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-pink-300/50 text-pink-600 hover:bg-pink-50/50 px-8 py-4 rounded-2xl group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Lihat Demo
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div
                className="grid grid-cols-3 gap-8 pt-8 animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                {[
                  {
                    value: 50,
                    suffix: 'K+',
                    label: 'Pengguna Aktif',
                    icon: Users,
                  },
                  {
                    value: 4.8,
                    suffix: '/5',
                    label: 'Rating App Store',
                    icon: Star,
                  },
                  {
                    value: 95,
                    suffix: '%',
                    label: 'Merasa Lebih Tenang',
                    icon: Heart,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative z-10 animate-fade-right">
                <div className="relative">
                  <img
                    src="/home-hero2.png"
                    alt="Kalem App Interface"
                    width={500}
                    height={700}
                    className="mx-auto rounded-3xl shadow-3xl hover:shadow-glow-pink transition-all duration-700 hover:scale-105"
                  />
                  {/* Floating UI Elements */}
                  <div className="absolute -top-6 -left-6 glass-pink p-4 rounded-2xl shadow-xl animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Suasana: Tenang
                      </span>
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 glass-pink p-4 rounded-2xl shadow-xl animate-float"
                    style={{ animationDelay: '1s' }}
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">
                        7 hari berturut-turut
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-3xl blur-3xl transform scale-110 -z-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="fitur"
        className="py-32 px-4 sm:px-6 lg:px-8 relative z-content"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-purple-50/50"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-6 mb-20 scroll-animate">
            <Badge className="glass-pink text-purple-700 px-6 py-3 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Fitur Revolusioner
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Teknologi AI untuk{' '}
              <span className="text-gradient-animated">Kesehatan Mental</span>{' '}
              yang Lebih Baik
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Setiap fitur dirancang dengan penelitian psikologi terdepan dan
              teknologi AI untuk memberikan pengalaman yang personal dan efektif
              dalam perjalanan healing Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Smart Journaling',
                description:
                  'AI menganalisis tulisan Anda dan memberikan insight mendalam tentang pola emosi dan pemicu anxiety.',
                features: [
                  'AI Mood Analysis',
                  'Smart Prompts',
                  'Progress Tracking',
                  'Privacy Terjamin',
                ],
                gradient: 'from-pink-500 to-rose-500',
                delay: '0s',
              },
              {
                icon: Brain,
                title: 'Meditasi Adaptif',
                description:
                  'Sesi meditasi yang menyesuaikan dengan kondisi mental dan preferensi personal Anda.',
                features: [
                  '200+ Sesi Premium',
                  'Binaural Beats',
                  'Guided Visualization',
                  'Sleep Stories',
                ],
                gradient: 'from-purple-500 to-indigo-500',
                delay: '0.1s',
              },
              {
                icon: Waves,
                title: 'Instant Relief',
                description:
                  'Teknik relaksasi darurat yang dapat diakses kapan saja untuk meredakan anxiety secara instan.',
                features: [
                  'Breathing Exercises',
                  'Progressive Relaxation',
                  'Quick Calm',
                  'Emergency Mode',
                ],
                gradient: 'from-pink-500 to-purple-500',
                delay: '0.2s',
              },
              {
                icon: Calendar,
                title: 'Mood Intelligence',
                description:
                  'Kalender pintar yang membantu Anda memahami pola mood dan memberikan prediksi serta saran.',
                features: [
                  'Mood Prediction',
                  'Pattern Recognition',
                  'Habit Tracking',
                  'Goal Setting',
                ],
                gradient: 'from-purple-500 to-pink-500',
                delay: '0.3s',
              },
              {
                icon: MessageCircle,
                title: 'Safe Community',
                description:
                  'Ruang aman untuk berbagi dengan moderasi AI dan dukungan dari komunitas yang peduli.',
                features: [
                  'Anonymous Mode',
                  'AI Moderation',
                  'Peer Support',
                  'Expert Guidance',
                ],
                gradient: 'from-rose-500 to-pink-500',
                delay: '0.4s',
              },
              {
                icon: Sparkles,
                title: 'Personal AI Coach',
                description:
                  'Asisten AI personal yang memahami perjalanan unik Anda dan memberikan guidance 24/7.',
                features: [
                  '24/7 Support',
                  'Personalized Tips',
                  'Crisis Detection',
                  'Growth Tracking',
                ],
                gradient: 'from-indigo-500 to-purple-500',
                delay: '0.5s',
              },
            ].map((feature, index) => (
              <GlassCard
                key={index}
                className="p-8 hover-lift scroll-animate group"
                style={{ animationDelay: feature.delay }}
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-pink-600 hover:bg-pink-50 group-hover:bg-pink-100 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="tentang"
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-content"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-purple-50/50"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 scroll-animate">
              <div className="space-y-6">
                <Badge className="glass-pink text-pink-700 px-6 py-3 font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Tentang Kalem
                </Badge>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Revolusi{' '}
                  <span className="text-gradient-animated">Mental Health</span>{' '}
                  Indonesia
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Didirikan oleh tim psikolog, teknolog, dan survivor anxiety,
                  Kalem lahir dari pemahaman mendalam bahwa setiap individu
                  memiliki perjalanan unik dalam menghadapi tantangan mental
                  health.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Target,
                    title: 'Visi Kami',
                    desc:
                      'Menjadi platform mental health terdepan yang memberdayakan setiap individu untuk mencapai kesejahteraan mental optimal.',
                  },
                  {
                    icon: Heart,
                    title: 'Misi Kami',
                    desc:
                      'Menyediakan akses mudah, terjangkau, dan efektif untuk tools kesehatan mental berbasis teknologi AI.',
                  },
                  {
                    icon: Users,
                    title: 'Tim Expert',
                    desc:
                      'Kolaborasi psikolog klinis, AI researcher, dan UX designer berpengalaman 10+ tahun.',
                  },
                  {
                    icon: Shield,
                    title: 'Keamanan Data',
                    desc:
                      'Enkripsi end-to-end dan compliance dengan standar internasional untuk melindungi privasi Anda.',
                  },
                ].map((item, index) => (
                  <GlassCard key={index} className="p-6 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-4 border-white flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-sm">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Tim Ahli Berpengalaman
                  </div>
                  <div className="text-xs text-gray-500">
                    Psikolog • AI Expert • UX Designer
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative scroll-animate"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative">
                <img
                  src="/diverse-team-mental-health-app.png"
                  alt="Tim Kalem"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-3xl hover:shadow-glow-purple transition-all duration-700"
                />

                {/* Floating Stats */}
                <GlassCard className="absolute -top-8 -left-8 p-4 animate-float">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">98%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard
                  className="absolute -bottom-8 -right-8 p-4 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">5+</div>
                      <div className="text-xs text-gray-500">Awards</div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="absolute -inset-8 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section
        id="testimoni"
        className="py-32 px-4 sm:px-6 lg:px-8 relative z-content"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-purple-50/80"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-6 mb-20 scroll-animate">
            <Badge className="glass-pink text-purple-700 px-6 py-3 font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Testimoni Pengguna
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cerita{' '}
              <span className="text-gradient-animated">Transformasi</span> Nyata
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ribuan pengguna telah merasakan perubahan positif dalam hidup
              mereka. Inilah beberapa cerita inspiratif dari komunitas Kalem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Andini',
                role: 'Mahasiswa Psikologi',
                location: 'Jakarta',
                avatar: 'SA',
                rating: 5,
                text:
                  'Kalem benar-benar game changer! Fitur AI journaling membantu saya memahami pola anxiety yang tidak pernah saya sadari. Dalam 3 bulan, panic attack saya berkurang drastis.',
                highlight: 'Panic attack berkurang 80%',
                gradient: 'from-pink-500 to-rose-500',
              },
              {
                name: 'Rudi Dermawan',
                role: 'Marketing Manager',
                location: 'Bandung',
                avatar: 'RD',
                rating: 5,
                text:
                  'Sebagai workaholic yang sering burnout, fitur instant relief Kalem jadi penyelamat. Teknik pernapasan 4-7-8 nya sangat efektif untuk meredakan stress di tengah meeting.',
                highlight: 'Stress level turun 70%',
                gradient: 'from-purple-500 to-indigo-500',
              },
              {
                name: 'Lisa Maharani',
                role: 'Content Creator',
                location: 'Surabaya',
                avatar: 'LM',
                rating: 5,
                text:
                  'Komunitas di Kalem sangat supportive dan aman. Saya yang introvert jadi berani sharing dan dapat banyak insight dari sesama survivor anxiety. Thank you Kalem!',
                highlight: 'Confidence meningkat 90%',
                gradient: 'from-pink-500 to-purple-500',
              },
            ].map((testimonial, index) => (
              <GlassCard
                key={index}
                className="p-8 hover-lift scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Highlight */}
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-sm font-medium`}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {testimonial.highlight}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-16 scroll-animate">
            <Button
              variant="outline"
              className="glass border-pink-300/50 text-pink-600 hover:bg-pink-50/50 px-8 py-3 rounded-2xl"
            >
              Lihat Semua Testimoni
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section
        id="faq"
        className="py-32 px-4 sm:px-6 lg:px-8 relative z-content"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white/50"></div>

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center space-y-6 mb-20 scroll-animate">
            <Badge className="glass-pink text-pink-700 px-6 py-3 font-medium">
              <MessageCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pertanyaan <span className="text-gradient-animated">Populer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
              tentang Kalem
            </p>
          </div>

          <div className="scroll-animate">
            <FAQSection />
          </div>
        </div>
      </section>
    </>
  )
}
