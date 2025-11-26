<template>
  <button
    :style="buttonStyles"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    class="responsive-button"
  >
    <slot name="prefix" />
    <span v-if="text" :class="{ 'ml-2': hasPrefix, 'mr-2': hasSuffix }">{{ text }}</span>
    <slot name="suffix" />
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

interface ResponsiveSize {
  default?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}

interface Props {
  text: string
  width?: string | number | ResponsiveSize
  height?: string | number | ResponsiveSize
  backgroundColor?: string
  textColor?: string
  fontSize?: string | number | ResponsiveSize
  fontWeight?: string
  border?: string
  radius?: string | number
  gradientColors?: string[]
  disabled?: boolean
  onClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#3b82f6',
  textColor: '#ffffff',
  fontSize: '16px',
  fontWeight: 'normal',
  radius: '20px',
  border: 'none',
  gradientColors: undefined,
  disabled: false,
  onClick: undefined
})

// 輔助函數：將數字轉換為 px 字符串
const formatSize = (size: string | number): string => {
  return typeof size === 'number' ? `${size}px` : size
}

// 輔助函數：處理響應式尺寸
const getResponsiveStyles = (prop: string | number | ResponsiveSize | undefined, cssProperty: string) => {
  if (!prop) return {}

  // 如果是簡單的字符串或數字
  if (typeof prop === 'string' || typeof prop === 'number') {
    return { [cssProperty]: formatSize(prop) }
  }

  // 如果是響應式對象，設置 default 值（其他斷點通過 CSS 變數處理）
  const styles: Record<string, string> = {}

  if (prop.sm) styles[`--${cssProperty}-sm`] = formatSize(prop.sm)
  if (prop.md) styles[`--${cssProperty}-md`] = formatSize(prop.md)
  if (prop.lg) styles[`--${cssProperty}-lg`] = formatSize(prop.lg)
  if (prop.xl) styles[`--${cssProperty}-xl`] = formatSize(prop.xl)
  if (prop.default) styles[`--${cssProperty}-default`] = formatSize(prop.default)

  return styles
}

// 輔助函數：生成響應式類
const getResponsiveClasses = (prop: string | number | ResponsiveSize | undefined, prefix: string) => {
  const classes: string[] = []

  if (!prop || typeof prop === 'string' || typeof prop === 'number') {
    return classes
  }

  // 生成響應式類
  if (prop.sm) classes.push(`sm:${prefix}-[${formatSize(prop.sm)}]`)
  if (prop.md) classes.push(`md:${prefix}-[${formatSize(prop.md)}]`)
  if (prop.lg) classes.push(`lg:${prefix}-[${formatSize(prop.lg)}]`)
  if (prop.xl) classes.push(`xl:${prefix}-[${formatSize(prop.xl)}]`)

  return classes
}

const buttonStyles = computed(() => {
  const styles: Record<string, string> = {}

  // 響應式寬度
  Object.assign(styles, getResponsiveStyles(props.width, 'width'))

  // 響應式高度
  Object.assign(styles, getResponsiveStyles(props.height, 'height'))

  // 圓角
  if (props.radius) {
    styles.borderRadius = typeof props.radius === 'number' ? `${props.radius}px` : props.radius
  }

  // 背景 - 漸層優先於單色
  if (props.gradientColors && props.gradientColors.length >= 2) {
    styles.background = `linear-gradient(135deg, ${props.gradientColors.join(', ')})`
  } else {
    styles.backgroundColor = props.backgroundColor
  }

  // 文字顏色
  styles.color = props.textColor

  // 文字粗細
  styles.fontWeight = props.fontWeight

  // 文字大小
  Object.assign(styles, getResponsiveStyles(props.fontSize, 'fontSize'))

  // 邊框
  styles.border = props.border

  return styles
})

const buttonClasses = computed(() => {
  const classes = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-md',
    'transition-all',
    'duration-200',
    'cursor-pointer'
  ]

  // 添加響應式寬度類
  classes.push(...getResponsiveClasses(props.width, 'w'))

  // 添加響應式高度類
  classes.push(...getResponsiveClasses(props.height, 'h'))

  if (!props.disabled) {
    classes.push('hover:opacity-80', 'hover:scale-105', 'active:scale-95')
  } else {
    classes.push('opacity-50', 'cursor-not-allowed')
  }

  return classes
})

const hasPrefix = computed(() => !!slots.prefix)
const hasSuffix = computed(() => !!slots.suffix)

const handleClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick()
  }
}
</script>

<style scoped>
.responsive-button {
  @media (min-width: 320px) {
    width: var(--width-default);
    height: var(--height-default);
    font-size: var(--fontSize-default);
  }

  @media (min-width: 640px) {
    width: var(--width-sm, var(--width-default));
    height: var(--height-sm, var(--height-default));
    font-size: var(--fontSize-sm, var(--fontSize-default));
  }

  @media (min-width: 768px) {
    width: var(--width-md, var(--width-sm, var(--width-default)));
    height: var(--height-md, var(--height-sm, var(--height-default)));
    font-size: var(--fontSize-md, var(--fontSize-sm, var(--fontSize-default)));
  }

  @media (min-width: 1024px) {
    width: var(--width-lg, var(--width-md, var(--width-sm, var(--width-default))));
    height: var(--height-lg, var(--height-md, var(--height-sm, var(--height-default))));
    font-size: var(--fontSize-lg, var(--fontSize-md, var(--fontSize-sm, var(--fontSize-default))));
  }

  @media (min-width: 1280px) {
    width: var(--width-xl, var(--width-lg, var(--width-md, var(--width-sm, var(--width-default)))));
    height: var(--height-xl, var(--height-lg, var(--height-md, var(--height-sm, var(--height-default)))));
    font-size: var(--fontSize-xl, var(--fontSize-lg, var(--fontSize-md, var(--fontSize-sm, var(--fontSize-default)))));
  }
}
</style>