// Data for the chart
const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line', // Grafik jenis garis
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Label bulan
        datasets: [{
            label: 'Revenue in USD',
            data: [5000, 8000, 12000, 15000, 20000, 25000], // Data revenue
            borderColor: '#0c0a5d',
            backgroundColor: 'rgba(12, 10, 93, 0.2)',
            borderWidth: 2,
            tension: 0.4, // Membuat garis melengkung
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#555'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#555'
                }
            },
            y: {
                ticks: {
                    color: '#555'
                },
                beginAtZero: true
            }
        }
    }
});
