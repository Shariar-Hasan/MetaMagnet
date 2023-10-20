
const InputCheckBox = ({ title, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                <input
                    type="checkbox"
                    {...rest}
                    className="p-2 border-2 rounded w-[20px]"
                />
                {title}</label>

        </div>
    )
}

export default InputCheckBox