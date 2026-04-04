import React from "react"

export function ThemeSwitch({ value, onChange, ariaLabel }) {
    const isDark = value === "dark"
    function toggle() {
        onChange(isDark ? "light" : "dark")
    }

    return (
        <button
            type="button"
            className={"theme-switch" + (isDark ? " is-dark" : "")}
            aria-label={ariaLabel || "Toggle theme"}
            aria-pressed={isDark}
            onClick={toggle}
        >
            <span className="theme-switch__track" aria-hidden="true" />
            <span className="theme-switch__thumb" aria-hidden="true">
                <span className="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 2.75v2.1M12 19.15v2.1M21.25 12h-2.1M4.85 12h-2.1M18.54 5.46l-1.49 1.49M6.95 17.05l-1.49 1.49M18.54 18.54l-1.49-1.49M6.95 6.95L5.46 5.46" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </span>
                <span className="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                            d="M21 14.2A7.2 7.2 0 0 1 9.8 3a8.9 8.9 0 1 0 11.2 11.2Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </span>
        </button>
    )
}
