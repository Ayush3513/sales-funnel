

interface CardProps {
  image: string;
  subtitle: string;
  borderColor: string;
  gradient: string;
  url: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ image, subtitle, url, name }) => {
  return (
    <div className="w-full max-w-sm mx-auto group before:hover:scale-95 before:hover:h-72 before:hover:w-full before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-full before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#F97718] via-[#ffffff] to-[#ffffff] before:absolute before:top-0 h-72 relative bg-[#202020] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <img src={image} alt="profile" className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500" />
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
        <p className="text-lg font-semibold text-white transition-all duration-500 group-hover:text-black p-5">{subtitle}</p>
        <p className="text-xl font-bold text-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">{name}</p>
      </div>
    </div>
  );
}

export default Card;
