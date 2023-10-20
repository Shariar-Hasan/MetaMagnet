import { useState } from "react";
import MetaForm from "../components/SmallUi/MetaForm";
import MetaPreview from "../components/SmallUi/MetaPreview";
import { useSiteData } from "../contexts/SiteContext";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { generatedCode, setGeneratedCode } = useSiteData()
  const onSubmit = (data) => {
    console.log(data)
    setGeneratedCode(`<!-- Open Graph / Facebook -->\n' 
    <meta property="og:type" content="website" />\n<meta property="og:url" content="https://metatags.io/" />\n<meta property="og:title" content="QuoteVerse - Explore Inspirational Quotes, Poems, and Verses" />
    <meta property="og:description" content="Discover a world of inspiration at QuoteVerse! Dive into a collection of meaningful quotes, soul-stirring poems, and thought-provoking verses. Unleash the power of words and find motivation, wisdom, and comfort in our curated selection of literary treasures" />
    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
    
    <meta property="og:type" content="website" />\n<meta property="og:url" content="https://metatags.io/" />\n<meta property="og:title" content="QuoteVerse - Explore Inspirational Quotes, Poems, and Verses" />
    <meta property="og:description" content="Discover a world of inspiration at QuoteVerse! Dive into a collection of meaningful quotes, soul-stirring poems, and thought-provoking verses. Unleash the power of words and find motivation, wisdom, and comfort in our curated selection of literary treasures" />
    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
    
    <meta property="og:type" content="website" />\n<meta property="og:url" content="https://metatags.io/" />\n<meta property="og:title" content="QuoteVerse - Explore Inspirational Quotes, Poems, and Verses" />
    <meta property="og:description" content="Discover a world of inspiration at QuoteVerse! Dive into a collection of meaningful quotes, soul-stirring poems, and thought-provoking verses. Unleash the power of words and find motivation, wisdom, and comfort in our curated selection of literary treasures" />
    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
    
    `)
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
