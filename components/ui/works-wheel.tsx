"use client"

// A portfolio index built as a wheel you turn.
import * as React from "react"
import { cn } from "@/lib/utils"

export interface WorksWheelItem {
  title: string
  image: string
  subtitle?: string
  bottleneck?: string
  solution?: string
  stat?: { value: string; label: string }
  href?: string
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[]
  label?: string
  action?: string
  onActionClick?: (item: WorksWheelItem) => void
}

/* Geometry tuned for large clear cards that don't overlap the left description */
const CARD_H = 0.52 // front card height, of the stage
const CARD_MAX_W = 0.44 // width ratio
const CARD_RATIO = 1.45 // card width / height
const STEP = 42 // degrees between cards on the drum
const DRUM = 2.15 // drum radius
const LENS = 2.8 // perspective distance
const RING_R = 1.18 // ring radius
const BOW = 1.65 // arc curvature
const TITLE = 0.088
const INDEX = 0.038
const CULL = 1.6

const WHEEL_UNITS = 900
const DRAG_UNITS = 420
const SETTLE = 140
const EASE = 0.12

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

type Stage = { w: number; h: number }

const rad = (deg: number) => (deg * Math.PI) / 180
const bowAt = (drumDeg: number, bow: number) => -bow * (1 - Math.cos(rad(drumDeg)))

function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  m: number
) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  )
}

export function WorksWheel({
  items,
  label = "Industry Playbooks",
  action = "Configure",
  onActionClick,
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null)
  const wheelRef = React.useRef<HTMLDivElement>(null)
  const cardRefs = React.useRef<(HTMLElement | null)[]>([])
  const labelRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLDivElement>(null)

  const turn = React.useRef(0)
  const target = React.useRef(0)
  const [active, setActive] = React.useState(0)
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 })

  const count = items.length
  const last = Math.max(count - 1, 0)

  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const read = () => setReduced(query.matches)
    read()
    query.addEventListener("change", read)
    return () => query.removeEventListener("change", read)
  }, [])

  React.useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight })
    read()
    const ro = new ResizeObserver(read)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const metrics = React.useMemo(() => {
    const { w, h } = stage
    const cardW = Math.min(h * CARD_H * CARD_RATIO, w * CARD_MAX_W)
    const cardH = cardW / CARD_RATIO
    const drumR = cardH * DRUM
    const ringR = cardH * RING_R
    const ringScale = count
      ? clamp(((2 * Math.PI * ringR) / count) * 0.82 / (cardW || 1), 0.16, 1)
      : 1
    return {
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * BOW,
      depth: cardH * LENS,
      title: cardH * TITLE,
      index: cardH * INDEX,
    }
  }, [stage, count])

  React.useEffect(() => {
    if (!stage.h) return
    let frame = 0
    const { ringR, ringScale, drumR, bow } = metrics

    const draw = () => {
      frame = requestAnimationFrame(draw)
      const gap = target.current - turn.current
      if (Math.abs(gap) < 0.0005) turn.current = target.current
      else turn.current += gap * (reduced ? 1 : EASE)

      const t = turn.current
      const m = clamp(t, 0, 1)
      const pos = Math.max(0, t - 1)

      // When m > 0 (turned), shift the wheel axis rightwards so it never overlaps the left description
      const horizontalOffset = m * Math.min(stage.w * 0.18, 260)

      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateX(${horizontalOffset}px) translateZ(${-m * drumR}px)`
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos
        const drumDeg = d * STEP
        const card = cardRefs.current[i]
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            m
          )
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1"
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2))
        }
        const face = card?.firstElementChild as HTMLElement | null
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, m)})`
      }

      if (labelRef.current) labelRef.current.style.opacity = String(1 - m)
      if (titleRef.current) titleRef.current.style.opacity = String(m)
      const near = clamp(Math.round(pos), 0, last)
      setActive((prev) => (prev === near ? prev : near))
    }

    frame = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frame)
  }, [metrics, stage.h, stage.w, count, last, reduced])

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1)
    },
    [last]
  )

  React.useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / WHEEL_UNITS
      if (next > 0 && next < last + 1) event.preventDefault()
      to(next)
      window.clearTimeout(settling.current)
      settling.current = window.setTimeout(
        () => to(Math.round(target.current)),
        SETTLE
      )
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      el.removeEventListener("wheel", onWheel)
      window.clearTimeout(settling.current)
    }
  }, [to, last])

  const drag = React.useRef<number | null>(null)
  const settling = React.useRef(0)

  const activeItem = items[active]

  return (
    <section
      aria-label={label}
      className={cn(
        "bg-transparent text-slate-900 relative h-full min-h-[38rem] sm:min-h-[46rem] w-full overflow-hidden select-none font-sans",
        className
      )}
      {...props}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        className="focus-visible:outline-slate-900 absolute inset-0 cursor-grab touch-pan-x outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          drag.current = event.clientY
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          if (drag.current === null) return
          to(target.current + (drag.current - event.clientY) / DRAG_UNITS)
          drag.current = event.clientY
        }}
        onPointerUp={() => {
          drag.current = null
          if (target.current > 1) to(Math.round(target.current))
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") to(Math.round(target.current) + 1)
          else if (event.key === "ArrowUp") to(Math.round(target.current) - 1)
          else return
          event.preventDefault()
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            const Tag = (item.href ? "a" : "div") as "a"
            return (
              <React.Fragment key={item.title}>
                <Tag
                  id={`works-wheel-${i}`}
                  role="option"
                  aria-selected={i === active}
                  href={item.href}
                  onClick={(e) => {
                    if (onActionClick) {
                      e.preventDefault()
                      onActionClick(item)
                    }
                  }}
                  ref={(node: HTMLElement | null) => {
                    cardRefs.current[i] = node
                  }}
                  className="group absolute [backface-visibility:hidden] cursor-pointer"
                  style={{
                    width: metrics.cardW,
                    height: metrics.cardH,
                    marginLeft: -metrics.cardW / 2,
                    marginTop: -metrics.cardH / 2,
                  }}
                >
                  {/* Clean Borderless Picture Frame without grey border */}
                  <span className="relative block size-full overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-5 pointer-events-none">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                        {item.subtitle || "Sector Playbook"}
                      </span>
                      <h4 className="text-white text-base sm:text-lg font-bold leading-tight mt-1">
                        {item.title}
                      </h4>
                    </div>
                    {action ? (
                      <span className="bg-white/95 text-slate-900 pointer-events-none absolute right-4 bottom-4 flex translate-y-1 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold opacity-0 backdrop-blur-sm transition group-hover:translate-y-0 group-hover:opacity-100 shadow-md">
                        <svg viewBox="0 0 12 12" className="size-3 text-emerald-600" aria-hidden="true">
                          <path
                            d="M3 9 9 3M4 3h5v5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {action}
                      </span>
                    ) : null}
                  </span>
                </Tag>
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* Ring center title at rest */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 grid place-items-center text-center tracking-tight px-6 z-10"
      >
        <div className="flex flex-col items-center max-w-lg">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
            Autonomous 3D Index
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {label}
          </h3>
          <p className="text-sm text-slate-500 mt-2.5 font-normal leading-relaxed">
            Scroll or drag wheel to expand the 3D drum &amp; inspect playbooks
          </p>
        </div>
      </div>

      {/* Description as the main heading on the left (No overlap, no grey border, seamlessly on background) */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute top-1/2 left-[2%] sm:left-[3%] -translate-y-1/2 w-[340px] sm:w-[420px] max-w-[42%] tracking-tight opacity-0 transition-opacity duration-300 z-10"
      >
        {activeItem && (
          <div className="space-y-4 pointer-events-auto pr-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                0{active + 1} / 0{count}
              </span>
              <span className="text-xs text-slate-500 font-medium font-mono">
                {activeItem.subtitle}
              </span>
            </div>

            {/* Description as the main prominent headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight leading-snug">
              {activeItem.solution || activeItem.title}
            </h3>

            {/* Core hurdle */}
            {activeItem.bottleneck && (
              <div className="pl-3.5 border-l-2 border-emerald-500 py-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  The Conversion Hurdle
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeItem.bottleneck}
                </p>
              </div>
            )}

            {/* Key metric stat */}
            {activeItem.stat && (
              <div className="pt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-emerald-600 tracking-tight">
                  {activeItem.stat.value}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeItem.stat.label}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Index list placed at utmost right edge so it never overlaps or gets overlooked by pictures */}
      <div className="absolute top-[8%] sm:top-[10%] right-2 sm:right-4 z-20 pointer-events-auto">
        <ol
          className="text-slate-400 text-right leading-[2.1] bg-white/70 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          style={{ fontSize: Math.max(12, metrics.index) }}
        >
          {items.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => to(i + 1)}
                className={cn(
                  "focus-visible:outline-slate-900 cursor-pointer transition-all duration-200 outline-none focus-visible:outline-1 text-xs sm:text-[13px] tracking-tight block ml-auto py-0.5",
                  i === active
                    ? "text-emerald-700 font-bold scale-105 origin-right"
                    : "hover:text-slate-900 text-slate-500 font-medium"
                )}
                style={{ fontFamily: "var(--font-heading-canva), var(--font-inter), sans-serif" }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
