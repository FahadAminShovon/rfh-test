import CustomSelect from './components/select';
import { DataType, LoginFormType } from './App';
import { useFormContext } from 'react-hook-form';

const data: DataType[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

const Section3 = () => {
  const methods = useFormContext<LoginFormType>();
  return (
    <CustomSelect
      methods={methods}
      name='selectValue'
      options={data}
      renderValue={(option) => <div>{JSON.stringify(option)}</div>}
      renderOption={(option) => <div>{JSON.stringify(option)}</div>}
      optionKey={'label'}
      optionValue={'value'}
    />
  );
};

export default Section3;
