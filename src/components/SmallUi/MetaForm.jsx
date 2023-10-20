
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputText from './InputText';
import Box from '../UI/Box';
import InputTextArea from './InputTextArea';
import logo from "./../../assets/images/logo.png"
import InputCheckBox from './InputCheckBox';
import InputSelect from './InputSelect';
import { languageList } from '../../assets/utils/configs/selectDataList';
const MetaForm = ({ onSubmit }) => {
    const [isOpenGLDifferent, setIsOpenGLDifferent] = useState(false)
    const [isTwitterDifferent, setIsTwitterDifferent] = useState(false)
    const { register, handleSubmit } = useForm();

    return (
        <Box>
            <img src={logo} alt={"MetaVerse Logo"} className='mx-auto w-[220px] md:w-auto' />
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                {/* Primary Meta Tags */}
                <InputText
                    title="Site Title"
                    {...register('title')} />
                <InputText
                    title="Keywords"
                    {...register('keywords')} />

                <InputTextArea
                    title="Site Description"
                    {...register('description')} />

                <InputText
                    title="Site URL"
                    placeholder="https://YourWebSiteLink.com/"
                    {...register('url')} />
                <InputCheckBox
                    title={"Set Different data for Open GL"}
                    onChange={() => setIsOpenGLDifferent(prev => !prev)} />

                {
                    isOpenGLDifferent && <>
                        {/* Open Graph / Facebook */}
                        <InputText
                            title={"Open GL Title"}
                            {...register('ogTitle')} />
                        <InputTextArea
                            title="Open GL Description"
                            {...register('ogDescription')} />

                        <InputText
                            title={"Open GL Image Url"}
                            {...register('ogImage')} />
                    </>
                }

                <InputCheckBox
                    title={"Set Different data for Twitter"}
                    onChange={() => setIsTwitterDifferent(prev => !prev)} />
                {
                    isTwitterDifferent && <>
                        {/* Twitter */}

                        <InputText
                            title={"Twitter Title"}
                            {...register('twitterTitle')} />
                        <InputTextArea
                            title="Twitter Description"
                            {...register('twitterDescription')} />
                        <InputText
                            title={"Twitter Image Url"}
                            {...register('twitterImage')} />
                    </>
                }

                {/* Other Meta Tags */}

                <InputText
                    title={"Author"}
                    {...register('author')} />
                <InputSelect title="Language" {...register('language')} datalist={languageList} />
                <InputText
                    title={"Search Engine will Revisit after ___ days?"}
                    {...register('revisitAfter')} />

                {/* Submit button */}
                <button type="submit" className="bg-neutral-900 text-white p-2 rounded hover:bg-gray-900">
                    Generate Meta Tags <i className="fas fa-rotate"></i>
                </button>
            </form>
        </Box>
    );
};



export default MetaForm;
