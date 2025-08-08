// src/components/CallNowBar.jsx
export default function CallNowBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 h-16 bg-primary dark:bg-gray-900 text-white dark:text-gray-200 md:hidden z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
      <a
        href="tel:5551234567"
        className="h-full w-full px-5 flex items-center justify-center gap-2 font-semibold text-lg hover:text-accent transition-colors leading-none"
        role="button"
        aria-label="Call us now"
      >
        {/* phone icon to avoid font/emoji layout changes */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17.78 17.78 0 012 6a1 1 0 011-1h3.61a1 1 0 011 1c0 1.22.2 2.42.57 3.56a1 1 0 01-.24 1.01l-2.32 2.22z"/>
        </svg>
        <span>Call Us Now</span>
      </a>
    </div>
  );
}
