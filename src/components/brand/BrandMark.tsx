export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-9 items-center justify-center text-sd-navy">
        <svg viewBox="0 0 42 30" className="size-9" aria-hidden="true">
          <path
            d="M7 24c5.7 0 5.7-7.4 11.4-7.4S24.1 24 29.8 24 35.5 16.6 41 16.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3.2"
          />
          <path
            d="M2 14.2C5.5 7.5 12.2 5.8 18.3 9c2.5-5.9 10.7-6.7 14.4-1.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3.2"
          />
        </svg>
      </div>
      <span className="text-[18px] font-semibold tracking-[0.26em] text-sd-navy max-sm:text-[15px]">
        SLEEP DIVING
      </span>
    </div>
  )
}
