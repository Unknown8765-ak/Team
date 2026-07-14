import AdminLayout from "../../layouts/AdminLayout";

import StatsCard from "../../components/admin/dashboard/StatsCard";
import RecentLeads from "../../components/admin/dashboard/RecentLeads";
import QuickActions from "../../components/admin/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <>
      <StatsCard />
      <RecentLeads />
      <QuickActions />
    </>
  );
};

export default Dashboard;