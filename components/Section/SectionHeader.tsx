import React, { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  underlined?: boolean;
}

function SectionHeader(props: SectionHeaderProps) {
  const { children, underlined } = props;
  return (
    <div className="flex flex-col items-center">
      <h2 className="leading-[1.2] text-[56px] uppercase font-[Silkscreen] font-[400]">
        {children}
      </h2>
      {underlined && <hr className="w-[360px] mb-[26px] max-w-full" />}
    </div>
  );
}

export default SectionHeader;
