import ListItem from './ListItem';
import { User } from '../interfaces';
import React, { ReactElement } from 'react';

type Props = {
  items: User[];
};

const List: React.FC<Props> = ({ items }: Props): ReactElement => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  );
};
export default List;
