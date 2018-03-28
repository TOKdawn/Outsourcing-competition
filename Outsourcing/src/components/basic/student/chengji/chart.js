import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    mounted() {

        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(242,113,115,.4)',
                data: [40, 39, 10, 40, 39, 80, 40]
            }, {
                label: 'Data Two',
                backgroundColor: 'rgba(54,162,235,.4)',
                data: [60, 55, 32, 10, 2, 12, 53]
            }]
        }, { responsive: true, maintainAspectRatio: false })

    }
}