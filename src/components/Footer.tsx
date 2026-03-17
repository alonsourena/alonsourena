import { GithubIcon } from './icons/github'
import { LinkedInIcon } from './icons/linked-in'
import { XIcon } from './icons/x'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 px-6 py-12 lg:px-20">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center md:items-start gap-3 flex-col">
          {/* <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            AR<span className="text-primary">.</span>
          </span> */}

          <img src="/logo.png" alt="Logo" width={200} />

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {year} Alonso Ureña • Costa Rica ❤️ Pura Vida
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="https://github.com/alonsourena"
          >
            <GithubIcon />
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/alonsourena/"
          >
            <LinkedInIcon />
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="https://x.com/alonsourena_"
          >
            <XIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
