<template>
    <div>
        <ul v-for="p in playerlist" :key="p.id">
            <li>
                <span>{{p.number}}.</span>
                <span>{{p.name}}</span>
            </li>
            <li>
                <span>Team</span>
                <span>{{p.team}}</span>
            </li>
            <li>
                <span>Position</span>
                <span>{{p.position}}</span>
            </li>
            <li>
                <span>Nation</span>
                <span>{{p.nation}}</span>
            </li>
            <li>
                <span>Age</span>
                <span>{{p.age}}</span>
            </li>
            <li>
                <span>Height</span>
                <span>{{p.height}}</span>
            </li>
            <li>
                <span>Foot</span>
                <span>{{p.foot}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import data from './data'

export default {
    data : function() {
        return {
            playerlist : data
        }
    },
};
</script>