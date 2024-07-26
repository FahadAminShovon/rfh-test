import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

type PropType<T extends FieldValues> = {
  methods: UseFormReturn<T>;
  name: FieldPath<T>;
};
const Input = <T extends FieldValues>({ methods, name }: PropType<T>) => {
  return <input {...methods.register(name)} />;
};

export default Input;
