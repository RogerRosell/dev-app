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

import { EmulsionFormSchema as formSchema, TEmulsion } from '@/dataModel/emulsions';
import FormElement from '../Molecules/FormElement';
import { useEmulsionsStore, TEmulsionsState, TEmulsionsActions } from '@/stores/emulsions-store';
import { useDevelopersStore, TDevelopersState, TDevelopersActions } from "../../stores/developers-store";
import { BrandsActions, BrandsState, useBrandStore } from "../../stores/brands-store";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from '@/components/ui/select';
import { Input } from '../ui/input';

const EmulsionForm = () => {
  const brandList: BrandsState = useBrandStore((state: any) => state.brands);
  const setInitBrands: BrandsActions = useBrandStore((state: any) => state.setInitBrands);

  const emulsions: TEmulsionsState = useEmulsionsStore((state: any) => state.emulsions);
  const setInitEmulsions: TEmulsionsActions = useEmulsionsStore((state: any) => state.setInitEmulsions)
  const addEmulsion = useEmulsionsStore((state: any) => state.addEmulsion);

  if (!brandList) setInitBrands;
  if (!emulsions) setInitEmulsions

  const getBrandName = (id: string) => {
    const brand = Array.isArray(brandList) && brandList.find((brand) => brand.id === id);
    console.log(brand.name)
    return brand?.name
  }

  const form = useForm<TEmulsion>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandId: "",
      name: "",
    }
  })
  const handleSubmit = (values: TEmulsion): any => {
    // alert("Developer added successfully")
    // console.log("values", values);
    addEmulsion(values)
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
              <FormElement field={field} label="Name" defaultValue="Developer Name" type="text" />
            );
          }}
        />
        <FormField
          control={form.control}
          name="iso"
          render={({ field }) => {
            return (
              // <FormElement field={field} label="Iso" defaultValue={0} type="number"/>
              <FormItem>
      <FormLabel className="text-lg">Iso</FormLabel>
      <FormControl>
        <Input {...field} type="number" onChange={(event) => field.onChange(parseInt(event.target.value))}/>
      </FormControl>
    </FormItem>
            );
          }}
        />
         <FormField
          control={form.control}
          name="notes"
          render={({ field }) => {
            return (
              <FormElement field={field} label="Notes" defaultValue="" />
            );
          }}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}

export default EmulsionForm