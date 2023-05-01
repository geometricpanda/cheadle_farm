import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {StoryblokComponent, useStoryblokApi, useStoryblokState} from "@storyblok/react";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import Head from 'next/head';

interface HomeProps {
    story: any
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
    const slug = Array.isArray(context.params!['slug'])
        ? context.params!['slug'].join('/')
        : context.params!['slug']!;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const storyblokApi = useStoryblokApi()
    let {data} = await storyblokApi.getStory(slug, {resolve_links: 'story'});
    return {
        props: {
            story: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const storyblokApi = useStoryblokApi();
    const {data} = await storyblokApi.getStories({});
    const paths = data.stories.map((story) => ({
        params: {
            slug: story.path || story.full_slug
        }
    }))
    return {
        fallback: false,
        paths
    }
}


const Home: NextPage<HomeProps> = ({story: initialStory}) => {
    const {story} = useStoryblokState(initialStory) as any;
    return (
        <>
            <Head>
                <title>Cheadle Farm</title>
            </Head>
            <Header/>
            <main>
                <StoryblokComponent blok={story.content}/>
            </main>
            <Footer/>
        </>
    );
}

export default Home
