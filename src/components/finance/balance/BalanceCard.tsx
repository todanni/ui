import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '~/components/common/icons/Icon';
import { Heading } from '~/components/common/typography/Heading';

const card = cva('rounded-xl dark:border-2 border-4 p-2', {
  variants: {
    section: {
      income: [
        'border-blue-500',
        'bg-blue-500/90',
        'dark:border-blue-500',
        'dark:bg-blue-600/40',
      ],
      spending: [
        'dark:border-spend-3',
        'dark:bg-spend-3/20',
        'border-spend-5',
        'bg-spend-5/80',
      ],
      debt: [
        'border-red-500',
        'bg-red-500/90',
        'dark:border-red-500',
        'dark:bg-red-500/40',
      ],
      savings: [
        'border-green-500',
        'bg-green-500/90',
        'dark:border-green-3',
        'dark:bg-green-4/50',
      ],
      default: ['border-white/5', 'bg-white/10'],
    },
  },
  defaultVariants: {
    section: 'default',
  },
});

type PaymentSource = {
  name: string;
  amount: number;
};

type CardContentsProps = {
  title: string;
  totalPayments: number;
  sources?: PaymentSource[];
  totalBalance?: number;
  totalBalanceText?: string;
};

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  contents: CardContentsProps;
}

const getSectionIcon = (section: string | null | undefined) => {
  switch (section) {
    case 'income':
      return <Icon object="money" colour="white" size="xs" />;
    case 'spending':
      return <Icon object="wallet" colour="white" size="xs" />;
    case 'debt':
      return <Icon object="bank" colour="white" size="xs" />;
    case 'savings':
      return <Icon object="piggy" colour="white" size="xs" />;
  }
};

const BalanceCard: React.FC<CardProps> = ({
  className,
  section,
  contents,
  ...props
}) => (
  <div className={card({ section, className })} {...props}>
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-2">
        {getSectionIcon(section)}
        <Heading colour="white" size="medium" className="">
          {contents.title}
        </Heading>
      </div>
      <Heading colour="white" size="medium">
        £{contents.totalPayments.toLocaleString('en-UK')}
      </Heading>
    </div>

    {contents.sources?.map((source) => (
      <div key={source.name} className="flex justify-between">
        <p className="text-white/70">{source.name}</p>
        <p className="text-white/70">
          £{source.amount.toLocaleString('en-UK')}
        </p>
      </div>
    ))}

    {contents.totalBalanceText && (
      <div className="mt-2 flex items-end justify-between">
        <div className="flex items-center gap-2">
          <Heading colour="white" size="medium" className="">
            {contents.totalBalanceText}
          </Heading>
        </div>
        <Heading colour="white" size="medium">
          {contents.totalBalance?.toLocaleString('en-UK')}
        </Heading>
      </div>
    )}
  </div>
);

export { BalanceCard };
