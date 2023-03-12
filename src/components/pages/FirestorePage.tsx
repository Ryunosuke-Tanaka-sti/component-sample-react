import { useState } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import useSWR from 'swr';

import { useFireStore } from '@/hooks/useFireStore';
import { SWRConfigComponent } from '@/utilities/SWRConfigComponent';

export const FirestorePage = () => {
  const { getTodo, addTodo } = useFireStore();
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
  const ViewComponent = () => {
    const { data, isLoading, isValidating, mutate } = useSWR('/todo', getTodo);
    const [text, setText] = useState<string>('');

    const handleOnSubmit = async (e: React.SyntheticEvent): Promise<void> => {
      e.preventDefault();
      const sendData = await addTodo({
        uid: '',
        done: true,
        text: text,
        timestamp: new Date(),
      });
      setText('');
      const newData = data ? [...data, sendData] : [sendData];
      mutate(newData);
    };

    if (isLoading || isValidating) return <>取得中◎</>;
    return (
      <>
        <section>
          {data?.map((value) => (
            <div key={value.uid}>
              {value.uid}:{value.text}:{value.done}:
              {value.timestamp.toLocaleString()}
            </div>
          ))}
        </section>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <button type="submit">送信</button>
        </form>
      </>
    );
  };
  return (
    <section>
      <div>firestore page 作るぞ～</div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SWRConfigComponent>
          <ViewComponent />
        </SWRConfigComponent>
      </ErrorBoundary>
    </section>
  );
};
