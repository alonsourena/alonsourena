import { MicrosoftNETIcon } from './icons/dotnet'
import { GitIcon } from './icons/git'
import { GithubIcon } from './icons/github'
import { LinkedInIcon } from './icons/linked-in'
import { NextjsIcon } from './icons/nextjs'
import { ReactIcon } from './icons/react'
import { MicrosoftSQLServerIcon } from './icons/sql-server'
import { TailwindCSSIcon } from './icons/tailwindcss'
import { TanStackIcon } from './icons/tanstack'
import { TypeScriptIcon } from './icons/typescript'
import { XIcon } from './icons/x'
import {
  ArrowRight02Icon,
  ComputerTerminal01Icon,
  DatabaseLightningIcon,
  Download01Icon,
  GalaxyIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

const marqueeItems = [
  { id: 1, icon: ReactIcon },
  { id: 2, icon: TypeScriptIcon },
  { id: 3, icon: NextjsIcon },
  { id: 4, icon: TailwindCSSIcon },
  { id: 5, icon: MicrosoftNETIcon },
  { id: 6, icon: MicrosoftSQLServerIcon },
  { id: 7, icon: GitIcon },
  { id: 8, icon: TanStackIcon },
]

function MarqueeItem({
  icon: Icon,
  ...props
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <div
      className="flex size-16 items-center justify-center rounded-2xl glass-panel border border-primary/20 group/item"
      {...props}
    >
      <span className="text-3xl text-primary group-hover/item:scale-110 transition-transform">
        <Icon className="size-6" />
      </span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center px-6 py-32 lg:px-20">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-125 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for Innovation
              </div>

              {/* Name & subtitle */}
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100 md:text-7xl">
                Alonso Ureña
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-xl font-light text-slate-600 dark:text-slate-400 md:text-2xl">
                  Full Stack Developer
                </p>
                <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
                  Building robust web applications from database to UI, turning
                  complex problems into clean, maintainable code.
                </p>

                {/* Social links */}
                <div className="flex gap-4">
                  {/* GitHub */}
                  <a
                    className="flex items-center gap-2 group"
                    href="https://github.com/alonsourena"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="size-10 flex items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary glow-icon group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                      <GithubIcon className="size-5" />
                    </div>
                  </a>
                  {/* LinkedIn */}
                  <a
                    className="flex items-center gap-2 group"
                    href="https://www.linkedin.com/in/alonsourena/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="size-10 flex items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary glow-icon group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                      <LinkedInIcon className="size-5" />
                    </div>
                  </a>
                  {/* X / Twitter */}
                  <a
                    className="flex items-center gap-2 group"
                    href="https://x.com/alonsourena_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="size-10 flex items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary glow-icon group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                      <XIcon className="size-5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <FeaturedProjects />
            <TechStack />
          </div>

          {/* Right column — profile image + timeline */}
          <div className="flex flex-col gap-12 lg:sticky lg:top-32">
            {/* Profile image */}
            <div className="relative flex justify-center">
              <div className="relative h-80 w-[320px] md:h-112.5 md:w-112.5">
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 neon-border rotate-3" />
                <div className="absolute inset-0 rounded-3xl border border-primary/10 -rotate-3" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-tr from-background-dark via-transparent to-primary/20" />
                  <img
                    alt="Alonso Ureña Portrait"
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    // src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5paaKAHXmGXjvkbsL40WuTBNuaY025zmTYulyTLk_ZLgtBd2VI0yzzb4k3Dw8yoypQ5tyL9EwvtoruK2ld-pTXIMswEE8CNqUGOZ37tTlehciLPPZ45027Sj5K5wWJpF11cQf2A6F80oqhmb9lkxNqDGlGNY6z4G-_d2ygV3y5mP6XwVuL2TE1gLz_1YHZemu8vgdRrgh2PDzo2cpJjJrEmHw6BVedJNcI8CWUxv0dZlr0V03LvDCHuLD_wSKC8ehis8plj02Zhw"
                    src="/profile.jpg"
                  />
                  {/* Glass overlay */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                          Current Project
                        </span>
                        <span className="text-sm font-medium">Spaceware</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating icons */}
                <div className="absolute -top-6 -right-6 h-16 w-16 glass-panel rounded-2xl flex items-center justify-center text-primary shadow-xl">
                  <HugeiconsIcon icon={ComputerTerminal01Icon} />
                </div>
                <div className="absolute bottom-12 -left-8 h-14 w-14 glass-panel rounded-2xl flex items-center justify-center text-primary shadow-xl">
                  <HugeiconsIcon icon={GalaxyIcon} />
                </div>
              </div>
            </div>

            <ProffesionalExperience />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  return (
    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-4">
        Featured Projects
      </h3>

      <div className="flex flex-wrap gap-8 items-center">
        <a
          href="https://speedylogisticscr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/speedy-logistics.png" width={125} />
        </a>
        <a
          href="https://www.black-shipping.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/black-shipping.png" width={125} />
        </a>
        <a
          href="https://www.fastieboxcr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/fastie-box.png" width={125} />
        </a>
      </div>
    </div>
  )
}

function TechStack() {
  return (
    <div className="space-y-4 pt-4">
      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">
        Tech Stack
      </h3>
      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background-light dark:from-background-dark to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background-light dark:from-background-dark to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center group w-max pl-8">
          {marqueeItems.map((item) => (
            <MarqueeItem key={item.id} icon={item.icon} />
          ))}
          {marqueeItems.map((item) => (
            <MarqueeItem key={`dup-${item.id}`} icon={item.icon} aria-hidden />
          ))}
        </div>
      </div>

      <CallToAction />
    </div>
  )
}

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
        <span>Explore Portfolio</span>
        <HugeiconsIcon icon={ArrowRight02Icon} />
      </button>
      <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
        <span>Download CV</span>
        <HugeiconsIcon icon={Download01Icon} />
      </button>
    </div>
  )
}

function ProffesionalExperience() {
  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0 lg:pl-8">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-10 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        Professional Experience
      </h3>
      <div className="relative ml-4">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/20 to-transparent" />

        {/* Entry 1 */}
        <div className="relative pl-12 pb-10">
          <div className="absolute -left-1.25 top-1 size-3 rounded-full bg-primary neon-glow" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              May 2019 — Pres.
            </span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Full Stack Developer
            </h4>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Pacific Programming &amp; Tech Inc.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[10px] font-bold rounded-full border border-primary/30 bg-primary/5 text-primary">
                REACT
              </span>
              <span className="px-3 py-1 text-[10px] font-bold rounded-full border border-primary/30 bg-primary/5 text-primary">
                TYPESCRIPT
              </span>
              <span className="px-3 py-1 text-[10px] font-bold rounded-full border border-primary/30 bg-primary/5 text-primary">
                .NET
              </span>
            </div>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="relative pl-12 pb-10">
          <div className="absolute -left-1.25 top-1 size-3 rounded-full bg-primary/40 border border-primary/60" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              Sep 2017 — Apr 2018
            </span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Software Developer
            </h4>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Soefe
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[10px] font-bold rounded-full border border-slate-700 bg-slate-800/50 text-slate-400">
                PHP
              </span>
              <span className="px-3 py-1 text-[10px] font-bold rounded-full border border-slate-700 bg-slate-800/50 text-slate-400">
                JAVASCRIPT
              </span>
            </div>
          </div>
        </div>

        {/* Entry 3 */}
        {/* <div className="relative pl-12">
          <div className="absolute -left-1.25 top-1 size-3 rounded-full bg-primary/20 border border-primary/40" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              2017 — 2019
            </span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              UI Engineer
            </h4>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Pixel Perfect
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
