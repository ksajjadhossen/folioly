const Footer = () => {
  return (
    <footer className="mt-32 border-t border-gray-100 bg-black py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-gray-900 dark:bg-white" />
              <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tighter">
                Folioly
              </span>
            </div>
            <p className="max-w-60 text-center md:text-left text-xs leading-relaxed text-gray-400">
              Curating the world's most inspiring developer portfolios and
              personal sites.
            </p>
          </div>

          <div className="flex gap-10 text-[12px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <div className="flex flex-col gap-3">
              <span className="text-gray-900 dark:text-white">Directory</span>
              <a href="#" className="hover:text-indigo-600">
                Latest
              </a>
              <a href="#" className="hover:text-indigo-600">
                Featured
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-gray-900 dark:text-white">Social</span>
              <a href="#" className="hover:text-indigo-600">
                Twitter
              </a>
              <a href="#" className="hover:text-indigo-600">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-50 pt-8 dark:border-gray-900/50">
          <p className="text-center text-[11px] text-gray-400">
            &copy; {new Date().getFullYear()} Folioly. All rights reserved.
            Built for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
