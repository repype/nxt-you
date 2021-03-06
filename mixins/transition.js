let firstPaint = true
let onPageEnter = null
let onPageLeave = null

export default {
  mounted() {
    const tl = () =>
      this.$gsap.timeline({
        paused: true,
        defaults: { duration: 1.4, ease: 'Power3.easeInOut' },
      })
    onPageEnter = tl()
      .set('[data-transition-layout]', {
        autoAlpha: 0,
        y: 40,
      })
      .to('[data-transition-dark]', { height: 0 }, 0.1)
      .to('[data-transition-logo]', { autoAlpha: 0, y: 40 }, 0)
      .to('[data-transition-light]', { height: 0 }, 0.5)
      .to(
        '[data-transition-layout]',
        {
          autoAlpha: 1,
          y: 0,
        },
        0.8
      )

    onPageLeave = tl()
      .set('[data-transition-logo]', { autoAlpha: 0, y: 40 })
      .to(
        '[data-transition-layout]',
        {
          autoAlpha: 0,
          y: 80,
          ease: 'Power3.easeOut',
        },
        0
      )
      .to('[data-transition-logo]', { autoAlpha: 1, y: 0 }, 0.8)
      .to(
        '[data-transition-dark]',
        { transformOrigin: 'bottom', height: '100vh' },
        0.4
      )
      .to(
        '[data-transition-light]',
        { transformOrigin: 'bottom', height: '100vh' },
        0
      )
  },
  transition: {
    css: false,
    mode: 'out-in',
    appear: true,
    leave(el, done) {
      onPageLeave.play().then(() => {
        this.$nuxt.$emit('toggle-menu', { active: false, ease: false })
        done()
      })
    },
    enter(el, done) {
      done()
    },
    afterEnter() {
      if (firstPaint) {
        firstPaint = false
        this.$nuxt.$emit('layout-loaded', () => onPageEnter.play())
      } else {
        onPageEnter.play()
      }
    },
  },
}
