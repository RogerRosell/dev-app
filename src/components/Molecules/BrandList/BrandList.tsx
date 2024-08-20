"use client"

import { useEffect } from 'react';
import { TBrand } from '@/dataModel/brands';
import { useBrandStore, BrandsState } from '../../../stores/brands-store';
import { BrandListItem } from './BrandListItem';

const BrandList = (): JSX.Element => {
  const brands: BrandsState = useBrandStore((state: any) => state.brands);
  const { setInitBrands } = useBrandStore();  

  useEffect(() => {
    !brands && setInitBrands();
  }, [brands, setInitBrands])

  return (
    <>
    <h1 className="text-xl font-semibold">Brands</h1>
    <ul>
      {brands && Array.isArray(brands) && brands.map((brand: TBrand): JSX.Element => {
        return <BrandListItem key={brand.id} id={brand.id} name={brand.name} />
      })}
      </ul>
    </>
  )
}

export default BrandList
