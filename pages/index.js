import Head from "next/head";
// import Image from 'next/image'
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
import { getHomePageArticles } from "@/services";

// const inter = Inter({ subsets: ['latin'] })

export default function Home({articles = []}) {
  console.log(articles, 'articles');
  return (
    <Layout>
      <HomeHeroSection />
      <HighlightedSection />
      <TopicsTwoColumnGrid title="NAUKA I TEHNOLOGIJA">
        <BigArticleCard
          minHeight="400px"
          isTransparent
          category="Tehnologija"
          title="Naslov članka bla bla bla"
          description="Kratak opis teksta. Verovatno ne duže od 100 karaktera."
        />
        <ArticleCard
          minHeight="400px"
          isTransparent
          title="Šta su to RNK vakcine?"
        />
      </TopicsTwoColumnGrid>
      <TopicsFourColumnGrid title="IT">
        <ArticleCard hasColor category="Softver" title="Novi softer naslov" />
        <ArticleCard
          hasColor
          category="Uređaji"
          title="Novi telefon naslov"
          description="Po prvi put, korisnici širom sveta mogu isprobati prepoznatljive Leica kamere na Xiaomi 13, Xiaomi 13 Pro i Xiaomi 13 Lite modelima "
        />
        <ArticleCard
          hasColor
          category="Internet"
          title="Nokia dobila novi logo"
          description="Nokia logo je dobio svoj novi izgled, a po prvi put u skoro 60 godina ova kompanija, nekadašnji gigant industrije telefona menja svoj vizuelni identitet. "
        />
        <ArticleCard hasColor />
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

// export async function getStaticProps() {
//   const articles = (await getHomePageArticles()) || [];

//   return {
//     props: {
//       articles,
//     },
//   };
// }
