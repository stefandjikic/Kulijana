import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";
import ArticleCard from "@/components/article/ArticleCard";
import BigArticleCard from "@/components/article/BigArticleCard";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";
import GridSectionWithTitle from "@/components/utils/GridSectionWithTitle";
import { getArticlesByCategory, getCategoriesBySlug } from "@/graphQL";
import { resolvePageTitle } from "@/utils/helpers";
import Pagination from "@/components/utils/Pagination";

const DynamicCategoryPage = ({ articles = [], pageInfo = {}, count = 0 }) => {
  const router = useRouter();
  const { category } = router.query;
  const [parsedArticles, setParsedArticles] = useState([]);
  const [pageInfoDetails, setpageInfoDetails] = useState({});
  const [skip, setSkip] = useState(0);

  // const parsedArticles = useMemo(
  //   () => articles.map((article) => article?.node),
  //   [articles]
  // );

  useEffect(() => {
    setParsedArticles(articles.map((article) => article?.node));
    setpageInfoDetails(pageInfo);
  }, [articles, pageInfo]);

  const fetchArticles = async (skipArticles) => {
    setSkip(skipArticles);
    const res = await getArticlesByCategory(category, skipArticles);
    setParsedArticles(res?.edges?.map((article) => article?.node));
    setpageInfoDetails(res?.pageInfo);
    console.log(res, "res");
    window.scrollTo(0, 0);
  };

  if (router.isFallback) {
    return <Box>Učitavanje...</Box>;
  }

  return (
    <Layout>
      <PageLayout>
        <Heading mb="10">{resolvePageTitle(category) || ""}</Heading>
        <BigArticleCard
          href={`/${parsedArticles[0]?.category?.slug}/${parsedArticles[0]?.slug}`}
          category={parsedArticles[0]?.category?.name || ""}
          title={parsedArticles[0]?.title || ""}
          description={parsedArticles[0]?.excerpt || ""}
          imgUrl={parsedArticles[0]?.articleImage?.url}
        />
        <GridSectionWithTitle gap="6">
          {parsedArticles[1] && (
            <ArticleCard
              href={`/${parsedArticles[1]?.category?.slug}/${parsedArticles[1]?.slug}`}
              category={parsedArticles[1]?.category?.name || ""}
              title={parsedArticles[1]?.title || ""}
              description={parsedArticles[1]?.excerpt || ""}
              imgUrl={parsedArticles[1]?.articleImage?.url}
            />
          )}
          {parsedArticles[2] && (
            <ArticleCard
              href={`/${parsedArticles[2]?.category?.slug}/${parsedArticles[2]?.slug}`}
              category={parsedArticles[2]?.category?.name || ""}
              title={parsedArticles[2]?.title || ""}
              description={parsedArticles[3]?.excerpt || ""}
              imgUrl={parsedArticles[2]?.articleImage?.url}
            />
          )}
        </GridSectionWithTitle>
        {parsedArticles?.slice(3)?.map((item) => (
          <BigArticleCard
            minHeight="250px"
            headingSize="xl"
            verticalSpace="15px"
            key={item.id}
            title={item?.title || ""}
            description={item?.excerpt || ""}
            imgUrl={item?.articleImage?.url}
            category={item?.category?.name}
            href={`/${item?.category?.slug}/${item?.slug}`}
          />
        ))}
        <Pagination
          pageInfoDetails={pageInfoDetails}
          count={count}
          skip={skip}
          fetchArticles={fetchArticles}
        />
      </PageLayout>
    </Layout>
  );
};

export default DynamicCategoryPage;

export async function getStaticPaths() {
  const { categories } = (await getCategoriesBySlug()) || [];

  const paths =
    categories &&
    categories?.map((category) => ({
      params: {
        category: category.slug,
      },
    }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.category;
  const {
    edges = [],
    pageInfo = {},
    aggregate: { count = 0 } = {},
  } = (await getArticlesByCategory(slug)) || [];

  return {
    props: {
      articles: edges,
      pageInfo,
      count,
    },
    revalidate: 1,
  };
}
