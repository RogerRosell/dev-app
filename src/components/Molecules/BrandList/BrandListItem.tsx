import { useBrandStore, BrandsState } from '../../../stores/brands-store';

export const BrandListItem = ({id, name}: any): JSX.Element => {
  const { deleteBrand } = useBrandStore();  
  return (
    <li key={id}><a onClick={() => deleteBrand(id)}>X</a> {name}</li>
  )
}