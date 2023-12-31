import SyntaxHighlighter from 'react-syntax-highlighter';
import { arta } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Box from "../UI/Box"
import toast from 'react-hot-toast';

const MetaPreview = ({ generatedCode, isModalOpen, setIsModalOpen }) => {
    const clickedForCopy = () => {
        navigator.clipboard.writeText(generatedCode).then(() => {

            toast.success("Copied to Clipboard")
        }).catch(() => {
            toast.error("Your Browser does not support copy")
        })
    }
    return (
        <div className={`duration-500 transition-all w-screen h-screen z-[10] fixed top-0 left-0
        flex justify-center items-center ${isModalOpen ? "visible" : "invisible"}
        `}>
            <span className={` fixed top-0 left-0 w-screen h-screen ${isModalOpen ? "visible opacity-60" : "invisible opacity-0"}`}></span>
            <span
                className={`absolute top-0 left-0 w-full h-full  z-[11] bg-black ${isModalOpen ? "bg-opacity-70 visible" : "invisible bg-opacity-0 "}`}
                onClick={() => setIsModalOpen(false)}></span>
            <div className={` duration-500 transition-all  z-[100] ${isModalOpen ? "translate-y-0 scale-100 opacity-100 visible " : "translate-y-[1000px] scale-0 opacity-0 invisible"}`}>
                <Box>
                    <span onClick={() => setIsModalOpen(false)} className="absolute top-[5px] right-[5px] w-[30px] h-[30px] aspect-square rounded-full  flex justify-center items-center duration-200 cursor-pointer
                 hover:bg-neutral-600 hover:text-white"><i className="fa fa-times text-2xl" aria-hidden="true"></i></span>
                    <h4 className='font-bold text-xl'>Generated Meta Data</h4>
                    <div className="relative text-[10px] md:text-base max-w-2xl md:h-[500px] h-[200px] rounded-md">
                        <div className='w-full h-full overflow-y-scroll no-scrollbar rounded'>
                            {
                                generatedCode
                                    ?

                                    <SyntaxHighlighter language="htmlbars" style={arta} wrapLongLines onClick={clickedForCopy} className="cursor-pointer"
                                        title='Click to copy'>
                                        {generatedCode}
                                    </SyntaxHighlighter>
                                    :
                                    <span className="w-[100px] h-[100px] mx-auto inline-block bg-transparent rounded-full animate-spin border-2 border-t-gray-800  border-r-gray-600 border-b-gray-400 border-l-transparent"></span>
                            }
                        </div>
                    </div>
                    <span
                        onClick={() => clickedForCopy()}
                        className='inline-block py-[1px] px-2 bg-blue-600 text-gray-200 cursor-pointer rounded my-2'
                        title='Click to copy'
                    >
                        Copy to Clipboard <i className="fas fa-copy text-lg"></i>
                    </span>
                </Box>
            </div>
        </div >
    )
}

export default MetaPreview