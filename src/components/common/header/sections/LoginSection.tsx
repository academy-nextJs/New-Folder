import Link from "next/link";

const LoginSection = () => (
  <div className="flex items-center justify-end gap-2 text-[10px] lg:text-[16px] md:text-[11px] ml-7">
    <Link
      href="/login"
      className="text-subText hover:text-primary transition-colors flex items-center gap-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
      <span>ورود / ثبت نام</span>
    </Link>
  </div>
);

export default LoginSection;
