import itemTittle from '@/components/componentItem/elementUi/itemTittle.vue'
import todoList from '@/components/componentItem/elementUi/todoList.vue'
import borderTable from '@/components/componentItem/elementUi/borderTable.vue'
import messageList from '@/components/componentItem/elementUi/messageList.vue'
import pieChart from '../../components/componentItem/eCharts/pieChart.vue'
import lineChart from '../../components/componentItem/eCharts/lineChart.vue'

export default {
  name: 'DashBoard',
  components: {
    itemTittle,
    pieChart,
    lineChart,
    todoList,
    borderTable,
    messageList
  }
}
