import React from 'react';
import { IconButton } from '~/components/common';

export const PlanActionsFooter = () => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      <div className="flex flex-wrap justify-between gap-2 sm:justify-around">
        <IconButton
          text="View all"
          iconStart="table"
          size="sm"
          className="hover:bg-grey-2/50"
        />
        <IconButton
          text="View chart"
          iconStart="chart"
          size="sm"
          className="hover:bg-grey-2/50"
        />
        <IconButton
          text="Add payments"
          iconStart="import"
          size="sm"
          className="hover:bg-green-4"
        />
        <IconButton
          text="Reset data"
          iconStart="delete"
          size="sm"
          className="hover:bg-red-800"
        />
      </div>
    </div>
  );
};
