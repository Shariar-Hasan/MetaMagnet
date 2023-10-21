
import { useForm } from 'react-hook-form';
import InputText from './InputText';
import Box from '../UI/Box';
import InputTextArea from './InputTextArea';
import logo from "./../../assets/images/logo.png"
import InputSelect from './InputSelect';
import { dayOptions, encodingOptions, followOptions, indexOptions, languageList } from '../../assets/utils/configs/selectDataList';
const MetaForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors },
    } = useForm();

    return (
        <Box>
            <img src={logo} alt={"MetaVerse Logo"} className='mx-auto w-[220px] md:w-auto' />
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                {/* Primary Meta Tags */}
                <InputText
                    title="Title of your site"
                    name="title"
                    required
                    errors={errors}
                    placeholder="Your site title within 70 words"
                    register={register('title', {
                        required: "This field is required"
                    })} />

                <InputTextArea
                    title="Description of your site"
                    name="description"
                    errors={errors}
                    required
                    placeholder="Write Down a description for your site within 130 - 150 words"
                    register={register('description', {
                        required: "This field is required"
                    })} />

                <InputTextArea
                    title="Site keywords (Seperate with Comma)"
                    name="keywords"
                    errors={errors}
                    required
                    placeholder="keyword1, keyword2, keyword3, . . ."
                    register={register('keywords', {
                        required: "This field is required"
                    })} />
                <InputText
                    title="Site URL"
                    name="url"
                    required
                    errors={errors}
                    placeholder="https://your-website-link.com/"
                    register={register('url', {
                        required: "This field is required"
                    })} />

                <InputText
                    title={"Webiste image url"}
                    name="image"
                    errors={errors}
                    placeholder="Your site image"
                    register={register('image')} />


                {/* Other Meta Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className='col-span-1'>
                        <InputText
                            title={"Author"}
                            name="author"
                            errors={errors}
                            register={register('author')} />
                    </div>
                    <div className='col-span-1'>
                        <InputSelect
                            title="Which language you site use?"
                            name="language"
                            errors={errors}
                            register={register('language')}
                            datalist={languageList} />
                    </div>
                    <div className='col-span-1'>
                        <InputSelect
                            title={"Search Engine will Revisit after ____?"}
                            name="revisitAfter"
                            errors={errors}
                            register={register('revisitAfter')}
                            datalist={dayOptions}
                        />
                    </div>
                    <div className='col-span-1'>
                        <InputSelect
                            title={"What type of content your website display?"}
                            name="contentType"
                            errors={errors}
                            register={register('contentType')}
                            datalist={encodingOptions}
                        />
                    </div>
                    <div className='col-span-1'>
                        <InputSelect
                            title={"Allow Robot to index?"}
                            name="index"
                            errors={errors}
                            register={register('index')}
                            datalist={indexOptions}
                        />
                    </div>
                    <div className='col-span-1'>
                        <InputSelect
                            title={"Allow Robot to follow?"}
                            name="follow"
                            errors={errors}
                            register={register('follow')}
                            datalist={followOptions}
                        />
                    </div>
                </div>





                {/* Submit button */}
                <div className='flex flex-wrap justify-start gap-3'>
                    <button type="submit" className="bg-neutral-900 text-white p-2 rounded hover:bg-gray-900">
                        Generate Meta Tags <i className="fas fa-rotate"></i>
                    </button>
                    <button type="button" onClick={() => reset()} className="bg-neutral-900 text-white p-2 rounded hover:bg-gray-900">
                        Reset All <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        </Box >
    );
};



export default MetaForm;
