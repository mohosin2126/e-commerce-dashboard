import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {ClipLoader} from "react-spinners";

const StatsCard = ({ title, value, loading, percentageChange, percentageText, Icon, additionalText }) => {

    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>{title}</CardTitle>
                {Icon && <Icon />}
            </CardHeader>
            <CardContent>
                <div className='text-xl font-bold'>{loading ? <ClipLoader size={25} /> :value}</div>
                {/*<p className='text-xs text-muted-foreground'>*/}
                {/*    {percentageChange} {percentageText}*/}
                {/*</p>*/}
                {/*{additionalText && <p className='text-xs text-muted-foreground'>{additionalText}</p>}*/}
            </CardContent>
        </Card>
    );
};

export default StatsCard;