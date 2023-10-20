
const InputTextArea = ({ title, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">{title}</label>
            <textarea
                {...rest}
                rows={6}
                className="w-full p-2 border-2 rounded resize-none"

            ></textarea>
        </div>
    )
}

export default InputTextArea