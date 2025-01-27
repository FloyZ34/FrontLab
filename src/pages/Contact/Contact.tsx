import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./InputField";

type FormInputs = {
    name: string;
    email: string;
    message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("Form Data:", data);
        reset();
    };

    return (
        <div className="container font-sans text-gray-800 max-w-lg mx-auto mb-5">
            <h1 className="text-4xl text-black mb-5 text-center">Контакты</h1>
            <p className="text-lg mb-5 text-black text-center">
                Если у вас есть вопросы, не стесняйтесь обращаться!
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="container bg-white p-5 rounded-lg shadow-md"
            >
                <InputField
                    label="Имя"
                    name="name"
                    type="text"
                    register={register}
                    errors={errors.name}
                />
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors.email}
                    pattern={EMAIL_REGEX}
                />
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1">
                        Сообщение:
                    </label>
                    <textarea
                        id="message"
                        {...register("message", {
                            required: "Сообщение обязательно для заполнения.",
                        })}
                        className={`w-full p-2 border ${
                            errors.message ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm min-h-[100px] resize-y`}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full p-3 rounded-md bg-blue-500 text-white text-lg hover:bg-black transition-colors"
                >
                    Отправить
                </button>
            </form>
            {isSubmitSuccessful && (
                <p className="mt-5 text-green-500 text-center">
                    Спасибо за ваше сообщение!
                </p>
            )}
        </div>
    );
};
