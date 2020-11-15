import React, { ReactElement } from 'react';
import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
};

const ListDetail: React.FC<ListDetailProps> = ({ item: user }: ListDetailProps): ReactElement => {
  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
};
export default ListDetail;
