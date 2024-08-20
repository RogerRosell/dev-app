"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField
} from "../ui/form";
import { Button } from "../ui/button";

import { BrandFormSchema as formSchema, TBrand } from '@/dataModel/brands';
import FormElement from '../Molecules/FormElement';
import { useBrandStore, BrandsState, BrandsActions } from "@/stores/brands-store"

const BrandForm = () => {
const brands: BrandsState = useBrandStore((state: any) => state.brands);
const setInitBrands: BrandsActions = useBrandStore((state: any) => state.setInitBrands) 
const addBrand = useBrandStore((state: any) => state.addBrand);
if (!brands) setInitBrands

  const form= useForm<TBrand>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    }
  })
  const handleSubmit = (values: TBrand) => {
    addBrand(values)
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormElement field={field} label="Add new brand" defaultValue="Brand Name" />
            );
          }}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}

export default BrandForm