<template>
    <div>
        <!-- <ul v-for="p in playerlist" :key="p.id"> -->
        <ul>
            <li>
                <span>{{number}}.</span>
                <span>{{name}}</span>
            </li>
            <li>
                <span>Team</span>
                <span>{{team}}</span>
            </li>
            <li>
                <span>Position</span>
                <span>{{position}}</span>
            </li>
            <li>
                <span>Nation</span>
                <span>{{nation}}</span>
            </li>
            <li>
                <span>Age</span>
                <span>{{age}}</span>
            </li>
            <li>
                <span>Height</span>
                <span>{{height}}</span>
            </li>
            <li>
                <span>Foot</span>
                <span>{{foot}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import eventBus from '/src/eventBus.js'

export default {
    created : function() {
         eventBus.$on('player-info', this.playerInfo);
    },
    data : function() {
        return {
            number: '',
            name: '',
            team: '',
            position: '',
            nation: '',
            age: '',
            height: '',
            foot: ''
        }
    },
    methods : {
        playerInfo :function(info){
            this.number = info.number;
            this.name = info.name;
            this.team = info.team;
            this.position = info.position;
            this.nation = info.nation;
            this.age = info.age;
            this.height = info.height;
            this.foot = info.foot;
        }
    }
};
</script>