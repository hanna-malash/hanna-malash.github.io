import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function safeNumber(value) {
    return typeof value === "number" && Number.isFinite(value) ? value : 0
}

export function NavIsland({ items }) {
    const location = useLocation()
    const navigate = useNavigate()

    const rootRef = useRef(null)
    const itemRefs = useRef({})

    const [indicator, setIndicator] = useState({ x: 0, w: 0, ready: false })

    const activeKey = useMemo(() => {
        // fallback: first matching by path prefix or exact
        const path = location.pathname || "/"
        let found = null
        for (let i = 0; i < items.length; i += 1) {
            const it = items[i]
            if (it.path === "/") {
                if (path === "/") found = it.key
            } else {
                if (path === it.path || path.startsWith(it.path + "/")) found = it.key
            }
        }
        if (found) return found
        return items.length > 0 ? items[0].key : null
    }, [items, location.pathname])

    function measure() {
        const root = rootRef.current
        if (!root) return
        if (!activeKey) return

        const el = itemRefs.current[activeKey]
        if (!el) return

        const rootRect = root.getBoundingClientRect()
        const elRect = el.getBoundingClientRect()

        // x relative to root content box
        const x = safeNumber(elRect.left - rootRect.left)
        const w = safeNumber(elRect.width)

        // Guard: avoid collapsing to a dot
        if (w <= 0) return

        setIndicator({ x, w, ready: true })
    }

    // Measure after first paint and whenever route changes
    useLayoutEffect(() => {
        // run twice: now + next frame (fonts/layout settle)
        measure()
        const id = window.requestAnimationFrame(() => measure())
        return () => window.cancelAnimationFrame(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeKey, items])

    // Re-measure on resize / zoom / font load
    useEffect(() => {
        const onResize = () => measure()
        window.addEventListener("resize", onResize)

        let ro = null
        if (typeof ResizeObserver !== "undefined" && rootRef.current) {
            ro = new ResizeObserver(() => measure())
            ro.observe(rootRef.current)
        }

        return () => {
            window.removeEventListener("resize", onResize)
            if (ro) ro.disconnect()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeKey])

    if (!items || items.length === 0) return null

    return (
        <div className="nav-island" ref={rootRef}>
            <div
                className="nav-island__indicator"
                style={{
                    width: indicator.ready ? indicator.w : 0,
                    transform: indicator.ready ? "translateX(" + indicator.x + "px)" : "translateX(0px)",
                    opacity: indicator.ready ? 1 : 0,
                }}
                aria-hidden="true"
            />
            {items.map((it) => {
                const isActive = it.key === activeKey
                return (
                    <button
                        key={it.key}
                        ref={(node) => {
                            if (node) itemRefs.current[it.key] = node
                        }}
                        className={"nav-island__item" + (isActive ? " is-active" : "")}
                        type="button"
                        onClick={() => navigate(it.path)}
                    >
                        {it.label}
                    </button>
                )
            })}
        </div>
    )
}
