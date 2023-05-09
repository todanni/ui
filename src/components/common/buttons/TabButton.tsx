import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon, IconObject } from '~/components';
import _ from 'lodash';

const tab = cva(
  'flex items-center justify-center gap-2 rounded-xl py-2 cursor-pointer',
  {
    variants: {
      fill: {
        default: ['bg-grey-3', 'dark:bg-white/10', 'shadow-2xl'],
        blue: ['bg-blue-500', 'dark:bg-blue-600', 'shadow-2xl'],
        yellow: ['dark:bg-spend-4', 'bg-spend-4', 'shadow-2xl'],
        red: ['bg-red-500', 'dark:bg-red-700', 'shadow-2xl'],
        green: ['bg-green-4', 'dark:bg-green-4', 'shadow-2xl'],
      },
    },
  }
);

const label = cva('font-bold dark:text-white hidden md:block', {
  variants: {
    fill: {
      default: ['text-grey-3'],
      blue: ['text-blue-500'],
      yellow: ['text-spend-4'],
      red: ['text-red-500'],
      green: ['text-green-4'],
    },
  },
});

export interface TabButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tab> {
  selected: boolean;
  text: string;
  icon: IconObject;
}

export const TabButton = ({
  className,
  fill,
  selected,
  text,
  icon,
  ...props
}: TabButtonProps) => {
  return (
    <div
      className={selected ? tab({ fill, className }) : tab({ className })}
      {...props}
    >
      <Icon object={icon} size="xs" colour={selected ? 'white' : fill} />
      <p
        className={
          selected
            ? 'hidden font-bold text-white md:block'
            : label({ className })
        }
      >
        {text}
      </p>
    </div>
  );
};
