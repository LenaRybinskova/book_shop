import type { ComponentPropsWithoutRef, ElementType } from "react"
import styles from "./Button.module.css"

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  variant?: "button" | "link"
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType = "button">({ as, className, variant = "button", ...restProps }: ButtonProps<T>) {
  const Component = as ?? "button"

  return (
    <Component
      className={`${styles.button} ${styles[variant]} ${className}`}{...restProps} />
  )
}
