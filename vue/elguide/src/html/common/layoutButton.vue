
<!-- Button : Start -->
<template id="layoutButton">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Button Size</h3>
            <el-button size="large">large</el-button>
            <el-button>Default</el-button>
            <el-button size="small">Small</el-button>
            <el-button size="mini">Mini</el-button><br /><br />
            <el-button size="large" round>large</el-button>
            <el-button round>Default</el-button>
            <el-button size="small" round>Small</el-button>
            <el-button size="mini" round>Mini</el-button>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Basic Button</h3>
            <el-button>Default</el-button>
            <el-button type="main">Main</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button><br /><br />
            <el-button plain>Plain</el-button>
            <el-button type="main" plain>Main</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button><br /><br />
            <el-button class="delete" plain>Plain</el-button>
            <el-button class="delete" type="main" plain>Main</el-button>
            <el-button class="delete" type="primary" plain>Primary</el-button>
            <el-button class="delete" type="success" plain>Success</el-button>
            <el-button class="delete" type="info" plain>Info</el-button>
            <el-button class="delete" type="warning" plain>Warning</el-button>
            <el-button class="delete" type="danger" plain>Danger</el-button><br /><br />
            <el-button round>Round</el-button>
            <el-button type="main" round>Main</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button><br /><br />
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button><br /><br />
            <el-button disabled>Default</el-button>
            <el-button type="primary" disabled>Primary</el-button>
            <el-button type="success" disabled>Success</el-button>
            <el-button type="info" disabled>Info</el-button>
            <el-button type="warning" disabled>Warning</el-button>
            <el-button type="danger" disabled>Danger</el-button><br /><br />
            <el-button plain disabled>Plain</el-button>
            <el-button type="primary" plain disabled>Primary</el-button>
            <el-button type="success" plain disabled>Success</el-button>
            <el-button type="info" plain disabled>Info</el-button>
            <el-button type="warning" plain disabled>Warning</el-button>
            <el-button type="danger" plain disabled>Danger</el-button>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Text Button</h3>
            <el-button type="text">Text Button</el-button>
            <el-button type="text" disabled>Text Button</el-button>
            <el-button type="text" class="delete">Text Button</el-button>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Button : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  components: {
    menuTab
  }
}
</script>
