import GoBackButton from "@/components/goBackButton/GoBackButton";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <GoBackButton />
      {children}
    </div>
  );
}
