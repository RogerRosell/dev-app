import React from 'react'

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

interface IFormElementProps {
  field: any;
  label: string;
  defaultValue: any;
  type?: string;
}


const FormElement = ({ field, label, defaultValue, type }: IFormElementProps) => {
  console.log("field", field);
  return (
    <FormItem>
      <FormLabel className="text-lg">{label}</FormLabel>
      <FormControl>
        <Input {...field} placeholder={defaultValue} type={type ? type : "text"} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default FormElement