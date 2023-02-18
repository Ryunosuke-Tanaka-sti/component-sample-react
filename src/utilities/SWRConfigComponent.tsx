import { useErrorHandler } from 'react-error-boundary';

import { AxiosError, isAxiosError } from 'axios';
import { SWRConfig } from 'swr/_internal';

type Props = {
  children: React.ReactNode;
};

export const SWRConfigComponent = (props: Props) => {
  const handleError = useErrorHandler();
  const { children } = props;
  return (
    <SWRConfig
      value={{
        onError: async (err) => {
          if (isAxiosError(err)) {
            console.log(err);
            const axiosError = err as AxiosError;
            if (axiosError.response?.status == 404) {
              console.error('404なんですわ');
            }
          }
          handleError(err);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
