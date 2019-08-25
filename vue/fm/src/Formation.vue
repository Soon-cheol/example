<template>
    <div>
        <Player v-for="p in playerlist" :propsNumber="p.number" :propsName="p.name" :key="p.id" />
    </div>
</template>
<script>
import data from './data'
import Player from './components/Player.vue'
export default {
    components: {
        Player
    },
    props: {
        propsNumber: {},
        propsName: {}
        // playerlist.name
    },
    data : function() {
        return {
            playerlist : data
        }
    },
};
</script>