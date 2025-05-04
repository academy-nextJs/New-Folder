import { Skeleton } from "@/components/ui/skeleton"

const ReserveCardSkeleton = () => {
    return (
        <Skeleton className="rtl flex justify-between gap-4 items-center w-full h-[180px] overflow-hidden bg-[#1e1e1e] rounded-2xl p-4">
            <div className="w-fit h-full md:block hidden">
                <Skeleton className="w-[240px] h-full bg-gray-700 rounded-xl" />
            </div>

            <div className="flex flex-col justify-between w-full gap-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-16 bg-gray-700 rounded-full" />
                    <Skeleton className="h-4 w-24 bg-gray-700 rounded-full" />
                </div>

                <Skeleton className="h-5 w-48 bg-gray-600 rounded-full" />
                <Skeleton className="h-4 md:w-72 w-full bg-gray-700 rounded-full" />
                <Skeleton className="h-4 md:w-72 w-full bg-gray-700 rounded-full" />

            </div>

            <div className="md:flex hidden flex-col justify-between items-center gap-4 h-full">
                <Skeleton className="h-4 w-32 bg-gray-700 rounded-full" />

                <Skeleton className="h-10 w-40 bg-gray-800 rounded-xl" />
            </div>

        </Skeleton>
    )
}

export default ReserveCardSkeleton
