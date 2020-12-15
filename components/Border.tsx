import React, { ReactElement } from 'react';

type Props = {
  element: ReactElement;
};

const Border: React.FC<Props> = ({ element }: Props): ReactElement => {
  return (
    <div className="grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-7 2xl:grid-cols-5 m-8">
      <div className="col-span-1" />
      <div className="rounded-lg border-solid border-2 md:col-span-10 lg:col-span-7 xl:col-span-5 2xl:col-span-3 p-8">{element}</div>
      <div className="col-span-1" />
    </div>
  );
};

export default Border;
