import { Suspense, useEffect } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { useRecoilValue } from 'recoil';

import { axiosClient } from '@/hooks/axiosClient';
import { testState } from '@/provider/firebaseStore';
import OfficailSampleErrorBoundary from '@/utilities/Errorboundary';

export const ErrorBoundaryPage = () => {
  // Suspenseでエラーをキャッチするには難しい部分がある
  // Suspense前提で組む場合は良いけども、あまりよくはないかもしれない
  // デフォルトの設定部分で追加してしまうと全てのAxiosエラーをキャッチしてしまうので使い勝手が悪い
  // recoilで取得する分には問題なくキャッチできる
  // SWRで取得するとエラーはキャッチできる
  const ErrorOccuredUserAxiosSuspenceComponet = () => {
    // const data = axios.get('https://localteset.com/yesyes');
    // recoilで取得していればReact側でキャッチされる
    const data = useRecoilValue(testState);
    console.log(data);

    return <>Axios data suspence</>;
  };

  return (
    <>
      {/* network errorをキャッチしたい設定をするとうまくいかないでござる */}
      <OfficailSampleErrorBoundary>
        <ErrorOccuredUseAxiosComponent />
        <ErrorOccurredComponent />
      </OfficailSampleErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<>loading</>}>
          <ErrorOccuredUserAxiosSuspenceComponet />
        </Suspense>
        <ErrorOccuredUseAxiosComponent />
        <ErrorOccurredComponent />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* axiosのエラーは取得できない確認用 */}
        <ErrorOccuredUseAxiosComponent />
      </ErrorBoundary>
    </>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <pre>react-error-boundary {error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        reset button
      </button>
    </>
  );
};
const ErrorOccurredComponent = () => {
  throw new Error('エラーが起きました。');
};

const ErrorOccuredUseAxiosComponent = () => {
  useEffect(() => {
    axiosClient.get('https://localteset.com/yesyes');
  }, []);

  return <>Axios Data</>;
};
