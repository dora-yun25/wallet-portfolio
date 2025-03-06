import stakingData from "@/data/stakingData";
import StakingCard from "../cards/StakingCard";

export default function Staking() {
    return (
        <section className="w-full">
            <div className="flex items-center flex-wrap gap-6 justify-between">
                <h3 className="text-[32px] leading-[120%] font-semibold text-[var(--color-gray-7)] dark:text-white">
                    Staking
                </h3>
            </div>
            <div className="grid grid-cols-1 min-[567px]:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-6 mt-6 w-full">
                {stakingData.map((itm) => (
                    // Nft Card
                    <StakingCard key={itm.id} data={itm} />
                ))}
            </div>
        </section>
    )
}