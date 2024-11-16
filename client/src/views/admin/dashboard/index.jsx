import { useEffect, useState } from 'react';
import {
    Calendar,
    Clock,
    BarChart,
    PieChart,
    Activity,
} from 'lucide-react';
import StatsCard from "@/components/stat-cards/index.jsx";

export default function AdminDashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/stat.json')
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData[0]))
            .catch((error) => console.error('Error loading data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mb-2 flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">Dashboard</h1>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-4">
                <StatsCard
                    title="Today's Orders"
                    loading={false}
                    value={data?.todayOrders}
                    Icon={Clock}
                    color={data?.todayOrdersColor}
                />
                <StatsCard
                    title="Yesterday's Orders"
                    loading={false}
                    value={data?.yesterdayOrders}
                    Icon={Calendar}
                    color={data?.yesterdayOrdersColor}
                />
                <StatsCard
                    title="This Month's Orders"
                    loading={false}
                    value={data?.thisMonthOrders}
                    Icon={BarChart}
                    color={data?.thisMonthOrdersColor}
                />
                <StatsCard
                    title="Last Month's Orders"
                    loading={false}
                    value={data?.lastMonthOrders}
                    Icon={PieChart}
                    color={data?.lastMonthOrdersColor}
                />
                <StatsCard
                    title="All-Time Sales"
                    loading={false}
                    value={`$${data?.allTimeSales?.toLocaleString()}`}
                    Icon={Activity}
                    color={data?.allTimeSalesColor}
                />
            </div>
        </>
    );
}
