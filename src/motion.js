import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

let lenis = null

export const startScroll = () => {
  if (lenis || reduced()) return
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add(t => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

export const scrollTo = (target, immediate = false) => {
  if (lenis) return lenis.scrollTo(target, { immediate, duration: 1.4, force: true })
  if (typeof target === 'number') return window.scrollTo(0, target)
  target.scrollIntoView()
}

export const stopScroll = stop => lenis && (stop ? lenis.stop() : lenis.start())

export const whenIdle = (scope, build) => {
  if (reduced()) return () => {}
  let ctx
  const run = () => { ctx = gsap.context(build, scope) }
  const id = window.requestIdleCallback ? requestIdleCallback(run, { timeout: 1500 }) : setTimeout(run, 300)
  return () => {
    window.cancelIdleCallback ? cancelIdleCallback(id) : clearTimeout(id)
    if (ctx) ctx.revert()
  }
}
