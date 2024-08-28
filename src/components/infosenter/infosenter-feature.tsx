import Image from "next/image";

const InfoSenterFeature = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="hover:bg-primaryred/20 bg-white font-roboto flex flex-col justify-center items-center rounded-xl shadow-xl p-6 transition-all space-y-2 w-full">
      <Image src={imageUrl} alt="Location" width={100} height={100} />
      <p className="text-lg text-black">{title}</p>
    </div>
  );
};

export default InfoSenterFeature;
