import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex flex-col h-[calc(100vh-200px)] items-center justify-center overflow-hidden py-6 sm:py-12 dark:bg-slate-950">
      {/* Decorative Background Blob - Adjust colors if needed */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[40%] -top-[30%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-400/20 to-transparent blur-[100px] dark:from-violet-900/40" />
        <div className="absolute -bottom-[30%] -right-[40%] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-blue-400/20 to-transparent blur-[100px] dark:from-blue-900/40" />
      </div>

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        {/* 404 Text with Gradient */}
        <p className="text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          404 Error
        </p>
        
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Page not found
        </h2>
        
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or didn't exist in the first place.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700 hover:ring-4 hover:ring-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:hover:ring-slate-800 dark:focus:ring-slate-800"
          >
            {/* Arrow Icon that moves on hover */}
            <span className="transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            Return Home
          </Link>
          
          {/* Optional: Secondary Action */}
          <Link 
            href="/contact" 
            className="text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-400"
          >
            Contact Support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}