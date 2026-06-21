export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export const softFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

export const premiumEase = [0.22, 1, 0.36, 1] as const

export const premiumTransition = {
  duration: 0.62,
  ease: premiumEase,
}
