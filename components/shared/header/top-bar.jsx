import { Mail, Phone } from "lucide-react";

function InstagramMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r=".8" fill="currentColor" />
    </svg>
  );
}
function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M14 8.2V6.8c0-.7.5-.9.9-.9H17V3h-2.8C11.4 3 10 4.7 10 7.1v1.1H8v3.1h2V21h3.3v-9.7h2.7l.4-3.1H14Z" />
    </svg>
  );
}

export function TopBar() {
  return (
    <div className="bg-deepTeal text-white text-xs">
      <div className="container-lux flex h-9 items-center justify-between">
        <div className="flex gap-5">
          <span className="flex items-center gap-2">
            <Mail size={13} />
            info@livarostudio.com
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <Phone size={13} />
            +91 9314-00-3146
          </span>
        </div>
        <div className="flex items-center gap-3 text-white/85">
          <span className="hidden md:inline tracking-[.22em] uppercase text-[10px]">
            Follow
          </span>
          <InstagramMark />
          <FacebookMark />
        </div>
      </div>
    </div>
  );
}
