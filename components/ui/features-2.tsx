import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconPlaceholder } from "@/components/ui/features-2-utils/icon-placeholder";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };

const rows = [
  {
    eyebrow: "Collaboration",
    Icon: (p: IconProps) => (
      <IconPlaceholder
        lucide="Users"
        tabler="IconUsersGroup"
        hugeicons="UserGroupIcon"
        phosphor="UsersThree"
        remixicon="RiTeamLine"
        {...p}
      />
    ),
    title: "Work as one, ship faster together",
    body: "One shared workspace where roles, live presence, and threaded comments keep everyone aligned.",
    bullets: [
      "Granular roles: viewer, editor, admin",
      "Real-time presence and inline comments",
      "Version history with one-click restore",
      "Guest access with expiring links",
    ],
    cta: "Explore Collaboration",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Team collaboration interface showing shared workspace",
    avatars: [
      {
        name: "Sarah Kim",
        initials: "SK",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      },
      {
        name: "Marcus Webb",
        initials: "MW",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      },
      {
        name: "Priya Nair",
        initials: "PN",
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
      },
    ],
    stat: { value: "4.2×", label: "Faster Review Cycles" },
  },
  {
    eyebrow: "Analytics",
    Icon: (p: IconProps) => (
      <IconPlaceholder
        lucide="BarChart"
        tabler="IconChartBar"
        hugeicons="BarChartIcon"
        phosphor="ChartBar"
        remixicon="RiBarChartLine"
        {...p}
      />
    ),
    title: "Decisions grounded in real data",
    body: "Turn raw events into clear, actionable dashboards in minutes, with no SQL or data-engineering bottleneck.",
    bullets: [
      "Sub-second query engine for large datasets",
      "Funnel, retention, and cohort views built-in",
      "Scheduled email and Slack reports",
      "CSV and REST API export",
    ],
    cta: "See Analytics In Action",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Analytics dashboard with funnel and retention charts",
    avatars: [
      {
        name: "James Okafor",
        initials: "JO",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
      },
      {
        name: "Lena Strauss",
        initials: "LS",
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
      },
    ],
    stat: { value: "98%", label: "Query Success Rate" },
  },
  {
    eyebrow: "Security",
    Icon: (p: IconProps) => (
      <IconPlaceholder
        lucide="ShieldCheck"
        tabler="IconShieldCheck"
        hugeicons="Shield01Icon"
        phosphor="ShieldCheck"
        remixicon="RiShieldCheckLine"
        {...p}
      />
    ),
    title: "Enterprise-grade protection, zero friction",
    body: "Controls your compliance team will love and developers barely notice, with SSO, MFA, audit logs, and data residency built in.",
    bullets: [
      "SOC 2 Type II and ISO 27001 certified",
      "SSO via SAML 2.0 and OIDC",
      "Immutable audit log with SIEM export",
      "EU and US data-residency regions",
    ],
    cta: "Review Security Docs",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Security controls panel with audit log",
    avatars: [
      {
        name: "Diana Reyes",
        initials: "DR",
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
      },
      {
        name: "Tom Eriksen",
        initials: "TE",
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
      },
      {
        name: "Aiko Tanaka",
        initials: "AT",
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
      },
    ],
    stat: { value: "0", label: "Reported Breaches" },
  },
];

export default function FeaturesBlock() {
  return (
    <section id="who-its-for" className="flex w-full items-center justify-center bg-[#0E1015] px-6 py-28 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Badge variant="outline" className="mb-5 border-[#1F232B] bg-[#12141A] text-emerald-400 font-medium">
            Platform Overview
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Built for every part of your workflow
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400">
            Flowra combines autonomous messaging, voice qualification, and granular analytics into one cohesive workspace.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {rows.map((row, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={row.eyebrow}>
                <div
                  className={`flex flex-col gap-10 py-16 md:flex-row md:items-center md:gap-20 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                        <row.Icon
                          className="size-3.5 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {row.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-[1.75rem] sm:leading-snug">
                      {row.title}
                    </h3>

                    <p className="leading-relaxed text-muted-foreground">
                      {row.body}
                    </p>

                    <ul className="flex flex-col gap-3">
                      {row.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="flex size-[18px] shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <IconPlaceholder
                              lucide="Check"
                              tabler="IconCheck"
                              hugeicons="Tick02Icon"
                              phosphor="Check"
                              remixicon="RiCheckLine"
                              className="size-2.5"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 border-t border-border pt-5">
                      <div className="flex -space-x-2">
                        {row.avatars.map((av) => (
                          <Avatar
                            key={av.name}
                            className="size-7 border-2 border-background"
                          >
                            <AvatarImage
                              src={av.src}
                              alt={av.name}
                              className="grayscale"
                            />
                            <AvatarFallback className="text-[10px]">
                              {av.initials}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold tabular-nums">
                          {row.stat.value}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {row.stat.label}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Button variant="outline" size="sm">
                        {row.cta}
                        <IconPlaceholder
                          lucide="ArrowRight"
                          tabler="IconArrowRight"
                          hugeicons="ArrowRightIcon"
                          phosphor="ArrowRight"
                          remixicon="RiArrowRightLine"
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted md:max-w-sm">
                      <img
                        src={row.img}
                        alt={row.imgAlt}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-border bg-background/80 px-4 py-2.5 backdrop-blur-sm">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                          <row.Icon
                            className="size-3 text-muted-foreground"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                          {row.eyebrow} Preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {index < rows.length - 1 && <Separator />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
