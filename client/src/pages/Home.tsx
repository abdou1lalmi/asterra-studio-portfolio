/**
 * Asterra / Architectural Editorial: an asymmetric, case-study-first studio
 * narrative with mineral textures, fine index lines, and one chartreuse signal.
 */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, MoveRight, Plus, X } from "lucide-react";
import { useState } from "react";

const work = [
  {
    number: "01",
    title: "Atlas",
    category: "Digital platform / Product direction",
    description: "A legible operating system for the people reshaping the world in motion.",
    image: "/manus-storage/asterra-case-atlas_469f4f82.jpg",
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    number: "02",
    title: "Cinder",
    category: "Brand system / Editorial",
    description: "A voice and visual system for ideas that need room to become consequential.",
    image: "/manus-storage/asterra-case-cinder_3b95708a.jpg",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    number: "03",
    title: "Arc",
    category: "Experience / Identity",
    description: "A product presence for a platform designed to make the complex feel inevitable.",
    image: "/manus-storage/asterra-case-arc_8abead8b.jpg",
    span: "md:col-span-5 md:col-start-6",
    aspect: "aspect-[4/5]",
  },
];

const capabilities = [
  ["01", "Positioning", "Find the sharpest version of the truth."],
  ["02", "Brand systems", "Create a visual language with enough tension to endure."],
  ["03", "Digital products", "Design the interface between ambition and action."],
  ["04", "Launch moments", "Give the work a decisive way into the world."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Asterra home">
      <img src="/manus-storage/asterra-mark_bc2781fd.png" alt="" className="h-8 w-8 object-contain" />
      <span className="text-[1.05rem] font-extrabold tracking-[-0.06em]">asterra</span>
    </a>
  );
}

function SectionRail({ number, label, inverse = false }: { number: string; label: string; inverse?: boolean }) {
  return (
    <aside aria-hidden="true" className={`section-rail ${inverse ? "section-rail--inverse" : ""}`}>
      <span className="section-rail__top">{number}</span>
      <span className="section-rail__line" />
      <span className="section-rail__label">{label}</span>
    </aside>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : "hidden",
    whileInView: reduceMotion ? undefined : "visible",
    viewport: { once: true, amount: 0.25 },
    variants: fadeUp,
    transition: { duration: 0.72, delay, ease: "circOut" as const },
  });

  return (
    <div id="top" className="page-shell min-h-screen">
      <header className="sticky top-0 z-50 border-b border-black/15 bg-[#eeece6]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <Wordmark />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <a href="#work" className="nav-link">Work</a>
            <a href="#practice" className="nav-link">Practice</a>
            <a href="#about" className="nav-link">About</a>
          </nav>
          <div className="hidden lg:block">
            <a href="#contact" className="ink-button">Start a conversation <ArrowUpRight size={16} strokeWidth={1.8} /></a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-black/25 bg-[#f5f3ed] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/15 bg-[#eeece6] px-6 py-6 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5">
              {[
                ["Work", "#work"],
                ["Practice", "#practice"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-xl font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="editorial-grid relative border-b border-black/15">
          <div className="mx-auto grid max-w-[1600px] gap-12 px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:grid-cols-12 lg:px-14 lg:pb-20 lg:pt-16">
            <motion.div className="flex flex-col justify-between lg:col-span-7" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.09 } } }}>
              <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: "circOut" as const }} className="flex items-center gap-3">
                <span className="eyebrow">Independent studio</span>
                <span className="h-px w-10 bg-black/30" />
                <span className="eyebrow text-black/55">New York / Everywhere</span>
              </motion.div>
              <div className="mt-16 md:mt-24 lg:mt-28">
                <motion.p variants={fadeUp} transition={{ duration: 0.7, ease: "circOut" as const }} className="mb-5 text-sm leading-6 text-black/60 md:text-base">
                  A product and brand studio for ambitious teams building what matters next.
                </motion.p>
                <motion.h1 variants={fadeUp} transition={{ duration: 0.75, ease: "circOut" as const }} className="serif max-w-[820px] text-[clamp(4.1rem,8.2vw,8.8rem)] leading-[0.86] tracking-[-0.07em] text-[#171814]">
                  Make the <em className="font-normal">complex</em><br />feel inevitable.
                </motion.h1>
              </div>
              <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: "circOut" as const }} className="mt-12 flex flex-wrap items-center gap-4 md:mt-16">
                <a href="#work" className="signal-button">See selected work <ArrowDownRight size={17} strokeWidth={1.8} /></a>
                <a href="#practice" className="group inline-flex items-center gap-2 px-2 py-3 text-xs font-extrabold uppercase tracking-[0.14em]">
                  Our approach <MoveRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: "circOut" as const }} className="relative lg:col-span-4 lg:col-start-9">
              <div className="image-frame aspect-[4/5] min-h-[430px] lg:min-h-[580px]">
                <img src="/manus-storage/asterra-hero-studio_d2550738.jpg" alt="Architectural objects arranged in a studio still life" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-5 text-[#f5f3ed]">
                  <p className="eyebrow">Asterra / 2026</p>
                  <p className="mt-2 max-w-[16rem] text-sm leading-5 text-white/80">Strategy, identity and digital experience for the next significant thing.</p>
                </div>
              </div>
              <div className="absolute -left-4 top-5 flex h-12 w-12 items-center justify-center bg-[#d7ff38] text-xl font-bold md:-left-6 md:top-8">*</div>
              <p className="absolute -right-2 bottom-7 origin-bottom-right rotate-90 whitespace-nowrap text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black/55">Field notes / 001</p>
            </motion.div>
          </div>
          <div className="mx-auto flex max-w-[1600px] justify-between border-t border-black/15 px-6 py-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black/55 md:px-10 lg:px-14">
            <span>Scroll to discover</span><span>01 / 05</span>
          </div>
        </section>

        <section id="work" className="relative bg-[#171814] text-[#eeece6]">
          <SectionRail number="02" label="Selected work" inverse />
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <motion.div {...reveal()} className="grid gap-7 border-b border-white/20 pb-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-2"><span className="eyebrow text-[#d7ff38]">Selected work</span><div className="section-meta mt-4 text-white/45"><span>03 studies</span><span className="h-px w-5 bg-white/30" /><span>2024—26</span></div></div>
              <div className="md:col-span-7"><h2 className="serif text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl">Proof that precision can carry a point of view.</h2></div>
              <div className="md:col-span-3 md:pb-1"><p className="max-w-xs text-sm leading-6 text-white/65">A selection of conceptual engagements at the meeting point of product, brand, and business.</p></div>
            </motion.div>

            <div className="mt-10 grid gap-x-5 gap-y-14 md:grid-cols-12 md:gap-y-20">
              {work.map((project, index) => (
                <motion.article key={project.title} {...reveal(index * 0.06)} className={`${project.span} group`}>
                  <a href="#contact" className="block" aria-label={`Discuss a project like ${project.title}`}>
                    <div className={`image-frame ${project.aspect} border-white/25 bg-[#2a2b27]`}>
                      <img src={project.image} alt={`${project.title} conceptual engagement visual`} />
                      <div className="absolute inset-0 bg-[#d7ff38]/0 transition-colors duration-500 group-hover:bg-[#d7ff38]/10" />
                    </div>
                    <div className="mt-4 grid gap-2 border-t border-white/20 pt-3 sm:grid-cols-[max-content_1fr_max-content] sm:items-start sm:gap-4">
                      <span className="eyebrow text-[#d7ff38]">{project.number}</span>
                      <div><h3 className="serif text-3xl leading-none tracking-[-0.04em] md:text-4xl">{project.title}</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/55">{project.category}</p></div>
                      <ArrowUpRight size={21} className="hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                    </div>
                    <div className="mt-3 flex flex-wrap items-start justify-between gap-3"><p className="max-w-md text-sm leading-6 text-white/65">{project.description}</p><span className="section-meta pt-1 text-white/35">See field note <ArrowUpRight size={13} /></span></div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="practice" className="relative border-b border-black/15 bg-[#e7e4dc]">
          <SectionRail number="03" label="The practice" />
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12">
              <motion.div {...reveal()} className="lg:col-span-5">
                <span className="eyebrow">The practice</span>
                <h2 className="serif mt-7 max-w-lg text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl">A useful amount of friction.</h2>
                <p className="mt-8 max-w-md text-base leading-7 text-black/65">We make the hard brief legible. That means naming the tension, designing the system, and turning strategic conviction into an experience people want to enter.</p>
                <div className="mt-10 grid max-w-md grid-cols-3 border-y border-black/20 py-4 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-black/55"><span>Decision</span><span>System</span><span>Launch</span></div>
                <a href="#contact" className="mt-10 inline-flex items-center gap-3 border-b border-black pb-2 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors hover:text-black/55">Talk through the brief <ArrowUpRight size={17} /></a>
              </motion.div>
              <motion.div {...reveal(0.08)} className="lg:col-span-6 lg:col-start-7">
                <div className="border-t border-black/25">
                  {capabilities.map(([number, title, copy]) => (
                    <div key={title} className="group grid grid-cols-[3rem_1fr_auto] gap-4 border-b border-black/25 py-6 md:grid-cols-[4rem_1fr_1.2fr_auto] md:py-8">
                      <span className="eyebrow pt-1 text-black/45">{number}</span>
                      <h3 className="text-xl font-semibold tracking-[-0.04em] md:text-2xl">{title}</h3>
                      <p className="hidden text-sm leading-6 text-black/60 md:block">{copy}</p>
                      <Plus size={18} className="mt-1 transition-transform duration-200 group-hover:rotate-90" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="relative bg-[#eeece6]">
          <SectionRail number="04" label="Studio note" />
          <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-14 lg:py-36">
            <motion.div {...reveal()} className="lg:col-span-3"><span className="eyebrow">A small studio for big moments</span></motion.div>
            <motion.div {...reveal(0.06)} className="lg:col-span-7">
              <p className="serif text-4xl leading-[1.02] tracking-[-0.05em] md:text-6xl">“The important thing is not to look more like everyone else. It is to become easier to choose.”</p>
            </motion.div>
            <motion.div {...reveal(0.12)} className="flex flex-col justify-end lg:col-span-2">
              <div className="rule mb-4" />
              <p className="text-sm leading-6 text-black/60">We partner with founders and in-house teams who care about the quality of the thing and the clarity of its story.</p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="relative bg-[#d7ff38] text-[#171814]">
          <SectionRail number="05" label="Contact" />
          <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-14 lg:py-32">
            <motion.div {...reveal()} className="lg:col-span-8">
              <span className="eyebrow">Start a conversation</span>
              <h2 className="serif mt-8 max-w-4xl text-[clamp(4.1rem,9.2vw,9.5rem)] leading-[0.84] tracking-[-0.07em]">Bring the hard brief.</h2>
              <p className="serif mt-2 text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] tracking-[-0.06em] italic">We’ll make it legible.</p>
              <a href="mailto:hello@asterra.studio?subject=Asterra%20project%20brief" className="mt-12 inline-flex items-center gap-3 border-b-2 border-black pb-3 text-xs font-extrabold uppercase tracking-[0.14em]">hello@asterra.studio <ArrowUpRight size={18} /></a>
            </motion.div>
            <motion.div {...reveal(0.1)} className="flex flex-col justify-between border-t border-black/30 pt-5 lg:col-span-3 lg:col-start-10">
              <div><p className="eyebrow">New York / Everywhere</p><p className="mt-3 text-sm leading-6 text-black/65">Collaborating internationally across product, brand, and digital experience.</p></div>
              <div className="mt-14 flex items-center gap-3"><img src="/manus-storage/asterra-mark_bc2781fd.png" alt="" className="h-10 w-10" /><span className="text-sm font-extrabold tracking-[-0.05em]">asterra</span></div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171814] text-[#eeece6]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-7 text-[0.64rem] font-bold uppercase tracking-[0.15em] text-white/55 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <span>© 2026 Asterra Studio</span>
          <div className="flex gap-6"><a href="#top" className="hover:text-[#d7ff38]">Back to top</a><a href="mailto:hello@asterra.studio" className="hover:text-[#d7ff38]">Email</a></div>
          <span>Made with intention</span>
        </div>
      </footer>
    </div>
  );
}
