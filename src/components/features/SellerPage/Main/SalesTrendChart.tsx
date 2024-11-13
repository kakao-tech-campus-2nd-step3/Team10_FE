import { Flex } from "@chakra-ui/react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const SalesTrendChart = ({ data }: any) => {
  const formatXAxisLabel = (value: number) => `${value}월`;

  return (
    <div style={{ marginTop: "30px" }}>
      <Flex ml={20}>
        <ResponsiveContainer width="80%" height={350}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="count" stroke="#2D8CFF" strokeWidth={2} />
            <XAxis
              dataKey="weekNumber"
              height={140}
              tickFormatter={formatXAxisLabel}
              tickMargin={10}
              tickLine={false}
              padding={{ left: 13, right: 13 }}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </div>
  );
};

export default SalesTrendChart;
