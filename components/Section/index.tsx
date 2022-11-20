import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  centered?: boolean;
}

function Section({
  id,
  children,
  centered
}: SectionProps) {
  return (
    <div className="mb-[15vh] w-full before:content-[''] before:block before:mt-[-70px] before:h-[70px] before:w-full before:visible pointer-events-none" id={id}>
      {children}
    </div>
  );
}

export default Section;
