import { create } from 'zustand';
import { handleItemAction } from '../app/actions/db.actions';
import { TEmulsion } from '../dataModel/emulsions';
import { devtools, persist } from 'zustand/middleware';

export type TEmulsionsState = {
  emulsions: TEmulsion[] | undefined;
};

export type TEmulsionsActions = {
  setInitEmulsions: () => void;
  addEmulsion: (newEmulsion: TEmulsion) => void;
  deleteEmulsion: (emulsionId: string) => void;
};

export type TEmulsionsStore = TEmulsionsState & TEmulsionsActions;

export const useEmulsionStore = create<TEmulsionsStore>()(
  devtools(
    persist(
      (set, get) => ({
        emulsions: undefined,
        setInitEmulsions: async () => {
          const response = await handleItemAction('list', 'emulsion');
          response && set({ emulsions: response });
        },
        addEmulsion: async (newEmulsion) => {
          await handleItemAction('add', 'emulsion', newEmulsion);
          const setInitEmulsions = get().setInitEmulsions;
          setInitEmulsions();
        },
        deleteEmulsion: async (emulsionId) => {
          await handleItemAction('delete', 'emulsion', emulsionId);
          const setInitEmulsions = get().setInitEmulsions;
          setInitEmulsions();
        },
      }),
      {
        name: 'emulsions-storage',
      }
    )
  )
);