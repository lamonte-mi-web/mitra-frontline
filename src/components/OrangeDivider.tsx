interface Props {
    className?: string;
}

export function OrangeDivider({ className }: Props) {
    return (
        <div className={`flex items-center gap-2 ${className ?? ""}`}>
            <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-[#FF9000] rounded-full" />
                ))}
            </div>
            <div className="w-50 h-1 bg-[#FF9000] rounded" />
        </div>
    );
}
