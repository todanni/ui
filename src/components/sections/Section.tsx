import React from 'react';
import { Title } from '../typography/Title';
import { Heading } from '../typography/Heading';

type SectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Section = ({ title, subtitle, description }: SectionProps) => {
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

export { Section };
