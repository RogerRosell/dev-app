import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TDeveloper } from '@/dataModel/developers';
import { getAllDevelopers, deleteDeveloper2, addDeveloper2 } from '@/app/actions';

export type TDevelopersState = {
  developers: TDeveloper[] | undefined;
}

export type TDevelopersActions = {
  setInitDevelopers: () => void;
  addDeveloper: (newDeveloper: TDeveloper) => void;
  deleteDeveloper: (developerId: string) => void;
};

export type TDevelopersStore = TDevelopersState & TDevelopersActions;

export const useDevelopersStore = create<TDevelopersStore>()(
  devtools(
    persist(
      (set, get) => ({
        developers: undefined,
        setInitDevelopers: async () => {
          const response = await getAllDevelopers();
          console.log("response >> ", response)
          response && set({ developers: response });
        },
        addDeveloper: async (newDeveloper) => {
          const setInitDevelopers = get().setInitDevelopers;
          const response = await addDeveloper2(newDeveloper);
          response && setInitDevelopers();
          console.log("addDeveloper")
        },
        deleteDeveloper: async (developerId) => {
          const setInitDevelopers = get().setInitDevelopers;
          const response = await deleteDeveloper2(developerId);
          response && setInitDevelopers();
        }
      }),
      { name: 'developerStore' }
    )
  )
)