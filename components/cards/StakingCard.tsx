import Image, { StaticImageData } from "next/image";
import verify from "/public/images/icon/verify.png";

type PropeType = {
    data: {
        id: number | string;
        type: string;
        name: string;
        title: string;
        img: StaticImageData;
    };
};

const StakingCard = ({ data }: PropeType) => {
    const { id, type, title, img, name } = data;

    return (
        <div className="bg-white dark:bg-[var(--color-gray-6)] rounded-lg p-3">
            <div className="rounded-lg flex gap-5">
                <Image
                    src={img}
                    alt="Staking_1"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <h2 className="font-bold text-[var(--color-gray-6)] dark:text-white mt-3">{name}</h2>
            </div>
            <div className="mt-7">
                <p className="flex items-center gap-3 text-base leading-[150%] text-[var(--color-primary-4)] dark:text-[var(--color-primary-4)]">
                    {type}
                    <Image src={verify} alt="verify" />
                </p>
                <h6 className="font-bold text-[var(--color-gray-6)] dark:text-white mt-3">
                    {title}
                </h6>
            </div>
        </div>
    );
};

export default StakingCard;
