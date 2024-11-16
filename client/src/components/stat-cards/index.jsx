import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ClipLoader } from "react-spinners";

export default function StatCards({ title, value, loading, Icon, color }) {
    return (
        <Card className={`bg-${color}-100`}>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>{title}</CardTitle>
                {Icon && <Icon className={`text-${color}-500`} />}
            </CardHeader>
            <CardContent>
                <div className='text-xl font-bold'>
                    {loading ? <ClipLoader size={25} /> : value}
                </div>
            </CardContent>
        </Card>
    );
};
