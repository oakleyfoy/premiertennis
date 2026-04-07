type CenteredLineItemProps = {
  children: React.ReactNode;
};

export function CenteredLineItem({ children }: CenteredLineItemProps) {
  return (
    <div className="flex items-start justify-center gap-3 text-slate-600">
      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ec5f2]" />
      <p className="max-w-[28rem] text-center text-lg leading-8">{children}</p>
    </div>
  );
}
