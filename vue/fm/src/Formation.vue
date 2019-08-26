<template>
    <div>
        <Player v-for="p in playerlist" :props="p" :key="p.id" />
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
        props: {}
        // playerlist.name
    },
    data : function() {
        return {
            playerlist : data
        }
    },
};
</script>