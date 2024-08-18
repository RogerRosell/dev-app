// import { createStore } from 'zustand';
import { create } from 'zustand';
import { getAllBrands, addBrand2, deleteBrand2 } from '../app/actions';
import { BrandType } from '../app/dataModel/brands';
import { devtools, persist } from 'zustand/middleware';

export type BrandsState = {
  brands: BrandType[] | undefined;
};
export type BrandsActions = {
  setInitBrands: () => void;
  addBrand: (newBrands: BrandType) => void;
  deleteBrand: (brandId: string) => void;
};

export type BrandsStore = BrandsState & BrandsActions;

export const useBrandStore = create<BrandsStore>()(
  devtools(
    persist(
      (set, get) => ({
        brands: undefined,
        setInitBrands: async () => {
          const response = await getAllBrands();
          response && set({ brands: response });
        },
        addBrand: async (newBrands) => {
          const setInitBrands = get().setInitBrands;
          const response = await addBrand2(newBrands);
          response && setInitBrands();
        },
        deleteBrand: async (brandId) => {
          const setInitBrands = get().setInitBrands;
          const response = await deleteBrand2(brandId);
          response && setInitBrands();
        }
      }),
      { name: 'brandStore' }
    )
  )
  
);