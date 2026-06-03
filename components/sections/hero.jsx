'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { img } from '@/lib/constants';
import { fadeUp } from '@/lib/animations';

export function Hero(){return <section className="relative min-h-[88vh] overflow-hidden texture noise">
 <div className="container-lux grid min-h-[88vh] items-center gap-12 py-14 lg:grid-cols-[.86fr_1.14fr]">
  <motion.div initial="hidden" animate="visible" variants={fadeUp}>
   <div className="flex items-center gap-4"><span className="gold-line"/><p className="label">Luxury Modular Interiors</p></div>
   <h1 className="h1 mt-6 max-w-2xl">Crafted Spaces For Modern Living</h1>
   <p className="muted mt-6 max-w-xl text-base leading-8">Premium modular kitchens, wardrobes and custom furniture shaped with timeless aesthetics, warm materials and functional precision.</p>
   <div className="mt-9 flex flex-wrap gap-4"><Link href="/projects" className="btn-primary">Explore Projects <ArrowRight size={16}/></Link><Link href="/contact" className="btn-secondary">Book Consultation</Link></div>
   <div className="mt-12 grid max-w-lg grid-cols-3 gap-3 text-sm"><div className="lux-card rounded-2xl p-4"><b>250+</b><span className="block text-xs text-ink/55">Projects</span></div><div className="lux-card rounded-2xl p-4"><b>10+</b><span className="block text-xs text-ink/55">Years</span></div><div className="lux-card rounded-2xl p-4"><b>100%</b><span className="block text-xs text-ink/55">Custom</span></div></div>
  </motion.div>
  <motion.div initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}} className="relative h-[540px] max-lg:h-[460px]">
   <div className="image-frame absolute right-0 top-0 h-[500px] w-[78%] rounded-[42px] shadow-luxury"><Image src={img.hero} alt="Luxury kitchen interior" fill priority className="object-cover"/></div>
   <div className="image-frame absolute bottom-3 left-0 h-[265px] w-[42%] rounded-[30px] border-[10px] border-[#fbfaf7] shadow-luxury"><Image src={img.heroSide} alt="Warm interior detail" fill className="object-cover"/></div>
   <div className="lux-card absolute bottom-12 right-10 rounded-3xl p-6 max-w-[230px]"><p className="text-4xl font-medium tracking-[-.05em]">10+</p><p className="mt-1 text-sm text-ink/60">Years of thoughtful design, refined execution and premium modular craftsmanship.</p></div>
  </motion.div>
 </div>
</section>}
