import React, { useEffect } from 'react';

import { RxCross1 } from 'react-icons/rx';

type Props = {
  viewFlag: boolean;
  setViewFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpComponent = (props: Props) => {
  const { viewFlag, setViewFlag } = props;
  useEffect(() => {
    // 画面固定用関数
    const registerBackgroundFixed = () => {
      const body = document.body;
      const scrollWidth = window.innerWidth - body.clientWidth;
      body.style.marginRight = `${scrollWidth}px`;
      body.style.overflowY = 'hidden';
    };

    // 画面固定解除用関数
    const unRegisterBackgroundFixed = () => {
      const body = document.body;
      body.style.overflowY = '';
      body.style.marginRight = '';
    };

    if (viewFlag) registerBackgroundFixed();
    return () => {
      unRegisterBackgroundFixed();
    };
  }, [viewFlag]);

  // 枠外クリック用関数
  const onClickBackground = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      setViewFlag(false);
    }
  };

  // バツボタンクリック用関数
  const onClickCross = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setViewFlag(false);
  };

  return (
    <>
      <div
        className={
          'fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50 transition-all ' +
          (viewFlag
            ? ' top-0 left-0 h-screen w-screen '
            : ' top-1/2 left-1/2 h-0 w-0 ')
        }
        onClick={onClickBackground}
      >
        <div className="relative h-3/4 w-3/4 max-w-3xl">
          {/* バツボタン */}
          <div
            className="absolute right-0 -top-10 h-10 w-10 hover:cursor-pointer"
            onClick={onClickCross}
          >
            <RxCross1 className="h-full w-full" />
          </div>
          <div id="policy" className="flex h-full w-full flex-col bg-white">
            ここに何かしらを書く
          </div>
        </div>
      </div>
    </>
  );
};
