import React from 'react';
import { PlanGoalProgress } from './PlanGoalProgress';
import { PlanPanelCard } from './PlanPanelCard';

export type PlanGoal = {
  category: 'income' | 'spending' | 'debt' | 'savings';
  goal: number;
  amount: number;
};

export type PlanGoalsCardProps = {
  goals: PlanGoal[];
};

export const PlanGoalsCard = ({ goals }: PlanGoalsCardProps) => {
  return (
    <PlanPanelCard title="Goals" icon="goal" footerEnd="Goals met: 1/4">
      <div className="flex flex-col gap-2">
        {goals.map((goal) => (
          <PlanGoalProgress
            key={goal.category}
            category={goal.category}
            target={goal.goal}
            amount={goal.amount}
          />
        ))}
      </div>
    </PlanPanelCard>
  );
};
