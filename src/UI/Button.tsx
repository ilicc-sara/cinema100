type ButtonProps = {
  children: string;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-[#fc4747] w-full rounded h-9 text-[#e8f0fe]">
      {children}
    </button>
  );
}

export default Button;
