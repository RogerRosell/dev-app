import { create } from 'zustand';
import { getAllAgitationfrequencies, addAgitationfrequencies2, deleteAgitationFrequency2 } from '../app/actions';
import { TAgitationFrequency } from '@/dataModel/agitationFrequency';
import { devtools, persist } from 'zustand/middleware';

export type AgitationFrequenciesState = {
  agitationFrequencies: TAgitationFrequency[] | undefined;
};
export type AgitationFrequenciesActions = {
  setInitAgitationFrequencies: () => void;
  addAgitationFrequency: (newAgitationFrequency: TAgitationFrequency) => void;
  deleteAgitationFrequency: (id: string) => void;
};

export type AgitationFrequenciesStore = AgitationFrequenciesState & AgitationFrequenciesActions;

export const useAgitationFrequenciesStore = create<AgitationFrequenciesStore>()(
  devtools(
    persist(
      (set, get) => ({
        agitationFrequencies: undefined,
        setInitAgitationFrequencies: async () => {
          const response = await getAllAgitationfrequencies();
          response && set({ agitationFrequencies: response });
        },
        addAgitationFrequency: async (newAgitationFrequency) => {
          const setInitAgitationFrequencies = get().setInitAgitationFrequencies;
          const response = await addAgitationfrequencies2(newAgitationFrequency);
          response && setInitAgitationFrequencies();
        },
        deleteAgitationFrequency: async (id) => {
          const setInitAgitationFrequencies = get().setInitAgitationFrequencies;
          const response = await deleteAgitationFrequency2(id);
          response && setInitAgitationFrequencies();
        }
      }),
      { name: 'agitationFrequenciesStore' }
    )
  )
);