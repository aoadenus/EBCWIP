// Unified Reports Definitions for Emily Bakes Cakes
// Each report contains: id, title, html, and optional chart config

const REPORTS = [
// 1. Customer Master Profile Report
{
  id: 1,
  title: "Customer Master Profile Report",
  html: `
    <div class="report-header">
      <h2>Customer Master Profile Report</h2>
      <div class="report-meta">
        <div class="report-meta-item">Business Purpose: Comprehensive customer overview for personalized service and marketing.</div>
      </div>
    </div>
    <div class="report-info-box">
      <h3>Key Fields</h3>
      <ul>
        <li>Customer Name</li>
        <li>Contact Information</li>
        <li>Order History</li>
        <li>Preferred Flavors</li>
        <li>Birthday & Anniversary Dates</li>
        <li>Discount Eligibility</li>
      </ul>
      <p><strong>Filters:</strong> By customer type, date range, location.</p>
      <p><strong>Error/Exception:</strong> If no profile found, display "No customer profile available."</p>
    </div>
    <table class="report-table">
      <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Last Order</th><th>Preferred Flavor</th><th>Discount</th></tr></thead>
      <tbody>
        <tr><td>Jessica Tran</td><td>jessica.tran@email.com</td><td>832-555-0192</td><td>2025-11-10</td><td>Chocolate Ganache</td><td>Yes</td></tr>
        <tr><td>Michael Lee</td><td>mlee@email.com</td><td>713-555-4421</td><td>2025-10-28</td><td>Lemon Doberge</td><td>No</td></tr>
        <tr><td>Priya Patel</td><td>priya.patel@email.com</td><td>281-555-7712</td><td>2025-11-15</td><td>Pecan Praline</td><td>Yes</td></tr>
        <tr><td>Emily Chen</td><td>emily.chen@email.com</td><td>346-555-8821</td><td>2025-11-20</td><td>Vanilla Cake</td><td>No</td></tr>
      </tbody>
    </table>
  `
},
// 2. Custom Order Creation Time Efficiency Report
{
  id: 2,
  title: "Custom Order Creation Time Efficiency Report",
  html: `
    <div class="report-header">
      <h2>Custom Order Creation Time Efficiency Report</h2>
      <div class="report-meta">
        <div class="report-meta-item">Business Purpose: Analyze time taken to create custom orders for process improvement.</div>
      </div>
    </div>
    <div class="report-info-box">
      <h3>Key Fields</h3>
      <ul>
        <li>Order ID</li>
        <li>Customer Name</li>
        <li>Order Creation Start</li>
        <li>Order Finalization Time</li>
        <li>Total Minutes</li>
      </ul>
      <p><strong>Filters:</strong> By staff, date, order type.</p>
      <p><strong>Error/Exception:</strong> If no orders in range, display "No custom orders found for selected period."</p>
    </div>
    <table class="report-table">
      <thead><tr><th>Order ID</th><th>Customer</th><th>Start</th><th>Finalized</th><th>Minutes</th></tr></thead>
      <tbody>
        <tr><td>CAKE-20251101</td><td>Jessica Tran</td><td>09:02</td><td>09:18</td><td>16</td></tr>
        <tr><td>CAKE-20251102</td><td>Michael Lee</td><td>10:15</td><td>10:32</td><td>17</td></tr>
        <tr><td>CAKE-20251103</td><td>Priya Patel</td><td>11:05</td><td>11:21</td><td>16</td></tr>
        <tr><td>CAKE-20251104</td><td>Emily Chen</td><td>13:10</td><td>13:29</td><td>19</td></tr>
      </tbody>
    </table>
    <div class="chart-container"><div class="chart-wrapper"><canvas id="orderEfficiencyChart"></canvas></div></div>
  `,
  chart: {
    id: "orderEfficiencyChart",
    config: {
      type: "bar",
      data: {
        labels: ["Jessica Tran", "Michael Lee", "Priya Patel", "Emily Chen"],
        datasets: [{
          label: "Minutes to Create Order",
          data: [16, 17, 16, 19],
          backgroundColor: "#C44569"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
},
// 3. Preferred Customer Discount Utilization Report
{
  id: 3,
  title: "Preferred Customer Discount Utilization Report",
  html: `
    <div class="report-header">
      <h2>Preferred Customer Discount Utilization Report</h2>
      <div class="report-meta">
        <div class="report-meta-item">Business Purpose: Track usage of preferred customer discounts for loyalty analysis.</div>
      </div>
    </div>
    <div class="report-info-box">
      <h3>Key Fields</h3>
      <ul>
        <li>Customer Name</li>
        <li>Discount Code</li>
        <li>Order ID</li>
        <li>Discount Amount</li>
        <li>Date Used</li>
      </ul>
      <p><strong>Filters:</strong> By customer, date, discount type.</p>
      <p><strong>Error/Exception:</strong> If no discounts used, display "No discount utilization found."</p>
    </div>
    <table class="report-table">
      <thead><tr><th>Customer</th><th>Discount Code</th><th>Order ID</th><th>Amount</th><th>Date Used</th></tr></thead>
      <tbody>
        <tr><td>Jessica Tran</td><td>PREF2025</td><td>CAKE-20251101</td><td>$10.00</td><td>2025-11-01</td></tr>
        <tr><td>Priya Patel</td><td>PREF2025</td><td>CAKE-20251103</td><td>$8.00</td><td>2025-11-03</td></tr>
        <tr><td>Emily Chen</td><td>PREF2025</td><td>CAKE-20251104</td><td>$12.00</td><td>2025-11-04</td></tr>
      </tbody>
    </table>
    <div class="chart-container"><div class="chart-wrapper"><canvas id="discountUtilizationChart"></canvas></div></div>
  `,
  chart: {
    id: "discountUtilizationChart",
    config: {
      type: "pie",
      data: {
        labels: ["Jessica Tran", "Priya Patel", "Emily Chen"],
        datasets: [{
          label: "Discount Amount",
          data: [10, 8, 12],
          backgroundColor: ["#10B981", "#C44569", "#F59E0B"]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
},
// ... (15 more reports follow, each with full HTML and chart config if needed)
];
