'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { CheckCircleIcon, StarIcon } from 'lucide-react';
import { motion, Transition } from 'framer-motion';

export type FREQUENCY = 'monthly' | 'yearly';
export const frequencies: FREQUENCY[] = ['monthly', 'yearly'];

export interface Plan {
	id?: string;
	name: string;
	info: string;
	price: {
		monthly: number | string;
		yearly: number | string;
	};
	features: {
		text: string;
		tooltip?: string;
	}[];
	btn: {
		text: string;
		href?: string;
		onClick?: () => void;
	};
	highlighted?: boolean;
}

export interface PricingSectionProps extends React.ComponentProps<'div'> {
	plans: Plan[];
	heading: string;
	description?: string;
	onOpenGetStarted?: () => void;
}

export function PricingSection({
	plans,
	heading,
	description,
	onOpenGetStarted,
	...props
}: PricingSectionProps) {
	const [frequency, setFrequency] = React.useState<'monthly' | 'yearly'>(
		'monthly',
	);

	return (
		<div
			className={cn(
				'flex w-full flex-col items-center justify-center space-y-8 p-4',
				props.className,
			)}
			{...props}
		>
			<div className="mx-auto max-w-2xl space-y-3 text-center">
				<h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-tight">
					{heading}
				</h2>
				{description && (
					<p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
						{description}
					</p>
				)}
			</div>
			<PricingFrequencyToggle
				frequency={frequency}
				setFrequency={setFrequency}
			/>
			<div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
				{plans.map((plan) => (
					<PricingCard
						plan={plan}
						key={plan.name}
						frequency={frequency}
						onOpenGetStarted={onOpenGetStarted}
					/>
				))}
			</div>
		</div>
	);
}

export type PricingFrequencyToggleProps = React.ComponentProps<'div'> & {
	frequency: FREQUENCY;
	setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>;
};

export function PricingFrequencyToggle({
	frequency,
	setFrequency,
	...props
}: PricingFrequencyToggleProps) {
	return (
		<div
			className={cn(
				'bg-slate-100/90 mx-auto flex w-fit rounded-full border border-slate-200/80 p-1 shadow-xs',
				props.className,
			)}
			{...props}
		>
			{frequencies.map((freq) => (
				<button
					key={freq}
					type="button"
					onClick={() => setFrequency(freq)}
					className="relative px-5 py-1.5 text-xs sm:text-sm font-semibold capitalize rounded-full transition-colors cursor-pointer"
				>
					<span
						className={cn(
							'relative z-10 transition-colors duration-200',
							frequency === freq ? 'text-white' : 'text-slate-600 hover:text-slate-900',
						)}
					>
						{freq}
					</span>
					{frequency === freq && (
						<motion.span
							layoutId="frequency"
							transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
							className="bg-slate-950 absolute inset-0 z-0 rounded-full shadow-xs"
						/>
					)}
				</button>
			))}
		</div>
	);
}

export type PricingCardProps = React.ComponentProps<'div'> & {
	plan: Plan;
	frequency?: FREQUENCY;
	onOpenGetStarted?: () => void;
};

export function PricingCard({
	plan,
	className,
	frequency = frequencies[0],
	onOpenGetStarted,
	...props
}: PricingCardProps) {
	const isCustomPrice = typeof plan.price[frequency] === 'string';
	const priceVal = plan.price[frequency];

	return (
		<div
			key={plan.name}
			className={cn(
				'relative flex w-full flex-col rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 overflow-hidden',
				plan.highlighted && 'border-emerald-500/50 shadow-[0_10px_30px_rgba(16,185,129,0.08)] ring-1 ring-emerald-500/30',
				className,
			)}
			{...props}
		>
			{plan.highlighted && (
				<BorderTrail
					className="bg-emerald-500"
					style={{
						boxShadow:
							'0px 0px 40px 15px rgba(16,185,129,0.4)',
					}}
					size={80}
				/>
			)}
			<div
				className={cn(
					'bg-slate-50/70 rounded-t-2xl border-b border-slate-100 p-6',
					plan.highlighted && 'bg-emerald-50/30',
				)}
			>
				<div className="absolute top-4 right-4 z-10 flex items-center gap-2">
					{plan.highlighted && (
						<p className="bg-emerald-50 text-emerald-700 border-emerald-200/80 flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold shadow-xs">
							<StarIcon className="h-3 w-3 fill-emerald-500 text-emerald-500" />
							Popular
						</p>
					)}
					{frequency === 'yearly' && typeof plan.price.monthly === 'number' && typeof plan.price.yearly === 'number' && (
						<p className="bg-emerald-600 text-white flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-xs">
							{Math.round(
								((plan.price.monthly * 12 - plan.price.yearly) /
									plan.price.monthly /
									12) *
									100,
							)}
							% off
						</p>
					)}
				</div>

				<div className="text-xl font-bold text-slate-900">{plan.name}</div>
				<p className="text-slate-500 text-xs sm:text-sm font-normal mt-1 min-h-[38px] leading-relaxed">
					{plan.info}
				</p>
				<div className="mt-4 flex items-baseline gap-1">
					<span className="text-3xl font-extrabold tracking-tight text-slate-900">
						{isCustomPrice
							? priceVal
							: `₹${Number(priceVal).toLocaleString('en-IN')}`}
					</span>
					<span className="text-slate-500 text-xs sm:text-sm font-medium">
						{!isCustomPrice && plan.name !== 'Free'
							? '/' + (frequency === 'monthly' ? 'month' : 'year')
							: ''}
					</span>
				</div>
			</div>

			<div
				className={cn(
					'text-slate-600 space-y-3.5 px-6 py-6 text-sm flex-1',
					plan.highlighted && 'bg-white',
				)}
			>
				{plan.features.map((feature, index) => (
					<div key={index} className="flex items-start gap-2.5">
						<CheckCircleIcon className="text-emerald-500 h-4 w-4 shrink-0 mt-0.5" />
						<TooltipProvider>
							<Tooltip delayDuration={0}>
								<TooltipTrigger asChild>
									<p
										className={cn(
											'text-slate-700 leading-snug text-xs sm:text-sm',
											feature.tooltip &&
												'cursor-pointer border-b border-dashed border-slate-300 hover:border-slate-600 transition-colors',
										)}
									>
										{feature.text}
									</p>
								</TooltipTrigger>
								{feature.tooltip && (
									<TooltipContent className="bg-slate-900 text-white text-xs border-slate-800">
										<p>{feature.tooltip}</p>
									</TooltipContent>
								)}
							</Tooltip>
						</TooltipProvider>
					</div>
				))}
			</div>

			<div
				className={cn(
					'mt-auto w-full border-t border-slate-100 p-4 bg-slate-50/50',
					plan.highlighted && 'bg-emerald-50/20',
				)}
			>
				<Button
					className={cn(
						'w-full font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer',
						plan.highlighted
							? 'bg-slate-950 text-white hover:bg-slate-800 shadow-sm'
							: 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-2xs',
					)}
					onClick={plan.btn.onClick || onOpenGetStarted}
				>
					{plan.btn.text}
				</Button>
			</div>
		</div>
	);
}

export type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION: Transition = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-emerald-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

export default PricingSection;
