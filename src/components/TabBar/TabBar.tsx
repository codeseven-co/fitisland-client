'use client';
import React from 'react';
import Arrow from 'public/home/arrow.svg';

type TabBarProps = {
  name: string;
  onClickBack?: () => void;
};

const TabBar = ({ name, onClickBack }: TabBarProps) => {
  return (
    <div className="h-[60px] border-b-[1px] border-solid border-[#404040] flex items-center relative">
      {onClickBack && (
        <div
          className="w-[48px] h-[48px] flex justify-center items-center absolute"
          onClick={onClickBack}
        >
          <Arrow className="cursor-pointer" />
        </div>
      )}
      <p className="w-full text-center">{name}</p>
      <div className="w-[48px] h-[48px] flex justify-center items-center absolute right-0"></div>
    </div>
  );
};

export default TabBar;
