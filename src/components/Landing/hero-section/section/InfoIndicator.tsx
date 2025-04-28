import React from "react";

const InfoIndicator = () => {
  return (
    <div className="absolute top-1/3 right-12 text-right">
      <div className="mb-4">
        <p className="text-foreground text-xl mb-1">بیش از ۷۰۰۰+</p>
        <p className="text-xs text-muted">ثبت ملک جدید در هر روز</p>
      </div>

      <div className="flex justify-end">
        <div className="bg-black/30 backdrop-blur-sm p-3 rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V18M18 12H6"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InfoIndicator;
