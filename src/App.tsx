import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/Layout';
import ErrorFallback from './components/ErrorFallback';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Schedule from './pages/Schedule';
import Customers from './pages/Customers';
import CustomerDetail from './pages/CustomerDetail';
import Crews from './pages/Crews';
import CrewDetail from './pages/CrewDetail';
import Employees from './pages/Employees';
import EmployeeDetail from './pages/EmployeeDetail';
import Vendors from './pages/Vendors';
import VendorDetail from './pages/VendorDetail';
import Locations from './pages/locations/LocationsList';
import Safety from './pages/Safety';
import Fleet from './pages/Fleet';
import WorkOrders from './pages/WorkOrders';
import WorkOrderDetail from './pages/WorkOrderDetail';
import RecurringWorkOrderDetail from './pages/RecurringWorkOrderDetail';
import NewWorkOrder from './pages/NewWorkOrder';
import NewRecurringWorkOrder from './pages/NewRecurringWorkOrder';
import CalendarPage from './pages/Calendar';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
            <Route path="/crews" element={<Crews />} />
            <Route path="/crews/:id" element={<CrewDetail />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendors/:id" element={<VendorDetail />} />
            <Route path="/locations/*" element={<Locations />} />
            <Route path="/safety/*" element={<Safety />} />
            <Route path="/fleet/*" element={<Fleet />} />
            <Route path="/work-orders" element={<WorkOrders />} />
            <Route path="/work-orders/new" element={<NewWorkOrder />} />
            <Route path="/work-orders/:id" element={<WorkOrderDetail />} />
            <Route path="/work-orders/recurring/new" element={<NewRecurringWorkOrder />} />
            <Route path="/work-orders/recurring/:id" element={<RecurringWorkOrderDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;