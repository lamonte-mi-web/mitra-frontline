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
    min?: number; // for number/slider
    max?: number; // for number/slider
    step?: number; // for slider
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
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    switch (type) {
                        case 'textarea':
                            return (
                                <textarea
                                    {...field}
                                    placeholder={placeholder}
                                    rows={3}
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            );
                        case 'select':
                            return (
                                <select
                                    {...field}
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    <option value="">-- Pilih --</option>
                                    {options.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                                    className="w-full h-2 bg-yellow-200 rounded-lg accent-yellow-400"
                                />
                            );
                        case 'date':
                            return (
                                <ReactDatePicker
                                    selected={field.value ? new Date(field.value) : null}
                                    onChange={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                                    dateFormat="dd/MM/yyyy"
                                    showYearDropdown
                                    scrollableYearDropdown
                                    yearDropdownItemNumber={100} // last 100 years
                                    maxDate={new Date()} // can't select future
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholderText={placeholder || "Pilih tanggal"}
                                />

                            );
                        default:
                            return (
                                <input
                                    {...field}
                                    type={type}
                                    placeholder={placeholder}
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            );
                    }
                }}
            />
            {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]?.message?.toString()}</p>}
        </div>
    );
}
