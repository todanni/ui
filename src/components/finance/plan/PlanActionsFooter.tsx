import React from 'react';
import { ShadowCard } from '~/components';
import { IconButton } from '~/components/common';

export const PlanActionsFooter = () => {
  return (
    <ShadowCard>
      <div className="flex flex-wrap justify-between gap-2 sm:justify-around">
        <IconButton
          icon={'table'}
          text={'View all'}
          iconStart={true}
          size="small"
          className="hover:bg-grey-2/50"
        />
        <IconButton
          icon={'chart'}
          text={'View chart'}
          iconStart={true}
          size="small"
          className="hover:bg-grey-2/50"
        />
        <IconButton
          icon={'import'}
          text={'Import data'}
          iconStart={true}
          size="small"
          className="hover:bg-green-4"
        />
        <IconButton
          icon={'delete'}
          text={'Reset data'}
          iconStart={true}
          size="small"
          className="hover:bg-red-800"
        />
      </div>
    </ShadowCard>
  );
};
