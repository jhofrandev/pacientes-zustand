export default function ErrorMessage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="text-center font-bold my-4 p-3 uppercase bg-red-600 text-white text-sm">
      {children}
    </p>
  );
}
