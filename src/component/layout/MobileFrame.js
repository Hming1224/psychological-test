"use client";

export default function MobileFrame({ children }) {
  return (
    <>
      <div className="w-[33%] h-[85%] min-w-[380px] min-h-[600px] bg-white rounded-2xl flex items-center justify-center flex-col  p-6 relative overflow-hidden">
        {children}
      </div>
    </>
  );
}
