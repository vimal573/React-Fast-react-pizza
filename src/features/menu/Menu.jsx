/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';
import MenuItem from '../menu/MenuItem';
import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
