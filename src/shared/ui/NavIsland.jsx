import React, { useLayoutEffect, useMemo, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export function NavIsland({ items, measureKey }) {
    const location = useLocation()
    const navigate = useNavigate()

    const containerRef = useRef(null)
    const itemRefs = useRef({})

    const [indicator, setIndicator] = useState({ x: 0, w: 0, ready: false })

    const activePath = useMemo(() => {
        const found = items.find((i) => i.path === location.pathname)
        if (found) return found.path
        return items.length > 0 ? items[0].path : "/"
    }, [location.pathname, items])

    function measure() {
        const container = containerRef.current
        const activeEl = itemRefs.current[activePath]
        if (!container || !activeEl) {
            setIndicator({ x: 0, w: 0, ready: false })
            return
        }
        const c = container.getBoundingClientRect()
        const r = activeEl.getBoundingClientRect()
        const x = Math.max(0, Math.round(r.left - c.left))
        const w = Math.max(0, Math.round(r.width))
        setIndicator({ x, w, ready: w > 0 })
    }

    useLayoutEffect(() => {
        const raf = requestAnimationFrame(() => measure())
        return () => cancelAnimationFrame(raf)
    }, [activePath, measureKey])

    useLayoutEffect(() => {
        function onResize() { measure() }
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [activePath, measureKey])

    return (
        <div className="nav-island" ref={containerRef}>
            <div
                className="nav-island__indicator"
                style={{
                    width: indicator.w ? `${indicator.w}px` : "0px",
                    transform: `translateX(${indicator.x}px)`,
                    opacity: indicator.ready ? 1 : 0,
                }}
                aria-hidden="true"
            />
            {items.map((it) => {
                const isActive = it.path === activePath
                return (
                    <button
                        key={it.key}
                        type="button"
                        className={`nav-island__item${isActive ? " is-active" : ""}`}
                        ref={(el) => { if (el) itemRefs.current[it.path] = el }}
                        onClick={() => navigate(it.path)}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {it.label}
                    </button>
                )
            })}
        </div>
    )
}
