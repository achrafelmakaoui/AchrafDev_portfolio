import React from "react"
import "./Ripple.css"
import Blogo from '../../images/blackLogo.webp'
import Wlogo from '../../images/whiteLogo.webp'
import { useTheme } from '../../../ThemeContext';

const Ripple = React.memo(function Ripple({
  mainCircleSize = 125,
  mainCircleOpacity = 0.24,
  numCircles = 12,
  className,
  ...props
}) {
  return (
    <div className={`ripple-container ${className || ""}`} {...props}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid"
        const borderOpacity = 5 + i * 5

        return (
          <div
            key={i}
            className="ripple-circle"
            style={{ width: `${size}px`, height: `${size}px`, opacity, borderStyle, borderWidth: "1px", borderColor: `rgba(var(--foreground-rgb), ${borderOpacity / 100})`}}
          />
        )
      })}
    </div>
  )
})

export default function RippleDemo() {
  const { theme } = useTheme();

  return (
    <div className="ripple-demo">
      <div className="logo-container">
        {theme==='light' && <><img src={Blogo} loading="lazy" alt="Achraf El Makaoui Logo" title="Achraf El Makaoui Logo" width={75} height='auto'/></>}
        {theme==='dark' && <><img src={Wlogo} loading="lazy" alt="Achraf El Makaoui Logo" title="Achraf El Makaoui Logo" width={75} height='auto'/></>}
      </div>
      <Ripple />
    </div>
  )
}
