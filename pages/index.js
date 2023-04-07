// import { Inter } from 'next/font/google'
import Layout from "@/components/layout/Layout";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HighlightedSection from "@/components/home/HighlightedSection";
import TopicsTwoColumnGrid from "@/components/home/TopicsTwoColumnGrid";
import BigArticleCard from "@/components/article/BigArticleCard";
import ArticleCard from "@/components/article/ArticleCard";
import TopicsFourColumnGrid from "@/components/home/TopicsFourColumnGrid";
import InfoComponent from "@/components/utils/InfoComponent";
import { Box } from "@chakra-ui/react";
import GridSectionWithTitle from "@/components/utils/GridSectionWithTitle";
import { getHomePageArticles } from "@/graphQL";
import InterestingFactsSection from "@/components/home/InterestingFactsSection";

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles = [] }) {
  // console.log(articles, "articles");
  const {
    heroArticles = [],
    authorChoice = [],
    scienceAndTech = [],
    it: itArticles = [],
    biz = [],
    culture = [],
    funFact = [],
    interestingFacts = [],
    magazine = [],
  } = { ...articles } || [];

  if (articles?.length === 0) {
    return (
      <Layout>
        <Box textAlign="center">Trenunto nema tekstova. Pokušajte kasnije.</Box>
      </Layout>
    );
  }
  return (
    <Layout>
      <HomeHeroSection
        heroArticles={heroArticles}
        pickedArticles={authorChoice}
      />
      <HighlightedSection />
      <TopicsTwoColumnGrid title="NAUKA I TEHNOLOGIJA">
        <BigArticleCard
          minHeight="400px"
          isTransparent
          category={scienceAndTech[0]?.category.name}
          title={scienceAndTech[0]?.title}
          description={scienceAndTech[0]?.excerpt}
          imgUrl={scienceAndTech[0]?.articleImage?.url}
          href={`${scienceAndTech[0]?.category?.slug}/${scienceAndTech[0]?.slug}`}
        />
        <ArticleCard
          minHeight="400px"
          isTransparent
          category={scienceAndTech[1]?.category.name}
          title={scienceAndTech[1]?.title}
          description={scienceAndTech[1]?.excerpt}
          imgUrl={scienceAndTech[1]?.articleImage?.url}
          href={`${scienceAndTech[1]?.category?.slug}/${scienceAndTech[1]?.slug}`}
        />
      </TopicsTwoColumnGrid>
      <TopicsFourColumnGrid title="IT">
        {itArticles?.map((itArticle) => (
          <ArticleCard
            key={itArticle?.id}
            hasColor
            category={itArticle?.category?.name}
            title={itArticle?.title}
            description={itArticle?.excerpt}
            imgUrl={itArticle?.articleImage?.url}
            href={`${itArticle?.category?.slug}/${itArticle?.slug}`}
          />
        ))}
      </TopicsFourColumnGrid>
      <TopicsTwoColumnGrid title="BIZ">
        <BigArticleCard
          minHeight="400px"
          title={biz[1]?.title}
          category={biz[1]?.category?.name}
          description={biz[1]?.excerpt}
          imgUrl={biz[1]?.articleImage?.url}
          href={`${biz[1]?.category?.slug}/${biz[1]?.slug}`}
        />
        <ArticleCard
          minHeight="400px"
          title={biz[0]?.title}
          category={biz[0]?.category?.name}
          description={biz[0]?.excerpt}
          imgUrl={biz[0]?.articleImage?.url}
          href={`${biz[0]?.category?.slug}/${biz[0]?.slug}`}
        />
      </TopicsTwoColumnGrid>
      <TopicsFourColumnGrid title="KULTURA">
        {culture?.length > 0 &&
          culture?.map((article) => (
            <ArticleCard
              key={article?.id}
              isTransparent
              category={article?.category?.name}
              title={article?.title}
              description={article?.excerpt}
              imgUrl={article?.articleImage?.url}
              href={`${article?.category?.slug}/${article?.slug}`}
            />
          ))}
      </TopicsFourColumnGrid>
      <InfoComponent article={funFact[0]} />
      <InterestingFactsSection articles={interestingFacts} />
      <GridSectionWithTitle title="MAGAZIN" columnLg="2">
        <ArticleCard
          category={magazine[1]?.category?.name}
          title={magazine[1]?.title}
          imgUrl={magazine[1]?.articleImage?.url}
          href={`${magazine[1]?.category?.slug}/${magazine[1]?.slug}`}
          largeImage
          minHeight="400px"
        />
        <ArticleCard
          category={magazine[0]?.category?.name}
          title={magazine[0]?.title}
          imgUrl={magazine[0]?.articleImage?.url}
          href={`${magazine[0]?.category?.slug}/${magazine[0]?.slug}`}
          largeImage
          minHeight="400px"
        />
      </GridSectionWithTitle>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = (await getHomePageArticles()) || [];

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
}
