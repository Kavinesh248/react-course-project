import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

const CabinList = async function () {
  const cabins = await getCabins();

  if (!cabins.length) {
    return <div className="text-primary-200">No cabins found.</div>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
