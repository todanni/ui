import React from 'react';
import { Icon } from '../Icon/Icon';

const DateRangeSelector = () => {
  const getCurrentMonth = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    return month;
  };

  const [dateRange, setDateRange] = React.useState(getCurrentMonth());

  return (
    <div className="flex items-center gap-2">
      <Icon object="arrowLeft" colour="white" size="xs" />
      <span className="text-white">{dateRange}</span>
      <Icon object="arrowRight" colour="white" size="xs" />
    </div>
  );
};

export { DateRangeSelector };
