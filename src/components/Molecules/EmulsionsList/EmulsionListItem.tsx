import { useEmulsionsStore } from '../../../stores/emulsions-store';

export const EmulsionListItem = ({id, name, brand}: any): JSX.Element => {
  const { deleteEmulsion } = useEmulsionsStore();  
  return (
    <li key={id}><a onClick={() => deleteEmulsion(id)} className="underline cursor-pointer">X</a>{" "}{brand} {name}</li>
  )
}