import React, { useState } from 'react';
import {
  Building2,
  Users,
  HardHat,
  FolderKanban,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Truck
} from 'lucide-react';
import ProjectMap from '../components/dashboard/ProjectMap';
import MapFilters from '../components/dashboard/map/MapFilters';
import MapLegend from '../components/dashboard/map/MapLegend';
import TodaySchedule from '../components/dashboard/TodaySchedule';
import RecentActivity from '../components/dashboard/RecentActivity';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';
import { formatCurrency } from '../utils/format';

const Dashboard: React.FC = () => {
  const [showMapFilters, setShowMapFilters] = useState(false);

  const stats = {
    activeProjects: 12,
    totalEmployees: 45,
    activeCrews: 8,
    completionRate: 92,
    revenue: 850000,
    expenses: 650000,
    upcomingInspections: 5,
    scheduledPours: 3
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Company Overview */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4 md:mb-6">Company Overview</h2>
        <CardGrid columns={4}>
          <Card
            title="Active Projects"
            value={stats.activeProjects}
            icon={Building2}
            iconColor="text-blue-500"
          />
          <Card
            title="Employees"
            value={stats.totalEmployees}
            icon={Users}
            iconColor="text-green-500"
          />
          <Card
            title="Active Crews"
            value={stats.activeCrews}
            icon={HardHat}
            iconColor="text-purple-500"
          />
          <Card
            title="Completion"
            value={`${stats.completionRate}%`}
            icon={TrendingUp}
            iconColor="text-orange-500"
          />
          <Card
            title="Revenue (MTD)"
            value={formatCurrency(stats.revenue)}
            icon={DollarSign}
            iconColor="text-green-500"
          />
          <Card
            title="Expenses (MTD)"
            value={formatCurrency(stats.expenses)}
            icon={DollarSign}
            iconColor="text-red-500"
          />
        </CardGrid>
      </div>

      {/* Schedule and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <TodaySchedule />
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <RecentActivity />
        </div>
      </div>

      {/* Project Map */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-lg font-medium text-gray-900">Project Map</h2>
            <button
              onClick={() => setShowMapFilters(!showMapFilters)}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {showMapFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {showMapFilters && <MapFilters />}

          <div className="h-[300px] md:h-[500px] mt-4">
            <ProjectMap />
          </div>

          <MapLegend />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Inspections</h2>
            <CheckCircle2 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">
            {stats.upcomingInspections}
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Scheduled Pours</h2>
            <Truck className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">
            {stats.scheduledPours}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;