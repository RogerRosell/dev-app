import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TEmulsion } from '../dataModel/emulsions';
import { getAllEmulsions, addEmulsion, deleteEmulsion2 } from '@/app/actions';

export type TEmulsionsState = {
  emulsions: TEmulsion[] | undefined;
}

export type TEmulsionsActions = {
  setInitEmulsions: () => void;
  addEmulsion: (newEmulsion: TEmulsion) => void;
  deleteEmulsion: (emulsionId: string) => void;
};

export type TEmulsionsStore = TEmulsionsState & TEmulsionsActions;

export const useEmulsionsStore = create<TEmulsionsStore>()(
  devtools(
    persist(
      (set, get) => ({
        emulsions: undefined,
        setInitEmulsions: async () => {
          const response = await getAllEmulsions();
          console.log("response >> ", response)
          response && set({ emulsions: response as TEmulsion[] });
        },
        addEmulsion: async (newEmulsion) => {
          const setInitEmulsions = get().setInitEmulsions;
          const response = await addEmulsion(newEmulsion);
          response && setInitEmulsions();
          console.log("addEmulsion")
        },
        deleteEmulsion: async (emulsionId) => {
          const setInitEmulsions = get().setInitEmulsions;
          const response = await deleteEmulsion2(emulsionId);
          response && setInitEmulsions();
        }
      }),
      { name: 'emulsionsStore' }
    )
  )
)