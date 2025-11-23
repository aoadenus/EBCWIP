// Report Engine - Handles dynamic report loading and rendering
// Emily Bakes Cakes - Unified Reports System

document.addEventListener('DOMContentLoaded', () => {
    initializeReportsEngine();
});

function initializeReportsEngine() {
    buildReportsMenu();
}

function buildReportsMenu() {
    const menuContainer = document.getElementById('reportsList');
    if (!menuContainer) return;

    menuContainer.innerHTML = REPORTS.map(report => `
        <div class="report-menu-item" data-report-id="${report.id}" onclick="loadReport(${report.id})">
            <span class="report-number">#${report.id}</span>
            <span>${report.title}</span>
        </div>
    `).join('');
}

function loadReport(reportId) {
    const report = REPORTS.find(r => r.id === reportId);
    if (!report) return;

    // Update active state in menu
    document.querySelectorAll('.report-menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-report-id="${reportId}"]`).classList.add('active');

    // Load report content
    const contentContainer = document.getElementById('reportContent');
    contentContainer.innerHTML = report.html;

    // Render chart if present
    if (report.chart) {
        setTimeout(() => {
            renderReportChart(report.chart);
        }, 100);
    }

    // Scroll to top of viewer
    contentContainer.scrollTop = 0;
}

function renderReportChart(chartConfig) {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }

    const canvas = document.getElementById(chartConfig.id);
    if (!canvas) {
        console.error('Chart canvas not found:', chartConfig.id);
        return;
    }

    // Destroy existing chart if present
    const existingChart = Chart.getChart(canvas);
    if (existingChart) {
        existingChart.destroy();
    }

    // Create new chart
    new Chart(canvas, chartConfig.config);
}
