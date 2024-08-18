import React from 'react'

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface IFormElementProps {
  field: any;
  label: string;
  defaultValue: any;
}


const FormElement = ({ field, label, defaultValue }: IFormElementProps) => {
  return (
    <FormItem>
      <FormLabel className="text-lg">{label}</FormLabel>
      <FormControl>
        <Input {...field} placeholder={defaultValue} type="text" />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default FormElement