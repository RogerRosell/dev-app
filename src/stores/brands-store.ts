import { create } from 'zustand';
import { handleItemAction } from '../app/actions/db.actions';
import { TBrand } from '../dataModel/brands';
import { devtools, persist } from 'zustand/middleware';

export type BrandsState = {
  brands: TBrand[] | undefined;
};

export type BrandsActions = {
  setInitBrands: () => void;
  addBrand: (newBrand: TBrand) => void;
  deleteBrand: (brandId: string) => void;
};

export type BrandsStore = BrandsState & BrandsActions;

export const useBrandStore = create<BrandsStore>()(
  devtools(
    persist(
      (set, get) => ({
        brands: undefined,
        setInitBrands: async () => {
          const response = await handleItemAction('list', 'brand');
          response && set({ brands: response });
        },
        addBrand: async (newBrand) => {
          await handleItemAction('add', 'brand', newBrand);
          const setInitBrands = get().setInitBrands;
          setInitBrands();
        },
        deleteBrand: async (brandId) => {
          await handleItemAction('delete', 'brand', brandId);
          const setInitBrands = get().setInitBrands;
          setInitBrands();
        },
      }),
      {
        name: 'brands-storage',
      }
    )
  )
);