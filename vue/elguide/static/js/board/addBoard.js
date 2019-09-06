
var vm = new Vue({
    el: '#app',
    components: {
    },
    data: {
        message: 'Hello Vue.js!',
        fileList: [
        ],
        radio : '1',
        detail : {
            brdSeq:0,
            boardType:'',
            title:'',
            content:'',
            viewStartDt:null,
            viewEndDt:null,
            useYn:'Y',
            delYn:'N',
            regDt:null,
            regUsrSeq:0,
            udtDt:null,
            udtUsrSeq:0,
        },
    },
    methods: {
      handleRemove(file, fileList) {
        console.log("test1");
        console.log(file, fileList);
      },
      handlePreview(file) {
          console.log("test2");
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
      },
      addBoard(){
          alert(22);
        axios.post('/insertBoard', vm.detail)
        .then(res => {
            console.log(res.data);
        });
      }
    },
    created : function(){
        // this.getData();
    },
});
