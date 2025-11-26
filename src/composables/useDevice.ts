import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(false)
  const isDesktop = ref(true)
  const currentBreakPoint = ref<'lg' | 'md' | 'sm' | 'xs'>('lg')
  const breakpoint = 768 // md breakpoint in Tailwind CSS

  const updateDevice = () => {
    const width = window.innerWidth
    isMobile.value = width < breakpoint
    isDesktop.value = width >= breakpoint

    // Update breakpoint
    if (width >= 1024) {
      currentBreakPoint.value = 'lg'
    } else if (width >= 768) {
      currentBreakPoint.value = 'md'
    } else if (width >= 480) {
      currentBreakPoint.value = 'sm'
    } else {
      currentBreakPoint.value = 'xs'
    }

    // Update CSS classes on document body
    document.body.classList.toggle('is-mobile', isMobile.value)
    document.body.classList.toggle('is-desktop', isDesktop.value)
  }

  onMounted(() => {
    updateDevice()
    window.addEventListener('resize', updateDevice)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDevice)
  })

  return {
    isMobile,
    isDesktop,
    currentBreakPoint
  }
}