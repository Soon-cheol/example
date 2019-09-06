<!-- Carousel : Start -->
<template id="layoutCarousel">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Carousel</h3>
            <el-carousel arrow="always" :autoplay="false" class="no-indicator">
                <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>AutoPlay + Indicator + Arrow Hover</h3>
            <el-carousel :autoplay="true" arrow="hover">
                <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Carousel : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: '',
    value2: '',
    value3: '',
    value4: ''
  }),
  components: {
    menuTab
  }
}
</script>
