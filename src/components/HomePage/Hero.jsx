const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 transition-colors duration-500 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] opacity-100 dark:opacity-20 transition-opacity duration-500"></div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-4xl text-5xl font-medium tracking-tight text-foreground sm:text-7xl">
            Design-forward <br />
            <span className="italic text-indigo-500">developer</span> showcases.
          </h1>
          <p className="mt-8 max-w-xl text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
            A minimalist directory of hand-picked portfolios. No noise, just
            high-quality inspiration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
