import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import {
  Award,
  Compass,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHeader, SectionHeading } from "@/components";

const values = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Clarity first",
    description:
      "We make complex ideas easy to understand so your audience can move forward with confidence.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Trust through detail",
    description:
      "We believe credibility is built in the small things: structure, consistency, and thoughtful execution.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Collaborative by design",
    description:
      "We work closely with your team, keeping communication simple, transparent, and productive.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Outcome-driven",
    description:
      "Every decision is made to support a better customer experience and stronger business results.",
  },
];

const team = [
  {
    name: "Maya Chen",
    role: "Founder & Strategy Lead",
    bio: "Maya helps teams sharpen their message and build websites that feel credible from the first click.",
  },
  {
    name: "Jordan Patel",
    role: "Design Director",
    bio: "Jordan brings a clean visual system, strong hierarchy, and a calm, polished feel to every project.",
  },
  {
    name: "Elena Brooks",
    role: "Content Strategist",
    bio: "Elena turns service details into clear, persuasive copy that supports sales and search visibility.",
  },
  {
    name: "Noah Rivera",
    role: "Client Success Lead",
    bio: "Noah keeps projects moving smoothly and makes sure every milestone is easy to understand.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Started with a simple idea",
    description:
      "We began by helping small teams replace confusing websites with clear, professional experiences.",
  },
  {
    year: "2021",
    title: "Expanded our process",
    description:
      "We refined our workflow to combine strategy, design, and content into a more effective system.",
  },
  {
    year: "2024",
    title: "Trusted by growing brands",
    description:
      "Today, we support organizations that want a stronger digital presence and a better path to conversion.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="A professional website partner for teams that care about credibility"
        description="We help businesses tell a clearer story, build trust faster, and create a digital presence that reflects the quality of their work."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our founding story"
              title="Built to solve a common problem: great businesses with underwhelming websites"
              description="Too many strong companies lose opportunities because their website is vague, dated, or hard to navigate. We started this studio to fix that."
            />
            <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Our work began with a simple observation: many teams had
                excellent services, strong reputations, and real results—but
                their website didn’t communicate any of it clearly.
              </p>
              <p>
                We created a process that brings together strategy, design, and
                content so businesses can present themselves with confidence.
                The result is a site that feels polished, answers buyer
                questions, and supports growth.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="grid gap-4">
              {milestones.map((item) => (
                <div key={item.year} className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-500">{item.year}</div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mission & values"
            title="We build with purpose, not just polish"
            description="Our mission is to help professional teams communicate clearly, earn trust quickly, and create a better path to action."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Team"
            title="A small, senior team with a hands-on approach"
            description="You work directly with experienced people who care about the details and the outcome."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
                  <Users className="h-14 w-14 text-white/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Rocket className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">Fast, focused delivery</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                We keep projects moving with clear milestones and practical
                communication.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Award className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">Quality you can show</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Every page is designed to reflect the professionalism of your
                team and the value of your work.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">A partner you can trust</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                We prioritize transparency, consistency, and a process that
                feels easy from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}