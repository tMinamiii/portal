import React, { ReactElement } from 'react';

type Props = {
  media: string;
  articles: Array<ReactElement>;
};

const Border: React.FC<Props> = ({ media, articles }: Props): ReactElement => {
  const lowerMedia = media.toLowerCase();
  const imagePath = `/images/${lowerMedia}.png`;
  return (
    <div className="grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-7 2xl:grid-cols-5 m-8">
      <div className="col-span-1" />
      <div className="rounded-lg border-solid border-2 md:col-span-10 lg:col-span-7 xl:col-span-5 2xl:col-span-3 p-8">
        <div>
          <p>
            <img className="mr-1 inline-block align-middle" src={imagePath} width="24" height="24" />
            <span className="text-xl font-bold inline-block align-middle">{media}</span>
          </p>
          <div className="my-articles list-mark">
            <ul>{articles}</ul>
          </div>
        </div>
      </div>
      <div className="col-span-1" />
    </div>
  );
};

export default Border;
