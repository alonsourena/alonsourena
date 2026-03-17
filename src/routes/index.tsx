import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}
