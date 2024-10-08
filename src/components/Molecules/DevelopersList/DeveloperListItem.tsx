import { useDeveloperStore } from '@/stores/developers-store';

export const DeveloperListItem = ({id, name, brand}: any): JSX.Element => {
  const { deleteDeveloper } = useDeveloperStore();  
  return (
    <li key={id}><a onClick={() => deleteDeveloper(id)} className="underline cursor-pointer">X</a>{" "}{brand} {name}</li>
  )
}