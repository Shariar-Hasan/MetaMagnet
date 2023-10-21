
const InputText = ({ title, name, register, required, errors, ...rest }) => {
    console.log(errors)
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{title}{required && <sup className="text-red-600 text-sm">*</sup>}</label>
            <input
                type="text"
                {...register}
                {...rest}
                className={`w-full p-2 border-2 rounded ${errors?.[name] ? "border-red-600" : ""}`}
            />
            {errors?.[name] && <p className="text-red-600">{errors?.[name]?.message}</p>}
        </div>
    )
}

export default InputText