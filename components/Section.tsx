
export default function Section({children}: { children: React.ReactNode;}) {
    return (
    <div className="flex sticky -top-1/3 min-h-screen w-screen max-w-full shadow-[0_0_20px_rgba(0,0,0,0.1)]" >
        {children}
    </div>);
}
