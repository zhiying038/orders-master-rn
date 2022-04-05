import { ReactNode } from 'react';

export type Props = {
  title: string;
  enableBack?: boolean;
  backIcon?: ReactNode;
  onPressBack?: () => void;
  className?: string;
  textClassname?: string;
};
