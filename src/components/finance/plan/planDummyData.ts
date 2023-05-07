import { CategoryTotal } from './PlanPaymentsTable';
import { PlanGoal } from './overview/PlanOverviewGoals';

const goals: PlanGoal[] = [
  { category: 'income', goal: 1234.56, amount: 1234.56 },
  { category: 'spending', goal: 1234.56, amount: 234.56 },
  { category: 'debt', goal: 1234.56, amount: 423.56 },
  { category: 'savings', goal: 1234.56, amount: 534.56 },
];

const repayments = [
  {
    category: 'Mortgage',
    repayments: [
      {
        provider: 'Virgin money',
        payment: 1020.34,
      },
    ],
  },
  {
    category: 'Car loan',
    repayments: [{ provider: 'VW Finance', payment: 654.32 }],
  },
  {
    category: 'Student loan',
    repayments: [{ provider: 'Student Finance', payment: 545.34 }],
  },
  {
    category: 'Personal loan',
    repayments: [
      {
        provider: 'Monzo',
        payment: 342.45,
      },
      { provider: 'Novuna', payment: 250.45 },
    ],
  },
  {
    category: 'Credit card',
    repayments: [
      { provider: 'Amex', payment: 742.45 },
      { provider: 'Barclaycard', payment: 54.23 },
    ],
  },
];

const balances = [
  {
    name: 'Mortgage',
    balances: [
      {
        name: 'Virgin money',
        balance: 266734.87,
        interestTotal: 12000.87,
        paymentsTotal: 24000.87,
      },
    ],
  },
  {
    name: 'Car loans',
    balances: [
      {
        name: 'VW Finance',
        balance: 26478.87,
        interestTotal: 50.87,
        paymentsTotal: 6050.87,
      },
    ],
  },
  {
    name: 'Student loan',
    balances: [
      {
        name: 'Student loan',
        balance: 19106.87,
        interestTotal: 1050.87,
        paymentsTotal: 13876.87,
      },
    ],
  },
  {
    name: 'Personal loans',
    balances: [
      {
        name: 'Novuna',
        balance: 2560.49,
        interestTotal: 50.87,
        paymentsTotal: 50.87,
      },
      {
        name: 'Monzo',
        balance: 1701.02,
        interestTotal: 50.87,
        paymentsTotal: 50.87,
      },
    ],
  },
];
const spendingPayments: CategoryTotal[] = [
  {
    name: 'Living costs',
    total: 1234.56,
    icon: 'wallet',
    subCategories: [
      {
        name: 'Groceries',
        total: 50.87,
      },
      {
        name: 'Transport',
        total: 50.87,
      },
      {
        name: 'Medication',
        total: 50.87,
      },
      {
        name: 'Pets',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Bills',
    total: 1234.56,
    icon: 'money',
    subCategories: [
      {
        name: 'Council tax',
        total: 50.87,
      },
      {
        name: 'Electricity bill',
        total: 50.87,
      },
      {
        name: 'Water bill',
        total: 50.87,
      },
      {
        name: 'Phone bill',
        total: 50.87,
      },
      {
        name: 'Insurance',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Discretionary',
    total: 1234.56,
    icon: 'card',
    subCategories: [
      {
        name: 'Shopping',
        total: 50.87,
      },
      {
        name: 'Eating out',
        total: 50.87,
      },
      {
        name: 'Subscriptions',
        total: 50.87,
      },
      {
        name: 'Personal care',
        total: 50.87,
      },
      {
        name: 'Travel',
        total: 50.87,
      },
    ],
  },
];
