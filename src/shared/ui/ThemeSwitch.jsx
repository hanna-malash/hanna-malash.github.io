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
                        <path
                            d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Zm0-16v2m0 16v2m10-10h-2M4 12H2m17.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m0-12.02l1.41 1.41m12.02 12.02l1.41 1.41"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
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
