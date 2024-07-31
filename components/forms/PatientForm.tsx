"use client";

import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      // const userData = {
      //     name: values.name,
      //     email: values.email,
      //     phone: values.phone,
      // }
      // const user = await createUser(userData);
      // if(user) {
      //     router.push(`/patients/${user.$id}/register`);
      // }
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <CustomFormField
          control={form.control}
          type={"input"}
          name="name"
          label="Full Name"
          placeholder="John Doe"
        />
        <CustomFormField
          control={form.control}
          type={"input"}
          name="email"
          label="Email"
          placeholder="ngogiahuan@gmail.com"
        />
        <CustomFormField
          control={form.control}
          type={"phone"}
          name="phoe"
          label="Phone"
          placeholder="Enter phone number"
        />
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
