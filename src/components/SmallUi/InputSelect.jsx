
const InputSelect = ({ datalist, register, errors, required,name, title, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{title}{required && <sup className="text-red-600 text-sm">*</sup>}</label>
            <select className="w-full p-2 border-2 rounded"
                {...register}
                {...rest}

            >
                {datalist.map((data, i) => <option key={i} value={data.value}>{data.title}</option>)}
            </select>

            {errors?.[name] && <p className="text-red-600">{errors?.[name]?.message}</p>}
        </div>

    )
}

export default InputSelect