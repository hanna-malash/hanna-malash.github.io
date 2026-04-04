export function IconButton({ ariaLabel, onClick, children, buttonRef, className = "" }) {
    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            ref={buttonRef}
            className={["icon-button", className].filter(Boolean).join(" ")}
        >
            {children}
        </button>
    )
}
