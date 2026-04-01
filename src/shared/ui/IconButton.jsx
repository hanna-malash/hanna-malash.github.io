export function IconButton({ ariaLabel, onClick, children }) {
    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            className="icon-button"
        >
            {children}
        </button>
    )
}
