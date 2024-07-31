"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Control } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";

type FormFieldType =
  | "input"
  | "textarea"
  | "phone"
  | "checkbox"
  | "date"
  | "select"
  | "radio"
  | "file"
  | "skeleton";

interface CustomFormFieldProps {
  control: Control<any>;
  type: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dateFormats?: string[];
  showTime?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderInput = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  switch (props.type) {
    case "input":
      return (
        <div className="border-dark-500 bg-dark-400 flex rounded-md border">
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input broder-0"
            />
          </FormControl>
        </div>
      );
    case "phone":
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="VN"
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            placeholder={props.placeholder}
            onChange={(value) => field.onChange(value)}
            {...field}
            className="input-phone"
          />
        </FormControl>
      );
    default:
      break;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, type, name, label, placeholder } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {type !== "checkbox" && label && <FormLabel>{label}</FormLabel>}
          <RenderInput field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
