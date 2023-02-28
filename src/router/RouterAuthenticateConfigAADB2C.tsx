import { InteractionStatus } from '@azure/msal-browser';

import { useAADB2CAuth } from '@/hooks/useAADB2CAuth';
import { RedirectComponent } from '@/utilities/RedirectComponent';

type Props = {
  component: React.ReactNode;
};
export const RouterAuthenticatedCheck = (props: Props) => {
  const { component } = props;
  const { inProgress } = useAADB2CAuth();

  if (inProgress == InteractionStatus.Startup)
    return (
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );

  return <>{component}</>;
};

export const RouterHasAuthenticated = (props: Props) => {
  const { component } = props;
  const { isAuthenticated } = useAADB2CAuth();
  if (!isAuthenticated) return <RedirectComponent redirect="/azure" />;
  return <>{component}</>;
};