
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import LikeButton from '../ui/like-button';


SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('html', jsx);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent({ postData }) {

    const { title, image, date, slug, readTime, topic, content, updatedDate } = postData;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;

    const customRenderers = {

        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div>
                        <Image
                            src={imagePath}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}>
                    {children}
                </SyntaxHighlighter>
            );
        },
    };

    return (
        <>
        <div className="w-full px-12 py-4 font-Bai ">
            <div className='flex my-4'>
                <BsArrowLeft className='w-5 h-5 mx-2 my-auto' />
                    <span className="hover:font-semibold"><Link href='/posts' >Back to Posts</Link></span>
            </div>
                <div className='md:w-3/5 my-6 mx-auto  text-gray-800 font-Rubik  '>
                    <Image src={imagePath} width='800px' height='400px' alt='post image' className='rounded-2xl border-2 shadow-md' />
                    <h1 className='text-4xl font-semibold my-3 font-Bai text-center'>{title}</h1>
                    <h2 className='text-xl font-medium font-Bai text-center text-gray-500'>{formattedDate}- {readTime} read</h2>
                    <h3 className='mx-auto text-lg px-2 py-1 border bg-slate-100 border-slate-300 w-1/2 md:w-2/12 text-center  my-4 rounded-lg '><Link href={`/topics/${topic}`}>{topic}</Link></h3>
                <hr />
                    <article className="prose prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 lg:prose-lg my-4">
                        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
                </article>
                    <hr />
                    <div className='flex flex-col md:flex-row items-center md:justify-between  md:my-4 my-2 py-4 px-8'>
                        <div>
                            <h2 className='text-lg font-semibold font-Bai text-center text-gray-500'>Last updated</h2>
                            <h2 className='text-xl font-semibold font-Bai text-center '>{updatedDate ? formattedUpdatedDate : formattedDate}</h2>
                        </div>
                        <LikeButton postSlug={slug} />
                    </div>
            </div>
        </div >
        </>

    )
}

export default PostContent

