type StatCardProps = {
    title: string;
    value: string;
};

export default function StatCard({
    title,
    value
}: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-3xl font-bold mt-2 text-green-700">{value}</p>
        </div>
    )
}