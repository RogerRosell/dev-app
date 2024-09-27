import { create } from 'zustand';
import { handleItemAction } from '../app/actions/db.actions';
import { TDeveloper } from '../dataModel/developers';
import { devtools, persist } from 'zustand/middleware';

export type TDeveloperState = {
  developers: TDeveloper[] | undefined;
};

export type DevelopersActions = {
  setInitDevelopers: () => void;
  addDeveloper: (newDeveloper: TDeveloper) => void;
  deleteDeveloper: (developerId: string) => void;
};

export type DevelopersStore = TDeveloperState & DevelopersActions;

export const useDeveloperStore = create<DevelopersStore>()(
  devtools(
    persist(
      (set, get) => ({
        developers: undefined,
        setInitDevelopers: async () => {
          const response = await handleItemAction('list', 'developer');
          response && set({ developers: response });
        },
        addDeveloper: async (newDeveloper) => {
          await handleItemAction('add', 'developer', newDeveloper);
          const setInitDevelopers = get().setInitDevelopers;
          setInitDevelopers();
        },
        deleteDeveloper: async (developerId) => {
          await handleItemAction('delete', 'developer', developerId);
          const setInitDevelopers = get().setInitDevelopers;
          setInitDevelopers();
        },
      }),
      {
        name: 'developers-storage',
      }
    )
  )
);