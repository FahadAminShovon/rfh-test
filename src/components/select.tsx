/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from '@radix-ui/themes';
import React from 'react';
import {
  Controller,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

type PropType<T extends FieldValues, TOption extends Record<string, any>> = {
  methods: UseFormReturn<T>;
  name: FieldPath<T>;
  options: TOption[];
  renderValue: (option: TOption) => React.ReactNode;
  renderOption: (option: TOption) => React.ReactNode;
  optionKey: keyof TOption;
  optionValue: keyof TOption;
};

const CustomSelect = <
  T extends FieldValues,
  TOption extends Record<string, any>
>({
  options,
  methods,
  name,
  renderValue,
  optionKey,
  optionValue,
  renderOption,
}: PropType<T, TOption>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 160 }}>
      <Controller
        control={methods.control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select.Root value={value} onValueChange={onChange}>
            <Select.Trigger onBlur={onBlur}>
              {renderValue(value)}
            </Select.Trigger>
            <Select.Content position='popper'>
              {options.map((option) => (
                <Select.Item
                  key={option[optionKey]}
                  value={option[optionValue]}
                >
                  {renderOption(option)}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        )}
      />
    </div>
  );
};

export default CustomSelect;
