import { useAgitationFrequencyStore } from '@/stores/agitation-frequencies-store';

export const AgitationFrequenciesListItem = ({id, frequency}: any) => {
  const { deleteAgitationFrequency } = useAgitationFrequencyStore(); 
  return (
    <li key={id}><a onClick={() => deleteAgitationFrequency(id)} className="underline cursor-pointer">X</a>{" "} {frequency}</li>
  )
}