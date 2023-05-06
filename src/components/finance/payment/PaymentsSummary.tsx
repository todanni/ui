import React from 'react';
import { ShadowCard } from '../layout';
import { Icon } from '~/components/common';
import { IconObject } from '~/components/common/icons/iconMapping';

export type PaymentsSummaryProps = {
  incomeTotal: number;
  taxTotal: number;
  transfersTotal: number;
  spendingTotal: number;
  billsTotal: number;
  livingVCostsTotal: number;
  discretionaryTotal: number;
  debtTotal: number;
  savingsTotal: number;
};

export type SummaryProps = {
  header?: string;
  remaining?: number;
  categories: {
    title: string;
    total: number;
    subCategories: {
      title: string;
      total: number;
    }[];
  }[];
};

export const PaymentsSummary = ({
  categories,
  remaining,
  header,
}: SummaryProps) => {
  return (
    <div className="px-2">
      <table className="h-full w-full border-spacing-4 text-white">
        {header && (
          <thead>
            <tr>
              <th scope="col" className="pr-2 text-left">
                <Icon object="plan" size="xs" />
              </th>
              <th scope="col" colSpan={2} className="py-2 text-left text-xl">
                {header}
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {categories.map((category) => (
            <>
              <CategoryRow
                key={category.title}
                title={category.title}
                total={category.total}
              />
              {category.subCategories.map((subCategory) => (
                <SubCategoryRow key={subCategory.title} {...subCategory} />
              ))}
            </>
          ))}
        </tbody>
        {remaining && (
          <tfoot>
            <tr className="text-lg">
              <th className="w-0 text-left"></th>
              <th className="pt-1 text-left">Remaining</th>
              <th className="text-right">
                £{remaining.toLocaleString('en-UK')}
              </th>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

type RowProps = {
  total: number;
  title: string;
  icon?: IconObject;
};

const CategoryRow = ({ total, title, icon }: RowProps) => {
  return (
    <tr className="rounded-xl bg-white/5 text-lg">
      <th className="text-left">
        {icon && <Icon object={icon} size="xs" colour={getColour(title)} />}
      </th>
      <th className="text-left">{title}</th>
      <th className="text-right">£{total.toLocaleString('en-UK')}</th>
    </tr>
  );
};

const getColour = (title: string) => {
  switch (title) {
    case 'Income':
      return 'income';
    case 'Spending':
      return 'spending';
    case 'Debt':
      return 'debt';
    case 'Savings':
      return 'savings';
    default:
      return 'default';
  }
};

const SubCategoryRow = ({ total, title }: RowProps) => {
  return (
    <tr className="text-md text-white/80">
      <td></td>
      <td className="text-left">{title}</td>
      <td className="text-right">£{total.toLocaleString('en-UK')}</td>
    </tr>
  );
};
