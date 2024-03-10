const Container = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`
            relative
            max-w-[1500px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-10
            px-6
        `}
    >
      {children}
    </div>
  );
};

export default Container;
