import { FC } from "react";
import { FieldValues, UseFormRegister, FieldError } from "react-hook-form";

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldError | undefined;
    pattern?: RegExp;
}

const InputField: FC<InputFieldProps> = ({ label, name, type, register, errors, pattern }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block mb-1">
            {label}:
        </label>
        <input
            type={type}
            id={name}
            {...register(name, {
                required: `${label} обязательно для заполнения.`,
                pattern: pattern && {
                    value: pattern,
                    message: `Введите корректный ${label.toLowerCase()}.`,
                },
            })}
            className={`w-full p-2 border ${
                errors ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
        />
        {errors && (
            <p className="text-red-500 text-sm mt-1">
                {errors.message}
            </p>
        )}
    </div>
);

export default InputField;
