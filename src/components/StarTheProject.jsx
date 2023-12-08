import { FaGithub } from "react-icons/fa";
const StarTheProject = () => {
    return (
        <div className="py-5 text-center">
            <a className="inline-block" href="https://github.com/Shariar-Hasan/MetaMagnet" target="_blank" rel="noopenner noreferrer">
                <span className="bg-zinc-800 hover:bg-zinc-700 py-1 px-3 text-gray-100 rounded-full flex justify-center items-center">
                    <FaGithub className="mr-3 text-lg" /> <span>Star This Project</span>
                </span>
            </a>
        </div>
    )
}

export default StarTheProject