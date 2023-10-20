
// import toast from "react-hot-toast"
import Box from "../UI/Box"

const MetaPreview = ({ generatedCode, isModalOpen, setIsModalOpen }) => {
    return (
        <div className={`duration-500 transition-all fixed top-0 left-0 w-screen h-screen bg-black ${isModalOpen ? "bg-opacity-70 z-[10] visible" : "invisible bg-opacity-0 z-[10]"}
        flex justify-center items-center
        `}>
            <Box>
                <span onClick={() => setIsModalOpen(false)} className="absolute top-[5px] right-[5px] w-[30px] h-[30px] aspect-square rounded-full  flex justify-center items-center duration-200 cursor-pointer
                 hover:bg-black hover:text-white"><i className="fa fa-times" aria-hidden="true"></i></span>
                <h4>Generated Meta Data</h4>
                <div className="max-w-xl max-h-[300px] overflow-scroll ">
                    <div className=" px-4 py-2 bg-neutral-800 text-gray-200 w-full whitespace-pre-line">
                        {generatedCode ? generatedCode : <span className="w-[100px] h-[100px] mx-auto inline-block bg-transparent rounded-full animate-spin border-2 border-t-gray-800  border-r-gray-600 border-b-gray-400 border-l-transparent"></span>}
                    </div>
                </div>

                <button type="submit" className="bg-neutral-900 text-white p-2 rounded hover:bg-gray-700 mr-3" onClick={() => {
                    navigator.clipboard.writeText(generatedCode)
                    // toast("Code Successfully Copied")
                }}>
                    Copy Code <i className="fas fa-copy    "></i>
                </button>
                <button type="submit" className="bg-neutral-900 text-white p-2 rounded hover:bg-gray-700">
                    Close Perview <i className="fas fa-rotate"></i>
                </button>
            </Box>
        </div>
    )
}

export default MetaPreview