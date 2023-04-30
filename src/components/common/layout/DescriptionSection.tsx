import React from 'react';
import { Heading, Title } from '~/components/common/typography';

type SectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const DescriptionSection = ({ title, subtitle, description }: SectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Title size="large" intent="primary">
        {title}
      </Title>
      <Heading size="medium">{subtitle}</Heading>
      <Heading size="small">{description}</Heading>
    </div>
  );
};

export { DescriptionSection };
