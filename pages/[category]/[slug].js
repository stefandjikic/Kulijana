import React from "react";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";
import { getAllSlugs, getArticleDetails, getRelatedArticles } from "@/graphQL";
import { formatDate } from "@/utils/helpers";
import { useRouter } from "next/router";

const SlugInCategory = ({ article, relatedArticles = [] }) => {
  const router = useRouter()
  // console.log(article, "post");
  // console.log(relatedArticles, 'relatedArticles')
  const {
    title = "",
    excerpt = "",
    createdAt = "",
    articleImage: { url: imgUrl = "" } = {},
    content: { html = "" } = {},
  } = { ...article } || {};
  if (router.isFallback) {
    return <Box>Učitavanje...</Box>
  }
  return (
    <Layout>
      <PageLayout isReadingPage relatedArticles={relatedArticles}>
        <Heading mb="6">{title}</Heading>
        <Box my="5" fontSize="xs" opacity="0.5">
          {formatDate(createdAt)}
        </Box>
        <Text mb="5">{excerpt}</Text>
        <Box height="350px" bg="blackAlpha.300" my="5" position="relative">
          <Image src={imgUrl} alt={title} fill style={{ objectFit: "cover" }} />
        </Box>
        <Box
          mb="10"
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Box>
      </PageLayout>
    </Layout>
  );
};

export default SlugInCategory;

export async function getStaticPaths() {
  const slugs = (await getAllSlugs()) || [];
  // const slugs = [
  //   {
  //     category: {
  //       slug: 'biz',
  //     },
  //     slug: 'nokia-dobija-novi-logo',
  //   },
  // ]

  const paths = slugs && slugs?.map((data) => ({
    params: {
      category: data.category?.slug,
      slug: data.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { article = {} } = await getArticleDetails(params?.slug);
  const { articles: relatedArticles = {} } = await getRelatedArticles(
    params?.slug,
    params?.category
  );

  return {
    props: {
      article,
      relatedArticles,
    },
    revalidate: 1,
  };
}
