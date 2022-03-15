import { Feed } from 'feed'
const generateRSSFeed = (articles) => {
    const baseUrl = 'https://markdown-blog-ten-beta.vercel.app/';
    const author = {
        name: 'Teyim Asobo',
        email: 'teyimasobo@gmail.com',
        link: 'https://twitter.com/asofex',
    };

    // Construct a new Feed object
    const feed = new Feed({
        title: 'Articles by Teyim Asobo',
        description:
            "U can find me on all platforms like twitter,github and linkedIn.pretty nerdy? ,yes i know. I am also on facebook and instagram too, not sharing hot pics though..i have a passion for frontend development",
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
        },
        author,
    });

    // Add each article to the feed
    articles.forEach((post) => {
        const { content, slug, date, excerpt, title } = post;
        const url = `${baseUrl}/${slug}`;

        feed.addItem({
            title,
            id: url,
            link: url,
            excerpt,
            content,
            author: [author],
            date: new Date(date),
        });
    });

    return feed;

};
export default generateRSSFeed;