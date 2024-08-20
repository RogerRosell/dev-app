"use client"

import { useEffect } from 'react';
import { TDeveloper } from '@/dataModel/developers';
import { useDevelopersStore, TDevelopersState } from '@/stores/developers-store';
import { DeveloperListItem } from './DeveloperListItem';
import { Brand } from '@/types';

const DevelopersList = (): JSX.Element => {
  const developers: TDevelopersState = useDevelopersStore((state: any) => state.developers);
  const { setInitDevelopers } = useDevelopersStore(); 

  useEffect(() => {
    !developers && setInitDevelopers();
  }, [developers, setInitDevelopers])

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