export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden dark:bg-[#030014] dark:bg-opacity-60">
      <main className="dark z-10 m-auto max-w-[100rem] dark:text-white">
        {children}
      </main>
    </div>
  );
}
