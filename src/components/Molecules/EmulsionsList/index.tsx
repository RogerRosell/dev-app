"use client"

import { TEmulsion } from '@/dataModel/emulsions';
import { useEmulsionStore, TEmulsionsState } from '@/stores/emulsions-store';
import { EmulsionListItem } from './EmulsionListItem';

const EmulsionsList = (): JSX.Element => {
  const emulsions: TEmulsionsState = useEmulsionStore((state: any) => state.emulsions);
  const { setInitEmulsions } = useEmulsionStore();

  if (!emulsions) setInitEmulsions;

  return (
    <>
    <h1 className="text-xl font-semibold">Emulsions</h1>
    <ul>
      {emulsions && Array.isArray(emulsions) && emulsions.map((emulsion: TEmulsion): JSX.Element => {
        return <EmulsionListItem key={emulsion.id} id={emulsion.id} name={emulsion.name} brand={emulsion?.Brand?.name}/>
      })}
      </ul>
    </>
  )
}

export default EmulsionsList