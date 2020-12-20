import React, { useState } from 'react';

const AppPage: React.FC = () => {
  const [inputText, setText] = useState<string>('');

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        className="border-solid border-2 m-3"
        size={50}
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(event)}
      />
      <h1 className="ml-3">Text: {inputText}</h1>
    </div>
  );
};

export default AppPage;
