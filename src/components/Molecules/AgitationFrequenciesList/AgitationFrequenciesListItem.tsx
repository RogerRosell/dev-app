import { useAgitationFrequenciesStore } from '@/stores/agitation-frequencies-store';

export const AgitationFrequenciesListItem = ({id, frequency}: any) => {
  const { deleteAgitationFrequency } = useAgitationFrequenciesStore(); 
  return (
    <li key={id}><a onClick={() => deleteAgitationFrequency(id)} className="underline cursor-pointer">X</a>{" "} {frequency}</li>
  )
}