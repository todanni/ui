import React from 'react';

export type PlanBalanceTableProps = {
  categories: BalanceCategory[];
};

export type BalanceCategory = {
  name: string;
  balances?: BalanceTotal[];
};

export type BalanceTotal = {
  name: string;
  balance: number;
  paymentsTotal: number;
  interestTotal: number;
};

export const PlanBalanceTable = ({ categories }: PlanBalanceTableProps) => {
  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <CategoryTotalRow
          key={category.name}
          name={category.name}
          balances={category.balances}
        />
      ))}
    </div>
  );
};

const CategoryTotalRow = ({ name, balances }: BalanceCategory) => {
  return (
    <>
      {balances?.map((balance) => (
        <SubCategoryTotalRow
          key={balance.name}
          name={balance.name}
          balance={balance.balance}
          paymentsTotal={balance.paymentsTotal}
          interestTotal={balance.interestTotal}
        />
      ))}
    </>
  );
};

const SubCategoryTotalRow = ({
  name,
  balance,
  paymentsTotal,
  interestTotal,
}: BalanceTotal) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 p-2">
        <h1 className="sm:text-md text-md whitespace-nowrap font-bold text-white">
          {name}
        </h1>
        <h1 className="sm:text-md text-md justify-self-end whitespace-nowrap text-white">
          £{balance.toLocaleString('en-UK')}
        </h1>
        <div className="flex gap-2">
          <h1 className="sm:text-md whitespace-nowrap text-sm text-white/80">
            Payments total:
          </h1>
          <h1 className="sm:text-md whitespace-nowrap text-sm text-white/70">
            £{paymentsTotal.toLocaleString('en-UK')}
          </h1>
        </div>
        <div className="flex justify-between gap-2">
          <h1 className="sm:text-md whitespace-nowrap text-sm text-white/80">
            Interest total:
          </h1>
          <h1 className="sm:text-md whitespace-nowrap text-sm text-white/70">
            £{interestTotal.toLocaleString('en-UK')}
          </h1>
        </div>
      </div>
    </>
  );
};
