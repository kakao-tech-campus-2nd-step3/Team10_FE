import { Flex, Text } from "@chakra-ui/react";
import ListView from "@components/ItemView/ListView";
import Card from "@components/common/Card";

import ReviewList from "@components/features/MyPage/Order/ReviewList";
import mockReviews from "@mocks/mockItem/mockReviews";
import { Review } from "@type/index";

const sortedReviews = mockReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const groupedReviews = sortedReviews.reduce<Review[][]>((acc, cur) => {
  const last = acc[acc.length - 1];
  if (!last || last[0].date !== cur.date) {
    acc.push([cur]);
  } else {
    last.push(cur);
  }
  return acc;
}, []);

const ReviewListPage = () => (
  <Card title="리뷰 관리" w="100%" h="fit-content" p="10">
    {groupedReviews.map(reviews => (
      <Flex key={reviews[0].date} direction="column" mb={4}>
        <Text py="2" fontWeight="bold" borderBottom="0.7px solid #000000">
          {reviews[0].date}
        </Text>
        <ListView items={reviews} ItemComponent={ReviewList} />
      </Flex>
    ))}
  </Card>
);

export default ReviewListPage;
