import React from 'react';
import { Icon } from '~/components/common';
import { IconObject } from '~/components/common/icons/iconMapping';

export type PlanPaymentsTableProps = {
  categories: CategoryTotal[];
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

export const PlanPaymentsTable = ({ categories }: PlanPaymentsTableProps) => {
  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <CategoryTotalRow
          key={category.name}
          name={category.name}
          total={category.total}
          icon={category.icon}
          subCategories={category.subCategories}
        />
      ))}
    </div>
  );
};

const CategoryTotalRow = ({
  name,
  total,
  icon,
  subCategories,
}: CategoryTotal) => {
  return (
    <>
      <div className="flex items-center gap-2 rounded-xl py-1">
        {icon && <Icon object={icon} size="xs" />}
        <h1 className="text-md whitespace-nowrap font-semibold text-white sm:text-lg">
          {name}
        </h1>
        <h1 className="ml-auto text-lg font-semibold text-white">{total}</h1>
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
      <h1 className="sm:text-md whitespace-nowrap text-sm text-white/80">
        {name}
      </h1>
      <h1 className="sm:text-md ml-auto whitespace-nowrap text-sm text-white/80">
        £{total}
      </h1>
    </div>
  );
};
