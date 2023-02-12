import { ObjectSessionStorageComponent } from '../modules/ObjectSessionStorageComponent';
import { SimpleSessionStorageComponet } from '../modules/SimpleSessionStorageTestComponent';

export const StoragePage = () => {
  return (
    <>
      <main className="flex flex-col gap-5">
        <SimpleSessionStorageComponet />
        <ObjectSessionStorageComponent />
      </main>
    </>
  );
};
