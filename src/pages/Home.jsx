import {  useState } from "react";
import MetaForm from "../components/SmallUi/MetaForm";
import MetaPreview from "../components/SmallUi/MetaPreview";
import { useSiteData } from "../contexts/SiteContext";
import { generateTheString } from "../assets/utils/configs/generaedString";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { generatedCode,
    setGeneratedCode
  } = useSiteData()
  const onSubmit = (data) => {
    console.log({ data })
    const generatedString = generateTheString(data)
    setGeneratedCode(generatedString)
    setIsModalOpen(true)
  }
  return (
    <>
      <MetaPreview generatedCode={generatedCode} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <MetaForm onSubmit={onSubmit} />
    </>
  );
};

export default Home;
