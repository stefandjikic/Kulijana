import { ARTICLES_PER_PAGE } from "@/utils/constants";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const Pagination = ({
  pageInfoDetails,
  count = 0,
  skip = 0,
  fetchArticles,
}) => {
  const { hasNextPage = false, hasPreviousPage = false } = pageInfoDetails;
  const [currentPage, setCurrentPage] = useState(1);

  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="xs">Ukupno članaka:{count}</Box>
        {count >
          ARTICLES_PER_PAGE &&
          (
            <Flex justifyContent="end">
              <Flex>
                {hasPreviousPage && (
                  <Button
                    bg="transparent"
                    _hover={{ bg: "transparent", color: accentColor }}
                    onClick={() => {
                      fetchArticles(skip - ARTICLES_PER_PAGE);
                      setCurrentPage(currentPage - 1);
                    }}
                  >
                    <Flex alignItems="center">
                      <ArrowLeftIcon fontSize="xx-small" />
                      <Text ml="2" mb="1" fontSize="sm">
                        Prethodna
                      </Text>
                    </Flex>
                  </Button>
                )}
              </Flex>
              <Flex>
                {hasNextPage && (
                  <Button
                    bg="transparent"
                    _hover={{ bg: "transparent", color: accentColor }}
                    onClick={() => {
                      fetchArticles(skip + ARTICLES_PER_PAGE);
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    <Flex alignItems="center">
                      <Text mr="2" mb="1" fontSize="sm">
                        Sledeća
                      </Text>
                      <ArrowRightIcon fontSize="xx-small" />
                    </Flex>
                  </Button>
                )}
              </Flex>
            </Flex>
          )}
      </Flex>
      {count > ARTICLES_PER_PAGE && (
        <Flex justifyContent="center" mt="2">
          <Box fontSize="xs">
            Strana: {currentPage}/{Math.ceil(count / ARTICLES_PER_PAGE)}
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Pagination;
