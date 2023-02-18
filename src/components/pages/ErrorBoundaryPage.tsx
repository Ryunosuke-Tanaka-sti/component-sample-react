import { Suspense, useEffect } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import axios from 'axios';
import { useRecoilValue } from 'recoil';

import { testState } from '@/provider/firebaseStore';
import OfficailSampleErrorBoundary from '@/utilities/Errorboundary';

export const ErrorBoundaryPage = () => {
  // Suspenseでエラーをキャッチするには難しい部分がある
  // Suspense前提で組む場合は良いけども、あまりよくはないかもしれない
  // デフォルトの設定部分で追加してしまうと全てのAxiosエラーをキャッチしてしまうので使い勝手が悪い
  const ErrorOccuredUserAxiosSuspenceComponet = () => {
    // const data = axios.get('https://localteset.com/yesyes');
    // recoilで取得していればReact側でキャッチされる
    const data = useRecoilValue(testState);
    console.log(data);

    return <>Axios data suspence</>;
  };

  return (
    <>
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
    axios.get('https://localteset.com/yesyes');
  }, []);

  return <>Axios Data</>;
};
