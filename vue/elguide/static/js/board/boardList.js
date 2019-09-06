var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        criteria: {
            page: 1,
            perPageNum: 10,
            searchType: "",
            keyword: "",
            totalCount: 0,
        },
        listData: [],
    },
    methods: {
        getData: function () {
            console.log("ssssssssssssssssss");
            console.log(vm.criteria);
            // axios.get('/restList', {params:vm.criteria})
            axios.post('/restList', vm.criteria)
                .then(res => {
                    console.log(res.data);
                    this.listData = res.data.data;
                    this.criteria = res.data.criteria;
                });
        },
        onChangePageSize: function (pageNum) {
            vm.criteria.perPageNum = pageNum;
            vm.getData();
            console.log(vm.criteria);
            // alert(1);
        },
        onChangePageCurrent: function (no) {
            vm.criteria.page = no;
            vm.getData();
            console.log(arguments);
            // alert(2);
        },
        initForm: function () {
            this.listData = [];
        },
        addPage: function () {
            location.href = "/addBoard";
        }
    },
    created: function () {
        // this.getData();
    },
});
