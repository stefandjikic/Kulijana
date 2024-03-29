import { Box, Text } from "@chakra-ui/react";
import React from "react";
import HeadlineImageArticleCard from "../article/HeadlineImageArticleCard";
import TextArticle from "../article/TextArticle";
import { useArticlesContext } from "@/context/ArticlesContext";

const PageSidebar = ({ isReadingPage = false, relatedArticles = [] }) => {
  const { featuredArticles } = useArticlesContext();

  return (
    <Box borderTop="4px" py="2" px={{ base: "0", md: "4" }}>
      {isReadingPage && (
        <Box>
          <Text fontWeight="bold" textTransform="uppercase" opacity="0.8">
            Povezani tekstovi
          </Text>
          {relatedArticles?.length > 0 &&
            relatedArticles?.map((related) => (
              <HeadlineImageArticleCard
                key={related?.id}
                href={`/${related?.category?.slug}/${related?.slug}`}
                title={related?.title || ""}
                imgUrl={related?.articleImage?.url}
                titleSize="lg"
                minHeight={{ base: "300px", md: "220px" }}
                verticalSpacing="2"
                isTransparent
              />
            ))}
        </Box>
      )}
      <Text fontWeight="bold" textTransform="uppercase" opacity="0.8">
        Popularni tekstovi
      </Text>
      {featuredArticles?.length > 0 && (
        <HeadlineImageArticleCard
          title={featuredArticles[0]?.title || ""}
          imgUrl={featuredArticles[0]?.articleImage?.url}
          href={`/${featuredArticles[0]?.category?.slug}/${featuredArticles[0]?.slug}`}
          titleSize="lg"
          minHeight={{ base: "300px", md: "220px" }}
          verticalSpacing="2"
          // isTransparent
        />
      )}
      {featuredArticles &&
        featuredArticles?.length > 1 &&
        featuredArticles
          ?.slice(1)
          ?.map((article) => (
            <TextArticle
              key={article?.id}
              title={article?.title}
              category={article?.category?.name}
              href={`/${article?.category?.slug}/${article?.slug}`}
              borderBottom="1px"
            />
          ))}
    </Box>
  );
};

export default PageSidebar;
