import React, { ReactElement } from 'react';

type Props = {
  element: ReactElement
}

const Border: React.FC<Props> = ({ element }: Props): ReactElement => {
  return (
    <div className="grid sm:grid-cols-10 md:grid-cols-12">
      <div className="sm:col-span-1 md:col-span-1" />
      <div className="rounded-lg border-solid border-2 sm:col-span-8 md:col-span-10 p-10">
        {element}
      </div>
      <div className="sm:col-span-1 md:col-span-1" />
    </div>
  );
};

export default Border;