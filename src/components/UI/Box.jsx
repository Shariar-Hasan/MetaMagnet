
const Box = ({ children }) => {
    return (
        <div className='relative max-w-4xl mx-auto p-8 border rounded-lg shadow-xl mt-8 bg-white'>
            {children}
        </div>
    )
}

export default Box