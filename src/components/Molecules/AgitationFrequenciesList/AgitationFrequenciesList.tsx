"use client";

import { TAgitationFrequency } from '@/dataModel/agitationFrequency';
import { useAgitationFrequencyStore, AgitationFrequenciesState } from '@/stores/agitation-frequencies-store';
import { AgitationFrequenciesListItem } from './AgitationFrequenciesListItem';

const AgitationFrequenciesList = () => {
  const frequencies: AgitationFrequenciesState =  useAgitationFrequencyStore((state: any) => state.agitationFrequencies);
  const { setInitAgitationFrequencies } = useAgitationFrequencyStore();  

  if (!frequencies) setInitAgitationFrequencies;

  return (
    <>
    <h1 className="text-xl font-semibold">Agitation Frequencies</h1>
    <ul>
      {frequencies && Array.isArray(frequencies) && frequencies.map((frequency: TAgitationFrequency): JSX.Element => {
        return <AgitationFrequenciesListItem key={frequency.id} id={frequency.id} frequency={frequency.frequency} />
      })}
      </ul>
    </>
  )
}

export default AgitationFrequenciesList