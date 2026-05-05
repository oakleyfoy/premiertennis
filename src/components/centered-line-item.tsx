type CenteredLineItemProps = {
  children: React.ReactNode;
};

export function CenteredLineItem({ children }: CenteredLineItemProps) {
  return (
    <div className="flex items-start justify-center gap-3 text-[#1F2933]/88">
      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />
      <p className="max-w-[28rem] text-center text-base leading-8 sm:text-lg">
        {children}
      </p>
    </div>
  );
}
