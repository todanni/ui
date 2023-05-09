import React from 'react';
import { PlanPanelSelection } from './panel/PlanPanelSelection';

const selections = [
  'overview',
  'income',
  'spending',
  'debt',
  'savings',
] as const;

export type Selection = (typeof selections)[number];

export type PlanPanelSelectProps = {
  selected: Selection;
  onClick: (panel: Selection) => void;
};

export const PlanPanelSelect = ({
  selected,
  onClick,
}: PlanPanelSelectProps) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      <div className="grid auto-cols-fr grid-cols-5">
        {selections.map((selection) => (
          <PlanPanelSelection
            key={selection}
            selected={selected === selection}
            panel={selection}
            onClick={() => onClick(selection)}
          />
        ))}
      </div>
    </div>
  );
};
