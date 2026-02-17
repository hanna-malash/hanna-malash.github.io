import React, {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
} from "react"
import { NavLink, useLocation } from "react-router-dom"

export function NavIsland({ routes, renderLabel }) {
    const location = useLocation()
    const containerRef = useRef(null)
    const itemRefs = useRef({})

    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0,
    })

    const activeRoute = routes.find((r) =>
        location.pathname === r.path
    )

    const measure = useCallback(() => {
        if (!activeRoute) return
        const container = containerRef.current
        const activeEl = itemRefs.current[activeRoute.key]

        if (!container || !activeEl) return

        const containerRect = container.getBoundingClientRect()
        const activeRect = activeEl.getBoundingClientRect()

        setIndicator({
            left: activeRect.left - containerRect.left,
            width: activeRect.width,
        })
    }, [activeRoute])

    useLayoutEffect(() => {
        measure()
    }, [measure])

    useLayoutEffect(() => {
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [measure])

    return (
        <div ref={containerRef} className="nav-island">
            {routes.map((r) => {
                const isActive = location.pathname === r.path

                return (
                    <NavLink
                        key={r.key}
                        to={r.path}
                        ref={(el) => (itemRefs.current[r.key] = el)}
                        className={`nav-island__item ${
                            isActive ? "is-active" : ""
                        }`}
                    >
                        {renderLabel(r)}
                    </NavLink>
                )
            })}

            <div
                className="nav-island__indicator"
                style={{
                    transform: `translateX(${indicator.left}px)`,
                    width: indicator.width,
                }}
            />
        </div>
    )
}
