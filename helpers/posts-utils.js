import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
}


export function getPostData(postIdentifier) {
    //extract slug from file name
    const postSlug = postIdentifier.replace(/\.md$/, '');

    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}