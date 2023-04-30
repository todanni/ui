import React from 'react';
import { DateTime } from 'luxon';
import { Icon } from '~/components/common/icons/Icon';

export const PlanHeader = () => {
  const [dateRange, setDateRange] = React.useState({
    start: DateTime.now().startOf('month'),
    end: DateTime.now().endOf('month'),
  });

  const handleDateChange = (op: 'prev' | 'next') => {
    if (op === 'next') {
      setDateRange({
        start: dateRange.start.plus({ month: 1 }),
        end: dateRange.end.plus({ month: 1 }),
      });
      return;
    }

    setDateRange({
      start: dateRange.start.minus({ month: 1 }),
      end: dateRange.end.minus({ month: 1 }),
    });
  };

  return (
    <div className="flex items-center justify-between rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      <div
        className="flex cursor-pointer items-center gap-2 p-2 "
        onClick={() => handleDateChange('prev')}
      >
        <Icon object="arrowLeft" colour="default" size="small" />
        <h3 className="text-xs text-grey-5 hover:text-green-3 dark:text-white sm:text-sm">
          {dateRange.start.minus({ month: 1 }).toFormat('LLLL yyyy')}
        </h3>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold text-grey-5 dark:text-white sm:text-3xl">
          Your plan
        </h1>
        <h3 className="sm:text-md text-sm font-light tracking-tight text-green-3 dark:text-green-4">
          {dateRange.start.toFormat('LLLL yyyy')}
        </h3>
      </div>
      <div
        className="flex cursor-pointer items-center gap-2 p-2 hover:text-green-3"
        onClick={() => handleDateChange('next')}
      >
        <h3 className="text-xs text-grey-5 hover:text-green-3 dark:text-white sm:text-sm">
          {dateRange.start.plus({ month: 1 }).toFormat('LLLL yyyy')}
        </h3>
        <Icon object="arrowRight" colour="default" size="small" />
      </div>
    </div>
  );
};
