import { createFileRoute } from "@tanstack/react-router";
import heroFamily from "@/assets/hero-family.jpg";
import videoPhonics from "@/assets/video-phonics.jpg";
import videoExpert from "@/assets/video-expert.jpg";
import videoSocial from "@/assets/video-social.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurtura — Parenting Made Simple, Beautiful & Smarter" },
      {
        name: "description",
        content:
          "Expert-backed parenting guidance, animated learning videos, brain growth activities and child progress tracking for newborns to 5th-grade kids.",
      },
    ],
  }),
  component: Index,
});

/* ───────────────────── primitives ───────────────────── */

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid size-9 place-items-center rounded-2xl bg-gradient-to-tr from-peach-brand via-honey-brand to-sky-brand text-white shadow-md font-display text-lg font-bold">
        n
      </div>
      <span className="font-display text-2xl font-bold tracking-tight">Nurtura</span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-5 z-50 px-4">
      <div className="glass-card mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-5 ring-1 ring-foreground/5 shadow-soft">
        <Logo />
        <div className="hidden items-center gap-8 text-sm font-semibold text-foreground/70 md:flex">
          <a href="#programs" className="hover:text-peach-brand transition-colors">Programs</a>
          <a href="#ages" className="hover:text-peach-brand transition-colors">Ages</a>
          <a href="#videos" className="hover:text-peach-brand transition-colors">Library</a>
          <a href="#community" className="hover:text-peach-brand transition-colors">Community</a>
        </div>
        <a
          href="#cta"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-transform hover:scale-105 active:scale-95"
        >
          Start Free
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────── hero ───────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:pt-44">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-40 -z-10 size-[34rem] rounded-full bg-sky-soft blur-[120px] opacity-80" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 size-[30rem] rounded-full bg-peach-soft blur-[120px] opacity-80" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 size-[24rem] rounded-full bg-honey-soft blur-[120px] opacity-70" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-brand ring-1 ring-mint-brand/20">
            <span className="size-1.5 rounded-full bg-mint-brand" />
            Trusted by 10,000+ parents
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.02] text-foreground md:text-6xl lg:text-7xl">
            Parenting Made{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic" style={{ fontFamily: "var(--font-serif)" }}>
                Beautiful
              </span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-peach-soft" />
            </span>{" "}
            & Smarter.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            From newborn care to growing young minds — Nurtura helps parents raise
            happy, confident, and intelligent children through guided learning,
            animated lessons, and expert-backed parenting tools.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-2xl bg-peach-brand px-7 py-4 text-base font-bold text-white shadow-glow-peach transition-transform hover:-translate-y-0.5"
            >
              Start Free Trial
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-3 rounded-2xl bg-card px-7 py-4 text-base font-bold text-foreground ring-1 ring-foreground/10 shadow-sm hover:bg-muted"
            >
              <span className="grid size-7 place-items-center rounded-full bg-peach-soft text-peach-brand">▶</span>
              Watch Demo
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/5 pt-6">
            {[
              ["10K+", "Happy Parents"],
              ["200+", "Expert Lessons"],
              ["98%", "Child-Safe Score"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-foreground">{n}</dt>
                <dd className="text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* visual */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative overflow-hidden rounded-[3rem] bg-card shadow-glow-sky ring-1 ring-foreground/5">
            <img
              src={heroFamily}
              alt="Mother and child playing with alphabet blocks"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating badges */}
          <div className="glass-card animate-float absolute -left-6 top-16 rounded-3xl p-4 shadow-soft ring-1 ring-foreground/5">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-mint-soft text-xl">🧠</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-mint-brand">IQ Growth</p>
                <p className="text-sm font-bold">+15% this week</p>
              </div>
            </div>
          </div>
          <div className="glass-card animate-float-slow absolute -right-4 bottom-20 rounded-3xl p-4 shadow-soft ring-1 ring-foreground/5">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-honey-soft text-xl">📖</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-honey-brand">Up Next</p>
                <p className="text-sm font-bold">Bedtime story</p>
              </div>
            </div>
          </div>
          <div className="glass-card animate-float absolute -bottom-4 left-10 rounded-2xl px-4 py-2 text-sm font-bold shadow-soft ring-1 ring-foreground/5 [animation-delay:400ms]">
            ⭐ Daily streak: 12 days
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="mx-auto mt-20 max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Backed by pediatricians · child psychologists · early educators
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm font-semibold text-muted-foreground sm:grid-cols-4">
          {["Expert Designed", "Child-Safe Learning", "Age-Based Guidance", "No Ads, Ever"].map((t) => (
            <div key={t} className="rounded-2xl bg-card/60 px-4 py-3 ring-1 ring-foreground/5">
              ✓ {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── features ───────────────────── */

const FEATURES = [
  { icon: "📈", title: "Age-Wise Parenting Journey", desc: "Personalized guidance from newborn to 5th grade.", tone: "sky" },
  { icon: "🎬", title: "Animated Learning Videos", desc: "Fun animated lessons children love watching.", tone: "peach" },
  { icon: "🧠", title: "Brain Development Activities", desc: "Scientifically designed mental growth exercises.", tone: "mint" },
  { icon: "💛", title: "Emotional Intelligence Training", desc: "Help children build confidence and balance.", tone: "honey" },
  { icon: "🗓️", title: "Daily Growth Planner", desc: "Structured routines for habits and discipline.", tone: "lavender" },
  { icon: "🎓", title: "Parent Learning Hub", desc: "Tips, webinars, and child psychology guidance.", tone: "sky" },
  { icon: "📊", title: "Smart Progress Tracking", desc: "Monitor learning, habits, growth and milestones.", tone: "mint" },
  { icon: "🎮", title: "Interactive Child Activities", desc: "Games, storytelling, memory & creativity.", tone: "peach" },
] as const;

const toneBg: Record<string, string> = {
  sky: "bg-sky-soft text-sky-brand",
  peach: "bg-peach-soft text-peach-brand",
  mint: "bg-mint-soft text-mint-brand",
  honey: "bg-honey-soft text-honey-brand",
  lavender: "bg-lavender-soft text-lavender-brand",
};

function Features() {
  return (
    <section id="programs" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-peach-soft px-4 py-1 text-xs font-bold uppercase tracking-wider text-peach-brand">
            Everything you need
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">A complete ecosystem for your child's growth</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Eight powerful programs working together so you can parent with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-[2rem] bg-card p-7 ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div
                className={`grid size-14 place-items-center rounded-2xl text-2xl transition-transform group-hover:scale-110 group-hover:-rotate-6 ${toneBg[f.tone]}`}
              >
                {f.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── how it works ───────────────────── */

function HowItWorks() {
  const steps = [
    { n: "01", title: "Create your parent profile", desc: "Tell us about your family in 60 seconds.", tone: "peach" },
    { n: "02", title: "Select your child's age group", desc: "From newborn to 5th grade.", tone: "honey" },
    { n: "03", title: "Get a personalized plan", desc: "Expert-curated lessons and routines.", tone: "mint" },
    { n: "04", title: "Track growth & milestones", desc: "Watch your child flourish week by week.", tone: "sky" },
  ] as const;
  return (
    <section className="px-6 py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Up and running in minutes</h2>
          <p className="mt-4 text-lg text-muted-foreground">A gentle journey, designed by parenting experts.</p>
        </div>
        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-[2rem] bg-card p-7 ring-1 ring-foreground/5"
            >
              <div className={`inline-grid size-12 place-items-center rounded-2xl font-display text-lg font-bold ${toneBg[s.tone]}`}>
                {s.n}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute right-4 top-10 hidden text-foreground/20 lg:block" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────── ages ───────────────────── */

const AGES = [
  { title: "Newborn Care", range: "0–12 months", emoji: "👶", focus: "Sensory play, sleep & bonding", tone: "sky" },
  { title: "Toddlers", range: "1–3 years", emoji: "🧸", focus: "Speech, motor skills, habits", tone: "peach" },
  { title: "Preschool", range: "3–5 years", emoji: "🎨", focus: "Logic, EQ, early reading", tone: "mint" },
  { title: "Kindergarten", range: "5–6 years", emoji: "✏️", focus: "Math readiness & focus", tone: "lavender" },
  { title: "Grade 1–5", range: "6–11 years", emoji: "🚀", focus: "Advanced thinking & academics", tone: "honey" },
] as const;

function Ages() {
  return (
    <section id="ages" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-lavender-soft px-4 py-1 text-xs font-bold uppercase tracking-wider text-lavender-brand">
              Age-based learning paths
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tailored for every stage</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Personalized guidance from your baby's first breath to their fifth-grade graduation.
            </p>
          </div>
        </div>

        <div className="no-scrollbar mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {AGES.map((a) => (
            <article
              key={a.title}
              className="group cursor-pointer rounded-[2rem] bg-card p-7 ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className={`grid size-16 place-items-center rounded-2xl text-3xl ${toneBg[a.tone]} transition-transform group-hover:scale-110`}>
                {a.emoji}
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">{a.range}</p>
              <h3 className="mt-1 text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.focus}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-foreground/70 opacity-0 transition-opacity group-hover:opacity-100">
                Explore →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── videos ───────────────────── */

const VIDEOS = [
  { img: videoPhonics, tag: "Animated Learning", title: "The Magic of Phonics", duration: "8 min", tone: "peach" },
  { img: videoExpert, tag: "Expert Series", title: "Gentle Boundary Setting", duration: "12 min", tone: "lavender" },
  { img: videoSocial, tag: "Social Growth", title: "Making Friends at School", duration: "6 min", tone: "mint" },
  { img: videoPhonics, tag: "Brain Games", title: "Memory Adventure", duration: "9 min", tone: "sky" },
] as const;

function Videos() {
  return (
    <section id="videos" className="px-6 py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="inline-block rounded-full bg-honey-soft px-4 py-1 text-xs font-bold uppercase tracking-wider text-honey-brand">
              Daily feed
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A library kids love</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Pixar-quality animated lessons and expert guidance, refreshed daily.
            </p>
          </div>
          <div className="hidden gap-3 md:flex">
            <button className="grid size-12 place-items-center rounded-full bg-card ring-1 ring-foreground/10 hover:bg-muted">←</button>
            <button className="grid size-12 place-items-center rounded-full bg-card ring-1 ring-foreground/10 hover:bg-muted">→</button>
          </div>
        </div>

        <div className="no-scrollbar mt-12 flex gap-6 overflow-x-auto snap-x pb-4">
          {VIDEOS.map((v, i) => (
            <article
              key={i}
              className="group relative aspect-video w-[360px] flex-none snap-start overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-foreground/5"
            >
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                width={1280}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-background">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{v.tag}</p>
                <h4 className="mt-1 text-xl font-bold">{v.title}</h4>
                <p className="mt-1 text-xs opacity-80">{v.duration}</p>
              </div>
              <div className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-background/90 text-peach-brand shadow-md transition-transform group-hover:scale-110">
                ▶
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── testimonials ───────────────────── */

const QUOTES = [
  { name: "Priya S.", role: "Mom of 2", child: "Aarav, age 4", text: "Nurtura completely changed how we guide our daughter's learning journey. She actually asks for her lessons now.", emoji: "👩🏽" },
  { name: "Daniel K.", role: "Dad of 1", child: "Mia, age 6", text: "The expert webinars helped us through tantrums in a way no parenting book ever could.", emoji: "👨🏻" },
  { name: "Amara L.", role: "Mom of 3", child: "Twins + baby", text: "It's the only app I trust on my kid's tablet. Beautiful, calm, and genuinely educational.", emoji: "👩🏿" },
] as const;

function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Loved by thoughtful parents</h2>
          <p className="mt-4 text-lg text-muted-foreground">Real stories from families on the Nurtura journey.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="rounded-[2rem] bg-card p-8 ring-1 ring-foreground/5 shadow-sm"
            >
              <div className="flex gap-1 text-honey-brand">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">"{q.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-foreground/5 pt-5">
                <div className="grid size-11 place-items-center rounded-full bg-peach-soft text-2xl">{q.emoji}</div>
                <div>
                  <p className="text-sm font-bold">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role} · {q.child}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── app preview ───────────────────── */

function AppPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-sky-soft via-lavender-soft to-peach-soft p-10 ring-1 ring-foreground/5 lg:p-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-background/70 px-4 py-1 text-xs font-bold uppercase tracking-wider text-foreground/70">
              In your pocket
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Your family dashboard, anywhere.</h2>
            <p className="mt-5 text-lg text-foreground/80">
              Plan routines, watch milestones, and tap into expert support — all
              from a beautifully calm app.
            </p>
            <ul className="mt-8 space-y-3">
              {["Real-time activity tracking", "Daily habit-building streaks", "24/7 expert chat support", "Bedtime stories & rewards"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-background text-sm font-bold text-mint-brand shadow-sm">✓</span>
                  <span className="font-semibold text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-6 py-3 text-sm font-bold text-background">
                <span>App Store</span>
              </a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-6 py-3 text-sm font-bold text-background">
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* phone mock */}
          <div className="relative mx-auto">
            <div className="relative h-[560px] w-72 rotate-3 rounded-[3rem] bg-foreground p-3 shadow-2xl transition-transform duration-700 hover:rotate-0">
              <div className="flex h-full flex-col gap-4 overflow-hidden rounded-[2.4rem] bg-background p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Hello,</p>
                    <p className="font-display text-lg font-bold">Priya 👋</p>
                  </div>
                  <div className="grid size-10 place-items-center rounded-full bg-peach-soft text-lg">👧</div>
                </div>
                <div className="rounded-2xl bg-peach-soft p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-peach-brand">Today's lesson</p>
                  <p className="mt-1 font-display font-bold">Counting with Foxy</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-background/60">
                    <div className="h-full w-2/3 rounded-full bg-peach-brand" />
                  </div>
                </div>
                <div className="rounded-2xl bg-sky-soft p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-sky-brand">Streak</p>
                  <p className="mt-1 font-display text-2xl font-bold">12 days 🔥</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square rounded-2xl bg-mint-soft p-3">
                    <p className="text-[10px] font-bold uppercase text-mint-brand">Habits</p>
                    <p className="mt-2 font-display text-xl font-bold">5/6</p>
                  </div>
                  <div className="aspect-square rounded-2xl bg-honey-soft p-3">
                    <p className="text-[10px] font-bold uppercase text-honey-brand">IQ</p>
                    <p className="mt-2 font-display text-xl font-bold">+15%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card animate-float absolute -right-6 top-12 rounded-2xl p-3 shadow-soft">
              <p className="text-xs font-bold">🎉 New badge!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── community ───────────────────── */

function Community() {
  const items = [
    { title: "Parenting Circles", desc: "Connect with parents whose kids are the same age.", emoji: "👥", tone: "lavender" },
    { title: "Live Expert Q&A", desc: "Weekly webinars with psychologists and educators.", emoji: "🎤", tone: "sky" },
    { title: "Growth Stories", desc: "Share milestones in a kind, supportive community.", emoji: "🌱", tone: "mint" },
  ] as const;
  return (
    <section id="community" className="px-6 py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl text-center">
        <span className="inline-block rounded-full bg-mint-soft px-4 py-1 text-xs font-bold uppercase tracking-wider text-mint-brand">
          Community
        </span>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">You're not alone in this journey</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A warm, moderated space for thoughtful parents to grow together.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="rounded-[2rem] bg-card p-8 ring-1 ring-foreground/5 text-left">
              <div className={`grid size-14 place-items-center rounded-2xl text-2xl ${toneBg[it.tone]}`}>
                {it.emoji}
              </div>
              <h3 className="mt-5 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── final cta ───────────────────── */

function FinalCTA() {
  return (
    <section id="cta" className="px-6 pb-24 pt-12">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-foreground p-12 text-center text-background shadow-2xl md:p-20">
        <div className="absolute -top-32 -right-32 size-80 rounded-full bg-peach-brand/40 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-sky-brand/40 blur-[100px]" />
        <div className="relative">
          <span className="inline-block rounded-full bg-background/10 px-4 py-1 text-xs font-bold uppercase tracking-wider">
            Begin today
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold leading-tight md:text-6xl">
            Build a brighter future for your child today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-background/70">
            Join thousands of happy families using Nurtura every day. Free for 14 days. Cancel anytime.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#" className="rounded-2xl bg-peach-brand px-8 py-4 text-lg font-bold text-white shadow-glow-peach hover:scale-105 transition-transform">
              Start Free
            </a>
            <a href="#community" className="rounded-2xl bg-background/10 px-8 py-4 text-lg font-bold text-background ring-1 ring-background/20 backdrop-blur hover:bg-background/20 transition-colors">
              Join Community
            </a>
          </div>
          <p className="mt-6 text-xs text-background/60">⭐ Loved by 10,000+ parents · No credit card required</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── footer ───────────────────── */

function Footer() {
  const cols = [
    { h: "Product", links: ["Programs", "Age Paths", "Library", "Pricing"] },
    { h: "Resources", links: ["Parenting Hub", "Blogs", "Webinars", "Newsletter"] },
    { h: "Company", links: ["About", "Careers", "Contact", "Press"] },
    { h: "Legal", links: ["Privacy Policy", "Terms", "Child Safety", "Cookies"] },
  ];
  return (
    <footer className="border-t border-foreground/5 bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Helping parents raise happy, confident, and intelligent children — one beautiful day at a time.
            </p>
            <div className="mt-5 flex gap-2">
              {["IG", "YT", "X", "TT"].map((s) => (
                <a key={s} href="#" className="grid size-9 place-items-center rounded-full bg-muted text-xs font-bold hover:bg-peach-soft hover:text-peach-brand">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.h}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm font-semibold text-foreground/80 hover:text-peach-brand">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Nurtura Inc. Raising the future, gently.</p>
          <p className="text-xs text-muted-foreground">Made with 💛 for parents everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-peach-soft">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Ages />
        <Videos />
        <Testimonials />
        <AppPreview />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
