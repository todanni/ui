import React from 'react';
import { IconButton } from '~/components/common';

export const PlanActionsFooter = () => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      <div className="flex flex-wrap justify-between gap-2 sm:justify-around">
        <IconButton
          icon="table"
          text="View all"
          iconStart={true}
          size="small"
          className="hover:bg-grey-2/50"
        />
        <IconButton
          icon="chart"
          text="View chart"
          iconStart={true}
          size="small"
          className="hover:bg-grey-2/50"
        />
        <IconButton
          icon="import"
          text="Add payments"
          iconStart={true}
          size="small"
          className="hover:bg-green-4"
        />
        <IconButton
          icon="delete"
          text="Reset data"
          iconStart={true}
          size="small"
          className="hover:bg-red-800"
        />
      </div>
    </div>
  );
};
