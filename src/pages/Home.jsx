import { useState } from "react";
import MetaForm from "../components/SmallUi/MetaForm";
import MetaPreview from "../components/SmallUi/MetaPreview";
import { useSiteData } from "../contexts/SiteContext";
import { generateTheString } from "../assets/utils/configs/generaedString";
import Container from "../components/UI/Container";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { generatedCode,
    setGeneratedCode
  } = useSiteData()
  const onSubmit = (data) => {
    const generatedString = generateTheString(data)
    setGeneratedCode(generatedString)
    setIsModalOpen(true)
  }
  return (
    <Container>
      <MetaPreview generatedCode={generatedCode} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <MetaForm onSubmit={onSubmit} />
    </Container>
  );
};

export default Home;
