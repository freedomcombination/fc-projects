import React from 'react'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@fc/ui/base/input'
import { Label } from '@fc/ui/base/label'

import type { TextField } from '@payloadcms/plugin-form-builder/types'

import { Error } from '../Error'
import { Width } from '../Width'
export const Number: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ defaultValue, errors, label, name, register, required, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}

        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>
      <Input defaultValue={defaultValue} id={name} type="number" {...register(name, { required })} />
      {errors[name] && <Error />}
    </Width>
  )
}
