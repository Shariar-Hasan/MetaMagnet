
const InputTextArea = ({ title, name, errors, required, register, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">{title}{required && <sup className="text-red-600 text-sm">*</sup>}</label>
            <textarea
                {...register}
                {...rest}
                rows={6}
                className="w-full p-2 border-2 rounded resize-none"

            ></textarea>

            {errors?.[name] && <p className="text-red-600">{errors?.[name]?.message}</p>}
        </div>
    )
}

export default InputTextArea