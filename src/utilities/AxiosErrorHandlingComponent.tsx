import { useEffect } from 'react';

import { AxiosError, AxiosResponse } from 'axios';

import { axiosClient } from '@/hooks/axiosClient';

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingComponent = (props: Props) => {
  const { children } = props;
  useEffect(() => {
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        console.error(error);
        switch (error.response?.status) {
          case 401:
            // なにかする
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );

    // クリーンアップ
    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return <>{children}</>;
};
