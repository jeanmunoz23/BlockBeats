import React, { FC } from "react";

interface WhyChooseCardProps {
  title: string;
  children: any;
}

export const WhyChooseCard: FC<WhyChooseCardProps> = ({ children, title = "" }) => (
  <div>
    <h6>{title}</h6>
    {children}
  </div>
);
