import React from 'react';
import { PlanGoalProgress } from './PlanGoalProgress';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';

const noGoalsText = "You haven't set goals yet.";

export type PlanSavingsGoalsProps = {
  goals?: {
    name: string;
    target: number;
    amount: number;
  }[];
};

export const PlanSavingsGoals = ({ goals }: PlanSavingsGoalsProps) => {
  return (
    <PlanPanelCard icon="goal" title="Savings goals" endButton="plus">
      {!goals && (
        <>
          <h1 className="text-white">{noGoalsText}</h1>
          <PlanGoalProgress
            target={100}
            amount={50}
            category="example"
            text="Example: Contribute 100£ to Cash ISA"
            displayMessage={true}
          />
        </>
      )}
      {goals?.map((goal, index) => (
        <PlanGoalProgress
          key={index}
          target={goal.target}
          amount={goal.amount}
          category="savings"
          text={goal.name}
          displayMessage={true}
        />
      ))}
    </PlanPanelCard>
  );
};
