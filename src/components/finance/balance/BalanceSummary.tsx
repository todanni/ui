import React from 'react';
import { ShadowCard } from '../layout';
import { BalanceCard } from './BalanceCard';
import { IconObject } from '~/components/common/icons/iconMapping';

export type BalanceSummaryProps = {
  cards: {
    title: string;
    balance: number;
    type: IconObject;
  }[];
};

export const BalanceSummary = ({ cards }: BalanceSummaryProps) => {
  return (
    <ShadowCard>
      <div>
        <BalanceCard
          contents={{
            title: '',
            totalPayments: 0,
            sources: undefined,
            totalBalance: undefined,
            totalBalanceText: undefined,
          }}
        ></BalanceCard>
      </div>
    </ShadowCard>
  );
};
