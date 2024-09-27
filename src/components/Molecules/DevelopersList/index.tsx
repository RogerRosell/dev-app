"use client"

import { TDeveloper } from '@/dataModel/developers';
import { useDeveloperStore, TDeveloperState } from '@/stores/developers-store';
import { DeveloperListItem } from './DeveloperListItem';

const DevelopersList = (): JSX.Element => {
  const developers: TDeveloperState = useDeveloperStore((state: any) => state.developers);
  const { setInitDevelopers } = useDeveloperStore(); 

  if (!developers) setInitDevelopers;

  return (
    <>
    <h1 className="text-xl font-semibold">Developers</h1>
    <ul>
      {developers && Array.isArray(developers) && developers.map((developer: TDeveloper): JSX.Element => {
        return <DeveloperListItem key={developer.id} id={developer.id} name={developer.name} brand={developer?.Brand?.name}/>
      })}
      </ul>
    </>
  )
}

export default DevelopersList