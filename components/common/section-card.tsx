import { Card } from "@/components/ui/card";

interface SectionCardProps {
  children: React.ReactNode;
}

export default function SectionCard({
  children,
}: SectionCardProps) {
  return (
    <Card className="rounded-xl p-6">
      {children}
    </Card>
  );
}