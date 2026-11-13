import { watchlist } from "@/content/resume";

export function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mx-0 lg:max-w-[320px]">
      <div className="animate-float rounded-[2.25rem] border border-border bg-[#090a0d] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-[1.85rem] border border-border/80 bg-surface">
          <div className="flex items-center justify-between px-5 pb-2 pt-3.5 text-[10px] font-mono text-muted">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-foreground/20" />
            <span className="animate-tick text-accent">● live</span>
          </div>

          <div className="space-y-4 px-5 pb-6 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Tiqs
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                  Nifty 50
                </p>
              </div>
              <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] text-accent">
                +0.82%
              </span>
            </div>

            <div>
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                24,186.40
              </p>
              <p className="mt-1 font-mono text-xs text-accent">+196.25 today</p>
            </div>

            <svg
              viewBox="0 0 240 72"
              className="h-16 w-full"
              role="img"
              aria-label="Illustrative intraday sparkline"
            >
              <defs>
                <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#D6FF3F" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#D6FF3F" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 52 C18 48, 28 58, 42 44 C58 28, 70 36, 86 30 C104 22, 118 40, 136 28 C154 16, 168 24, 186 18 C204 12, 220 26, 240 14 L240 72 L0 72 Z"
                fill="url(#sparkFill)"
              />
              <path
                d="M0 52 C18 48, 28 58, 42 44 C58 28, 70 36, 86 30 C104 22, 118 40, 136 28 C154 16, 168 24, 186 18 C204 12, 220 26, 240 14"
                fill="none"
                stroke="#D6FF3F"
                strokeWidth="2.25"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-2.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Watchlist
              </p>
              {watchlist.map((item) => (
                <div
                  key={item.symbol}
                  className="flex items-center justify-between rounded-xl border border-border/70 bg-background/60 px-3 py-2.5"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.symbol}
                    </p>
                    <p className="font-mono text-[11px] text-muted">{item.price}</p>
                  </div>
                  <span
                    className={`font-mono text-xs ${
                      item.up ? "text-accent" : "text-[#ff7b7b]"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
