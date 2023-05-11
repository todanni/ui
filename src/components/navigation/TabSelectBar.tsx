import React from 'react';
import { IconObject } from '../icons';
import { Card } from '../cards';
import { TabButton } from '../buttons';

export type TabSelectBarProps = {
  tabs?: {
    title: string;
    icon: IconObject;
    fill: 'default' | 'green' | 'yellow' | 'red' | 'blue';
  }[];
  onClick: (tab: string) => void;
  selected: string;
};

export const TabSelectBar = ({
  tabs,
  selected,
  onClick,
}: TabSelectBarProps) => {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 p-2">
        <div className="grid auto-cols-fr grid-cols-5">
          {tabs?.map((tab, index) => (
            <TabButton
              key={`${index}-tab`}
              selected={tab.title === selected}
              text={tab.title}
              icon={tab.icon}
              fill={tab.fill}
              onClick={() => onClick(tab.title)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
