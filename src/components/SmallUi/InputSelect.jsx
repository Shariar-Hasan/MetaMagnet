
const InputSelect = ({ datalist, title, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{title}</label>
            <select className="w-full p-2 border-2 rounded" {...rest}>
                {datalist.map((data, i) => <option key={i} value={data.value}>{data.title}</option>)}
            </select>
        </div>

    )
}

export default InputSelect