import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import GFormPasswordfield from "./GFormPasswordfield";

export default {
  title: "Form/GFormPasswordfield",
  component: GFormPasswordfield,
} satisfies Meta<typeof GFormPasswordfield>;

type FormValues = {
  username: string;
};

const Template = (args: any) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      username: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <GFormPasswordfield<FormValues>
          {...args}
          control={methods.control}
          name="username"
        />
      </form>
    </FormProvider>
  );
};

export const Default: StoryObj<typeof GFormPasswordfield> = {
  render: Template,
  args: {
    label: "Username",
    placeholder: "Input your username",
  },
};

export const WithError: StoryObj<typeof GFormPasswordfield> = {
  render: Template,
  args: {
    label: "Username",
    placeholder: "Input your username",
    isError: true,
    errorMessage: "Field is required",
  },
};
