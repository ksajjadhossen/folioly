"use client";

import React from "react";
import { Rocket, Target, Code2, Layout, Cpu, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-500/5 to-transparent dark:from-indigo-500/10 pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground mb-6">
            Design{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Driven</span>{" "}
            Discovery.
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Folioly is a curated directory of exceptional developer portfolios.
            We bypass the noise to deliver pure technical and aesthetic
            inspiration.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Portfolios", value: "500+" },
              { label: "Daily Visitors", value: "2k+" },
              { label: "Countries", value: "40+" },
              { label: "Submissions", value: "150+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Features Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-8">
                Our Core Philosophy
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Curated Quality
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      We don't just list sites; we review them. Every submission
                      is evaluated for performance, mobile responsiveness, and
                      unique design language.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Technical Depth
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      Focusing on modern stacks like Next.js, React, and
                      Three.js, we highlight developers who are pushing the
                      boundaries of the web.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Community Driven
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      Folioly is built for the community. We provide a platform
                      for emerging talent to get noticed by world-class
                      companies and peers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-background border border-gray-100 dark:border-gray-800 p-10 rounded-[2rem] shadow-xl">
                <h3 className="text-xl font-black uppercase tracking-widest text-foreground mb-6">
                  Built With
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Globe size={18} />, name: "Next.js 15" },
                    { icon: <Layout size={18} />, name: "Tailwind CSS" },
                    { icon: <Code2 size={18} />, name: "Lucide Icons" },
                    { icon: <Rocket size={18} />, name: "Framer Motion" },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="text-indigo-500">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    Designed and engineered for performance, SEO, and
                    accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Ready to show the world <br /> your digital home?
          </h2>
          <a
            href="mailto:ksajjadhossen07@gmail.com?subject=Portfolio Submission - Folioly"
            className="inline-block"
          >
            <button className="rounded-full bg-background text-foreground px-10 py-4 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
              Submit Your Portfolio
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
