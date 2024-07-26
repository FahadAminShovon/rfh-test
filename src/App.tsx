import './App.css';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import Input from './components/input';
import Section2 from './Section2';

export type DataType = {
  label: string;
  value: string;
};

export type LoginFormType = {
  email: string;
  password: string;
  nested: {
    field1: string;
  };
  selectValue: DataType;
};

function App() {
  const methods = useForm<LoginFormType>();

  return (
    <FormProvider {...methods}>
      <ChildComponent />
    </FormProvider>
  );
}

const ChildComponent = () => {
  const methods = useFormContext<LoginFormType>();

  return (
    <>
      <Input methods={methods} name='email' />
      <Input methods={methods} name='password' />
      <Input methods={methods} name='nested.field1' />
      <Section2 />
    </>
  );
};
export default App;
