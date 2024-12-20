import BaseLayout from '@components/Layouts/BaseLayout';
import Navigation from '@components/Navigation';

type Props = {
  children: React.ReactNode;
};

export default function RecodeLayout({ children }: Props) {
  return (
    <BaseLayout>
      {children}
      <Navigation />
    </BaseLayout>
  );
}