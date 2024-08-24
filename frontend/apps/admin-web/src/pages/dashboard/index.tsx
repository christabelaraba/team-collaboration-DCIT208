/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHead from "@/components/custom/page-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "@/routes/hooks";
import { useQuery } from "@tanstack/react-query";
import {
  getOrders,
  getQuoteMonthlyStats,
  getQuoteStatistics,
} from "@/api/data/query";
import moment from "moment";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import PieChartComponent from "@/components/custom/pie-chart";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

interface QuoteStat {
  week: number;
  approved: number;
  pending: number;
  rejected: number;
}

interface OverallQuoteStat {
  approved: number;
  pending: number;
  rejected: number;
}

export default function DashboardPage() {
  const user = Cookies.get("user");
  const router = useRouter();
  const [quotesStatsList, setQuotesStatsList] = useState<QuoteStat[]>([]);
  const [overallQuotesStatsList, setOverallQuotesStatsList] =
    useState<OverallQuoteStat>();
  const [selectedMonth, setSelectedMonth] = useState<number>(8); // Default month is August

  const { data: orders } = useQuery({
    queryFn: getOrders,
    queryKey: ["orders"],
  });

  const { data: quotesStats } = useQuery({
    queryFn: getQuoteStatistics,
    queryKey: ["quotesStats"],
  });

  const { data: monthlyQuotesStats } = useQuery({
    queryFn: () => getQuoteMonthlyStats(selectedMonth),
    queryKey: ["monthlyQuotesStats", selectedMonth],
  });

  useEffect(() => {
    if (monthlyQuotesStats?.data) {
      setQuotesStatsList(monthlyQuotesStats?.data.weekly_stats);
      setOverallQuotesStatsList(monthlyQuotesStats?.data.overall_counts);
    }
  }, [monthlyQuotesStats]);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(event.target.value));
  };

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const labels = quotesStatsList.map((stat) => `Week ${stat.week}`);
  const approvedData = quotesStatsList.map((stat) => stat.approved);
  const pendingData = quotesStatsList.map((stat) => stat.pending);
  const rejectedData = quotesStatsList.map((stat) => stat.rejected);

  const statsData = {
    labels,
    datasets: [
      {
        label: "Approved Quotes",
        data: approvedData,
        backgroundColor: "rgba(231, 98, 5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Pending Quotes",
        data: pendingData,
        backgroundColor: "rgba(11, 7, 132)",
        borderColor: "rgba(11, 7, 132",
        borderWidth: 1,
      },
      {
        label: "Rejected Quotes",
        data: rejectedData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const statsOptions = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Weeks",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Quotes",
        },
      },
    },
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Metrics Overview
          </h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Quotes
                  </CardTitle>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.375 15.625V21.7625C5.42031 21.1703 3.125 18.3625 3.125 15.625V14.8438C3.125 14.2221 3.37193 13.626 3.81147 13.1865C4.25101 12.7469 4.84715 12.5 5.46875 12.5H10.5687C9.80003 13.3594 9.37503 14.472 9.375 15.625ZM10.9375 2.34375C12.0771 2.34375 13.17 2.79646 13.9759 3.60228C14.7817 4.4081 15.2344 5.50102 15.2344 6.64062C15.2344 7.78023 14.7817 8.87315 13.9759 9.67897C13.17 10.4848 12.0771 10.9375 10.9375 10.9375C9.7979 10.9375 8.70497 10.4848 7.89915 9.67897C7.09333 8.87315 6.64062 7.78023 6.64062 6.64062C6.64062 5.50102 7.09333 4.4081 7.89915 3.60228C8.70497 2.79646 9.7979 2.34375 10.9375 2.34375ZM14.0625 12.5C13.2337 12.5 12.4388 12.8292 11.8528 13.4153C11.2667 14.0013 10.9375 14.7962 10.9375 15.625V21.875C10.9375 22.7038 11.2667 23.4987 11.8528 24.0847C12.4388 24.6708 13.2337 25 14.0625 25H21.875C22.7038 25 23.4987 24.6708 24.0847 24.0847C24.6708 23.4987 25 22.7038 25 21.875V15.625C25 14.7962 24.6708 14.0013 24.0847 13.4153C23.4987 12.8292 22.7038 12.5 21.875 12.5H14.0625ZM14.8438 20.3125H21.0938C21.301 20.3125 21.4997 20.3948 21.6462 20.5413C21.7927 20.6878 21.875 20.8865 21.875 21.0938C21.875 21.301 21.7927 21.4997 21.6462 21.6462C21.4997 21.7927 21.301 21.875 21.0938 21.875H14.8438C14.6365 21.875 14.4378 21.7927 14.2913 21.6462C14.1448 21.4997 14.0625 21.301 14.0625 21.0938C14.0625 20.8865 14.1448 20.6878 14.2913 20.5413C14.4378 20.3948 14.6365 20.3125 14.8438 20.3125ZM14.0625 16.4062C14.0625 16.199 14.1448 16.0003 14.2913 15.8538C14.4378 15.7073 14.6365 15.625 14.8438 15.625H21.0938C21.301 15.625 21.4997 15.7073 21.6462 15.8538C21.7927 16.0003 21.875 16.199 21.875 16.4062C21.875 16.6135 21.7927 16.8122 21.6462 16.9587C21.4997 17.1052 21.301 17.1875 21.0938 17.1875H14.8438C14.6365 17.1875 14.4378 17.1052 14.2913 16.9587C14.1448 16.8122 14.0625 16.6135 14.0625 16.4062Z"
                      fill="#131C40"
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {quotesStats?.data?.totalQuoteCount}
                  </div>
                  {/* <p className='text-xs text-muted-foreground'>
										{((quotes?.data as any)?.data.length / 100) * 100}% from last month
									</p> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Quotes
                  </CardTitle>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.90625 23.4375C3.69905 23.4375 3.50034 23.3552 3.35382 23.2087C3.20731 23.0622 3.125 22.8635 3.125 22.6562C3.125 22.449 3.20731 22.2503 3.35382 22.1038C3.50034 21.9573 3.69905 21.875 3.90625 21.875H5.46875V20.3125C5.46843 18.9859 5.84341 17.6863 6.55039 16.5637C7.25737 15.4412 8.26749 14.5416 9.46406 13.9687C9.91719 13.7516 10.1562 13.3797 10.1562 13.0469V11.9531C10.1562 11.6203 9.91563 11.2484 9.46406 11.0312C8.26749 10.4584 7.25737 9.55882 6.55039 8.43629C5.84341 7.31375 5.46843 6.01411 5.46875 4.6875V3.125H3.90625C3.69905 3.125 3.50034 3.04269 3.35382 2.89618C3.20731 2.74966 3.125 2.55095 3.125 2.34375C3.125 2.13655 3.20731 1.93784 3.35382 1.79132C3.50034 1.64481 3.69905 1.5625 3.90625 1.5625H21.0938C21.301 1.5625 21.4997 1.64481 21.6462 1.79132C21.7927 1.93784 21.875 2.13655 21.875 2.34375C21.875 2.55095 21.7927 2.74966 21.6462 2.89618C21.4997 3.04269 21.301 3.125 21.0938 3.125H19.5312V4.6875C19.5316 6.01411 19.1566 7.31375 18.4496 8.43629C17.7426 9.55882 16.7325 10.4584 15.5359 11.0312C15.0828 11.2484 14.8438 11.6203 14.8438 11.9531V13.0469C14.8438 13.3797 15.0844 13.7516 15.5359 13.9687C16.7325 14.5416 17.7426 15.4412 18.4496 16.5637C19.1566 17.6863 19.5316 18.9859 19.5312 20.3125V21.875H21.0938C21.301 21.875 21.4997 21.9573 21.6462 22.1038C21.7927 22.2503 21.875 22.449 21.875 22.6562C21.875 22.8635 21.7927 23.0622 21.6462 23.2087C21.4997 23.3552 21.301 23.4375 21.0938 23.4375H3.90625ZM7.03125 3.125V4.6875C7.03125 5.52656 7.21875 6.32031 7.55781 7.03125H17.4422C17.7797 6.32031 17.9688 5.52656 17.9688 4.6875V3.125H7.03125ZM11.7188 13.0469C11.7188 14.1422 10.9719 14.9781 10.1391 15.3781C9.20827 15.8236 8.42252 16.5234 7.87258 17.3965C7.32264 18.2697 7.03097 19.2806 7.03125 20.3125C7.03125 20.3125 8.38438 18.2828 11.7188 18V13.0469ZM13.2812 13.0469V18C16.6156 18.2828 17.9688 20.3125 17.9688 20.3125C17.969 19.2806 17.6774 18.2697 17.1274 17.3965C16.5775 16.5234 15.7917 15.8236 14.8609 15.3781C14.0281 14.9781 13.2812 14.1422 13.2812 13.0469Z"
                      fill="#131C40"
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {quotesStats?.data?.pendingQuoteCount}
                  </div>
                  {/* <p className='text-xs text-muted-foreground'>+5% from last month</p> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Approved Quotes
                  </CardTitle>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1667 3.5H5.83333C5.21449 3.5 4.621 3.74583 4.18342 4.18342C3.74583 4.621 3.5 5.21449 3.5 5.83333V22.1667C3.5 22.7855 3.74583 23.379 4.18342 23.8166C4.621 24.2542 5.21449 24.5 5.83333 24.5H22.1667C22.7855 24.5 23.379 24.2542 23.8166 23.8166C24.2542 23.379 24.5 22.7855 24.5 22.1667V5.83333C24.5 5.21449 24.2542 4.621 23.8166 4.18342C23.379 3.74583 22.7855 3.5 22.1667 3.5ZM11.6667 19.8333L5.83333 14L7.47833 12.355L11.6667 16.5317L20.5217 7.67667L22.1667 9.33333L11.6667 19.8333Z"
                      fill="#131C40"
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {" "}
                    {quotesStats?.data?.approvedQuoteCount}
                  </div>
                  {/* <p className='text-xs text-muted-foreground'>+5% from last month</p> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Rejected Quotes
                  </CardTitle>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z"
                      fill="#131C40"
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {" "}
                    {quotesStats?.data?.rejectedQuoteCount}
                  </div>
                  {/* <p className='text-xs text-muted-foreground'>+5% from last month</p> */}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">
                      Order Status Chart
                    </CardTitle>
                    <select
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      className="mt-2 p-1 border rounded"
                    >
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </CardHeader>
                <CardContent>
                  <Bar data={statsData} options={statsOptions} />
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">
                      Order Monthly Submissions
                    </CardTitle>
                    <select
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      className="mt-2 p-1 border rounded"
                    >
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </CardHeader>
                <CardContent>
                  <PieChartComponent
                    approved={overallQuotesStatsList?.approved}
                    pending={overallQuotesStatsList?.pending}
                    rejected={overallQuotesStatsList?.rejected}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <Link to="new-quote" className="w-full">
                <Card className="cursor-pointer">
                  <CardContent className="w-full p-0 h-20 flex items-center justify-center">
                    <span className="text-xl tracking-wider font-semibold">
                      Create New Quote
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="all-quote" className="w-full">
                <Card className="cursor-pointer">
                  <CardContent className="w-full p-0 h-20 flex items-center justify-center">
                    <span className="text-xl tracking-wider font-semibold">
                      View All Quote
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="generate" className="w-full">
                <Card className="cursor-pointer">
                  <CardContent className="w-full p-0 h-20 flex items-center justify-center">
                    <span className="text-xl tracking-wider font-semibold">
                      Generate Report
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle className="text-2xl">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-t">
                      <TableHead className="text-gray-400">ID</TableHead>
                      <TableHead className="text-gray-400">Date</TableHead>
                      <TableHead className="text-gray-400">Name</TableHead>
                      <TableHead className="text-gray-400">
                        Phone Number
                      </TableHead>
                      <TableHead className="text-gray-400">Message</TableHead>
                      {/* <TableHead className="text-gray-400">Status</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders?.data?.map((order: any) => (
                      <TableRow key={order.id} className="border-none ">
                        <TableCell>{order.id}</TableCell>
                        <TableCell className="font-medium">
                          {moment(order.createdAt).format("DD-MM-YYYY")}
                        </TableCell>
                        <TableCell>{`${order.first_name} ${order.last_name}`}</TableCell>
                        <TableCell>{order.phone_number}</TableCell>
                        <TableCell>{order.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
