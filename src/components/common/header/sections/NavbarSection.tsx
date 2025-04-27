import Link from "next/link";

const NavbarSection = () => (
  <nav className="flex items-center justify-evenly lg:gap-6 md:gap-3 text-[14px] lg:text-[16px] md:text-[12px] h-full relative">
    {/* رزرو سریع */}
    <div className="relative group flex items-center h-full">
      <Link
        href="/quick-reserve"
        className="text-subText transition-colors flex items-center lg:gap-1 pb-1 h-full group-hover:text-primary"
      >
        رزرو سریع
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-3 md:h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        {/* بردر پایین */}
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
      </Link>
      {/* دراپ‌داون رزرو سریع */}
      <div className="absolute top-full right-0 w-48 bg-subBg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        <div className="py-2">
          <Link
            href="/quick-reserve/daily"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            رزرو روزانه
          </Link>
          <Link
            href="/quick-reserve/monthly"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            رزرو ماهانه
          </Link>
          <Link
            href="/quick-reserve/yearly"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            رزرو سالانه
          </Link>
        </div>
      </div>
    </div>
    {/* رهن و اجاره */}
    <div className="relative group flex items-center h-full">
      <Link
        href="/rent"
        className="text-subText transition-colors flex items-center lg:gap-1 pb-1 h-full group-hover:text-primary"
      >
        رهن و اجاره
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-3 md:h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        {/* بردر پایین */}
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
      </Link>
      {/* دراپ‌داون رهن و اجاره */}
      <div className="absolute top-full right-0 w-48 bg-subBg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        <div className="py-2">
          <Link
            href="/rent/apartment"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            آپارتمان
          </Link>
          <Link
            href="/rent/villa"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            ویلا
          </Link>
          <Link
            href="/rent/office"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            دفتر کار
          </Link>
          <Link
            href="/rent/store"
            className="block px-4 py-2 text-subText hover:bg-subBg2 transition-colors md:text-[12px]"
          >
            مغازه
          </Link>
        </div>
      </div>
    </div>

    {/* درباره ما */}
    <div className="group flex items-center h-full relative">
      <Link
        href="/about"
        className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
      >
        درباره ما
        {/* بردر پایین */}
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
      </Link>
    </div>
    {/* مقالات ما */}
    <div className="group flex items-center h-full relative">
      <Link
        href="/articles"
        className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
      >
        مقالات ما
        {/* بردر پایین */}
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
      </Link>
    </div>
    {/* تماس با ما */}
    <div className="group flex items-center h-full relative">
      <Link
        href="/contact"
        className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
      >
        تماس با ما
        {/* بردر پایین */}
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
      </Link>
    </div>
    <Link
      href="/become-seller"
      className="bg-accent text-foreground lg:w-[138px] h-[80%] px-4 py-1.5 rounded-[10px] hover:opacity-90 transition-opacity flex items-center justify-center lg:text-[14px] md:text-[12px] md:px-3 md:py-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5 ml-1"
      >
        <path d="M2 10V7a2 2 0 012-2h2.382a2 2 0 001.447-.618l2.382-2.618A1 1 0 0112 3v14a1 1 0 01-1.789.707l-2.382-2.618A2 2 0 016.382 15H4a2 2 0 01-2-2v-3z" />
        <path d="M15 8v4" strokeLinecap="round" />
        <path d="M17 9v2" strokeLinecap="round" />
      </svg>
      !فروشنده شو
    </Link>
  </nav>
);

export default NavbarSection;
