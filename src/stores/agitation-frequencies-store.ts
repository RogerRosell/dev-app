import { create } from 'zustand';
import { handleItemAction } from '../app/actions/db.actions';
import { TAgitationFrequency } from '../dataModel/agitationFrequency';
import { devtools, persist } from 'zustand/middleware';

export type AgitationFrequenciesState = {
  agitationFrequencies: TAgitationFrequency[] | undefined;
};

export type AgitationFrequenciesActions = {
  setInitAgitationFrequencies: () => void;
  addAgitationFrequency: (newAgitationFrequency: TAgitationFrequency) => void;
  deleteAgitationFrequency: (agitationFrequencyId: string) => void;
};

export type AgitationFrequenciesStore = AgitationFrequenciesState & AgitationFrequenciesActions;

export const useAgitationFrequencyStore = create<AgitationFrequenciesStore>()(
  devtools(
    persist(
      (set, get) => ({
        agitationFrequencies: undefined,
        setInitAgitationFrequencies: async () => {
          const response = await handleItemAction('list', 'agitationFrequency');
          response && set({ agitationFrequencies: response });
        },
        addAgitationFrequency: async (newAgitationFrequency) => {
          await handleItemAction('add', 'agitationFrequency', newAgitationFrequency);
          const setInitAgitationFrequencies = get().setInitAgitationFrequencies;
          setInitAgitationFrequencies();
        },
        deleteAgitationFrequency: async (agitationFrequencyId) => {
          await handleItemAction('delete', 'agitationFrequency', agitationFrequencyId);
          const setInitAgitationFrequencies = get().setInitAgitationFrequencies;
          setInitAgitationFrequencies();
        },
      }),
      {
        name: 'agitation-frequencies-storage',
      }
    )
  )
);