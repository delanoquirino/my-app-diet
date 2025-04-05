
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-40">

            {children}
        </section>
    );
}