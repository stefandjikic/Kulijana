// import { Inter } from 'next/font/google'
import Layout from "@/components/layout/Layout";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HighlightedSection from "@/components/home/HighlightedSection";
import TopicsTwoColumnGrid from "@/components/home/TopicsTwoColumnGrid";
import BigArticleCard from "@/components/article/BigArticleCard";
import ArticleCard from "@/components/article/ArticleCard";
import TopicsFourColumnGrid from "@/components/home/TopicsFourColumnGrid";
import InfoComponent from "@/components/utils/InfoComponent";
import { Box, Grid, Heading } from "@chakra-ui/react";
import TextArticle from "@/components/article/TextArticle";
import GridSectionWithTitle from "@/components/utils/GridSectionWithTitle";
import { getHomePageArticles } from "@/graphQL";

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
  console.log(itArticles, "itArticles");
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
          />
        ))}
      </TopicsFourColumnGrid>
      <TopicsTwoColumnGrid title="BIZ">
        <BigArticleCard
          minHeight="400px"
          category="Biznis"
          title="Naslov članka biz biz"
          description="Kratak opis teksta. Verovatno ne duže od 100 karaktera."
        />
        <ArticleCard
          minHeight="400px"
          title="Šta se dešava u Twitteru?"
          description="Ilon Mask nešto piše kao po običaju. Smrtnici se lože."
        />
      </TopicsTwoColumnGrid>
      <TopicsFourColumnGrid title="KULTURA">
        <ArticleCard
          isTransparent
          category="FILM"
          title="Novi film Darena Aronofskija"
          description="U gradu u Ajdahu, Čarli, povučeni i nezdrav profesor engleskog, krije se u svom stanu i projeda put do smrti."
        />
        <ArticleCard
          isTransparent
          category="MUZIKA"
          title="Rammsetein i 'ZEIT' "
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis corrupti ducimus? Rerum cupiditate incidunt nesciunt exercitationem consequatur nam quod amet fugit!"
        />
        <ArticleCard
          isTransparent
          category="UMETNOST"
          title="Svetska čuda"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis corrupti ducimus? "
        />
        <ArticleCard
          isTransparent
          title="Lorem ipsum dolor sit amet"
          category="KNJIŽEVNOST"
        />
      </TopicsFourColumnGrid>
      <InfoComponent />
      <TopicsTwoColumnGrid title="ZANIMLJIVOSTI">
        <Box>
          <BigArticleCard
            isTransparent
            minHeight="400px"
            category="Istorija"
            title="Naslov članka istorija"
            description="Kratak opis teksta. Verovatno ne duže od 100 karaktera."
          />
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="4"
            mt="2"
          >
            <TextArticle
              title="Nalov prvi"
              borderBottom="1px"
              borderRight="1px"
            />
            <TextArticle
              title="Nalov drugi"
              borderBottom="1px"
              borderRight="1px"
            />
            <TextArticle
              title="Nalov treći"
              borderBottom="1px"
              borderRight="1px"
            />
            <TextArticle
              title="Nalov članka prvi"
              borderBottom="1px"
              borderRight="1px"
            />
            <TextArticle
              title="Nalov članka drugi"
              borderBottom="1px"
              borderRight="1px"
            />
            <TextArticle
              title="Nalov članka treći"
              borderBottom="1px"
              borderRight="1px"
            />
          </Grid>
        </Box>
        <ArticleCard
          isTransparent
          minHeight="400px"
          title="Neka Zanimljivost"
          description="Nešto jako zanimljivo. Hmmm, jeste stvarno!"
        />
      </TopicsTwoColumnGrid>
      <GridSectionWithTitle title="MAGAZIN" columnLg="2">
        <ArticleCard
          category="Trening snage"
          title="Neki naslov iz powerlifting teme"
          largeImage
          minHeight="400px"
        />
        <ArticleCard
          category="Zdravlje"
          title="Neki naslov iz zabava teme"
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
  };
}
