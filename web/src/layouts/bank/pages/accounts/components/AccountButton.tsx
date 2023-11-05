import React from 'react';
import { LucideIcon, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/components/ModalsProvider';

interface Props {
  icon: LucideIcon;
  label: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined;
  onClick?: () => void;
}

const AccountButton: React.FC<Props> = (props) => {
  return (
    <Button
      variant={props.variant || 'secondary'}
      className="h-fit items-center justify-start gap-4 p-4"
      onClick={() => props.onClick?.()}
    >
      <props.icon />
      {props.label}
    </Button>
  );
};

export default AccountButton;