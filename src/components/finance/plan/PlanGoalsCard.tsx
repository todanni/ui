import React from 'react';
import { PlanGoalProgress } from './PlanGoalProgress';
import { PlanPanelCard } from './PlanPanelCard';

export type PlanGoalsCardProps = {
  title: string;
  noGoalsText: string;
  progressColour: 'savings' | 'spending' | 'income' | 'debt';
  loading: boolean;
  goals?: {
    name: string;
    target: number;
    amount: number;
  }[];
};

export const PlanGoalsCard = ({
  title,
  progressColour,
  goals,
  noGoalsText,
  loading,
}: PlanGoalsCardProps) => {
  return (
    <PlanPanelCard icon="goal" title={title} endButton="plus">
      {!goals && (
        <>
          <h1 className="text-white">You haven&apos;t set any goals yet.</h1>
          <PlanGoalProgress
            target={100}
            amount={50}
            category="example"
            text={noGoalsText}
            displayMessage={false}
          />
        </>
      )}
      {goals?.map((goal, index) => (
        <PlanGoalProgress
          key={index}
          target={goal.target}
          amount={goal.amount}
          category={progressColour}
          text={goal.name}
          displayMessage={true}
        />
      ))}
    </PlanPanelCard>
  );
};
