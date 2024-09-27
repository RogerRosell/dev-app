"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { DeveloperFormSchema as formSchema, TDeveloper } from '@/dataModel/developers';
import FormElement from '../Molecules/FormElement';
import { useDeveloperStore, TDeveloperState, DevelopersActions } from "@/stores/developers-store";
import { BrandsActions, BrandsState, useBrandStore } from "@/stores/brands-store";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from '@/components/ui/select';

const DeveloperForm = () => {
  const brandList: BrandsState = useBrandStore((state: any) => state.brands);
  const setInitBrands: BrandsActions = useBrandStore((state: any) => state.setInitBrands);


  const developers: TDeveloperState = useDeveloperStore((state: any) => state.developers);
  const setInitDevelopers: DevelopersActions = useDeveloperStore((state: any) => state.setInitDevelopers)
  const addDeveloper = useDeveloperStore((state: any) => state.addDeveloper);

  if (!brandList) setInitBrands;
  if (!developers) setInitDevelopers

  console.log("brands", brandList);
  // console.log("developers", developers);

  const getBrandName = (id: string) => {
    const brand = Array.isArray(brandList) && brandList.find((brand) => brand.id === id);
    console.log(brand.name)
    return brand?.name
  }

  const form = useForm<TDeveloper>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandId: "",
      name: "",
    }
  })
  const handleSubmit = (values: TDeveloper): any => {
    // alert("Developer added successfully")
    // console.log("values", values);
    addDeveloper(values)
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="brandId"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <Select 
                  onValueChange={(value) =>
                    value && field.onChange(value)
                  }
                  value={field.value ?? "new"}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      {field.value ? getBrandName(field.value) : <SelectValue placeholder="Select Brand" /> }
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">Add new Brand</SelectItem>
                    {brandList && Array.isArray(brandList) && brandList.length > 0 &&
                      brandList.map((brand) => <SelectItem key={brand.id} value={brand.id}>{brand.name}</SelectItem>)}
                  </SelectContent>


                </Select>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormElement field={field} label="Name" defaultValue="Developer Name" />
            );
          }}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}

export default DeveloperForm