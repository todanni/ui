import React from 'react';
import { ShadowCard } from '../layout';
import { PlanPanelSelection } from './PlanPanelSelection';

const selections = [
  'overview',
  'income',
  'spending',
  'debt',
  'savings',
] as const;

export type PlanPanelSelectProps = {
  selected: (typeof selections)[number];
  onClick: (panel: string) => void;
};

export const PlanPanelSelect = ({
  selected,
  onClick,
}: PlanPanelSelectProps) => {
  return (
    <ShadowCard>
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
    </ShadowCard>
  );
};
