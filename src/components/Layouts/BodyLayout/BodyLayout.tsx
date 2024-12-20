import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const BodyLayout = ({ children, className }: Props) => {
  return <div className={`mx-[20px] ${className || ''}`}>{children}</div>;
};

export default BodyLayout;
