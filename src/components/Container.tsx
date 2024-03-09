import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative max-w-[1500] mx-auto px-6 sm:px-10 xl:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
