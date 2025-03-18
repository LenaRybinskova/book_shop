import styles from "./Modal.module.css"
import type { ReactNode } from "react"
import { createPortal } from "react-dom"


type Props = {
  open: boolean
  children: ReactNode
}

export const Modal = ({ open, children }: Props) => {
  return (
    <>
      {open && (
        <div>
          {createPortal(
            <div className={styles.overlay}>
              {children}
            </div>,
            document.body
          )}
        </div>
      )}
    </>
  )
}



