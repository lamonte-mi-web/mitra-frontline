'use client';

import { Controller, Control, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type FormInputProps = {
    name: keyof FormData;
    label: string;
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
    type?: 'text' | 'email' | 'number' | 'tel' | 'textarea' | 'select' | 'slider' | 'date';
    options?: { label: string; value: any }[]; // for select
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
};

export default function FormInput({
    name,
    label,
    control,
    errors,
    type = 'text',
    options = [],
    min,
    max,
    step,
    placeholder,
}: FormInputProps) {
    const errorMessage = errors[name]?.message?.toString();

    return (
        <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    const baseClass =
                        'w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none';
                    const errorClass =
                        errorMessage ? 'border-red-400 focus:ring-red-300' : '';
                    const mergedClass = `${baseClass} ${errorClass}`;

                    switch (type) {
                        case 'textarea':
                            return (
                                <textarea
                                    {...field}
                                    placeholder={placeholder}
                                    rows={3}
                                    className={mergedClass}
                                />
                            );

                        case 'select':
                            return (
                                <select {...field} className={mergedClass}>
                                    <option value="">-- Pilih --</option>
                                    {options.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            );

                        case 'slider':
                            return (
                                <input
                                    {...field}
                                    type="range"
                                    min={min}
                                    max={max}
                                    step={step || 1}
                                    className="w-full h-2 rounded-lg appearance-none bg-gray-200 accent-yellow-400 cursor-pointer"
                                />
                            );

                        case 'date':
                            return (
                                <div className="w-full">
                                    <ReactDatePicker
                                        wrapperClassName="w-full" // makes container full width
                                        className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        selected={field.value ? new Date(field.value) : null}
                                        onChange={(date) =>
                                            field.onChange(date ? date.toISOString().split('T')[0] : '')
                                        }
                                        dateFormat="dd/MM/yyyy"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={100}
                                        maxDate={new Date()}
                                        placeholderText={placeholder || 'Pilih tanggal'}
                                    />
                                </div>
                            );

                        case 'number':
                            return (
                                <input
                                    {...field}
                                    type="number"
                                    min={min}
                                    max={max}
                                    step={step || 1}
                                    placeholder={placeholder}
                                    value={field.value ?? ''}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        field.onChange(val === '' ? undefined : val); // string (UUID consistency)
                                    }}
                                    className={mergedClass}
                                />
                            );

                        default:
                            return (
                                <input
                                    {...field}
                                    type={type}
                                    placeholder={placeholder}
                                    className={mergedClass}
                                />
                            );
                    }
                }}
            />
            {errorMessage && (
                <p className="mt-1 text-xs font-medium text-red-500">{errorMessage}</p>
            )}
        </div>
    );
}
