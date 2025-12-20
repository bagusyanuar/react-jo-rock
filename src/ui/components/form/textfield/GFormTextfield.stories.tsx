import { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import GFormTextfield from "./GFormTextfield";

export default {
  title: "Form/GFormTextfield",
  component: GFormTextfield,
} satisfies Meta<typeof GFormTextfield>;

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
        <GFormTextfield<FormValues>
          {...args}
          control={methods.control}
          name="username"
        />
      </form>
    </FormProvider>
  );
};

export const Default: StoryObj<typeof GFormTextfield> = {
  render: Template,
  args: {
    label: "Username",
    placeholder: "Input your username",
  },
};

export const WithError: StoryObj<typeof GFormTextfield> = {
  render: Template,
  args: {
    label: "Username",
    placeholder: "Input your username",
    isError: true,
    errorMessage: "Field is required",
  },
};
