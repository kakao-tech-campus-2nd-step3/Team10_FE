import { Flex } from "@chakra-ui/react";
import { PieChart, Pie, Text, Cell, ResponsiveContainer } from "recharts";

const SalesChart = () => {
  const data = [
    { name: "포도", value: 4 },
    { name: "미나리", value: 3 },
    { name: "토마토", value: 2 },
    { name: "복숭아", value: 2 },
  ];

  const COLORS = ["#B794F4", "#00C49F", "#E53E3E", "#FED7D7"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize="30px"
        fontWeight="bold"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="col-md-8">
        <ResponsiveContainer width={400} height={400}>
          <Flex align="center" justify="space-between" direction="row" mt={-20}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.value} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <Flex direction="column" ml={5} whiteSpace="nowrap">
              {" "}
              {data.map((entry, index) => (
                <Flex key={entry.name} align="center" mb={2}>
                  <div
                    style={{
                      backgroundColor: COLORS[index % COLORS.length],
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  <Text>{entry.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default SalesChart;
