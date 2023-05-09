import React from 'react';
import { Icon } from '~/components/common';
import { IconObject } from '~/components/common/icons/iconMapping';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';

export type PlanCategoryPayments = {
  total: number;
  payments: {
    name: string;
    total: number;
  }[];
};

export type PlanPaymentsTableProps = {
  categories: CategoryTotal[];
  footer?: React.ReactNode;
};

export type CategoryTotal = {
  name: string;
  total?: number;
  icon?: IconObject;
  colour?: 'savings' | 'spending' | 'income' | 'debt';
  subCategories?: SubCategoryTotal[];
};

export type SubCategoryTotal = {
  name: string;
  total: number;
};

export const PlanPaymentsTable = ({
  categories,
  footer,
}: PlanPaymentsTableProps) => {
  return (
    <PlanPanelCard title="Payments summary" icon="summary" footer={footer}>
      <div className="flex flex-col">
        {categories.map((category) => (
          <CategoryTotalRow
            key={category.name}
            name={category.name}
            total={category.total}
            icon={category.icon}
            subCategories={category.subCategories}
            colour={category.colour}
          />
        ))}
      </div>
    </PlanPanelCard>
  );
};

const CategoryTotalRow = ({
  name,
  total,
  icon,
  colour,
  subCategories,
}: CategoryTotal) => {
  return (
    <>
      <div className="flex items-center gap-2 rounded-xl py-1">
        {icon && <Icon object={icon} size="xs" colour={colour} />}
        {!icon && <div className="h-6 w-6" />}
        <h2 className="text-md whitespace-nowrap font-semibold text-white sm:text-lg">
          {name}
        </h2>
        {total && (
          <h2 className="ml-auto text-lg font-semibold text-white">
            £ {total?.toLocaleString('en-UK', { minimumFractionDigits: 2 })}
          </h2>
        )}
      </div>
      {subCategories?.map((subCategory) => (
        <SubCategoryTotalRow
          key={subCategory.name}
          name={subCategory.name}
          total={subCategory.total}
        />
      ))}
    </>
  );
};

const SubCategoryTotalRow = ({ name, total }: SubCategoryTotal) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6" />
      <h3 className="sm:text-md whitespace-nowrap text-sm text-white/80">
        {name}
      </h3>
      <h3 className="sm:text-md ml-auto whitespace-nowrap text-sm text-white/80">
        £ {total.toLocaleString('en-UK', { minimumFractionDigits: 2 })}
      </h3>
    </div>
  );
};
