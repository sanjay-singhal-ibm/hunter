import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
    </>
  );
};

export default Stats;
