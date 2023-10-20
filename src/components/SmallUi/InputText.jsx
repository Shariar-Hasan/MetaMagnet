
const InputText = ({ title, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{title}</label>
            <input
                type="text"
                {...rest}
                className="w-full p-2 border-2 rounded"
            />
        </div>
    )
}

export default InputText