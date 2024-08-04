import React, { FC } from "react";

interface WhyChooseCardProps {
  title: string;
  description: string;
  children: any;
}

export const WhyChooseCard: FC<WhyChooseCardProps> = ({ children, title = "", description = "" }) => (
  <div>
    <h6>{title}</h6>
    <p className="subP">{description}</p>
    {children}
  </div>
);
