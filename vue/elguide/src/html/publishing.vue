<template>
    <div class="pub-wrap" >
        <h1>한화라이프플러스 관리자 퍼블리싱 현황</h1>
        <ul>
            <li>퍼블리싱 일정 : 6/3 ~ 6/28</li>
        </ul>
        <table class="index-list">
            <colgroup>
                <col style="width:3%">
                <col style="width:8%">
                <col style="width:8%">
                <col style="width:8%">
                <col style="width:15%">
                <col style="width:16%">
                <col style="width:6%">
                <col style="width:6%">
                <col style="width:12%">
                <col style="width:6%">
                <col style="width:6%">
            </colgroup>
            <tr>
                <th>no.</th>
                <th>1depth</th>
                <th>2depth</th>
                <th>3depth</th>
                <th>페이지 내용</th>
                <th>html</th>
                <th>진행상황</th>
                <th>담당자</th>
                <th>비고</th>
                <th>기획서 버젼</th>
                <th>수정사항 확인</th>
            </tr>
        </table>
        <div id="layerPopup" class="hidden">
            <div class="layer-center">
                <div class="btn-area"><i class="btn-layer-close el-icon-close"></i></div>
                <table id="tableData">
                    <colgroup>
                        <col style="width:14%">
                        <col style="*">
                        <col style="width:14%">
                        <col style="*">
                    </colgroup>
                    <tbody>
                    <!-- <tr>
                        <th>기획서 버젼</th>
                        <td></td>
                        <th>기획서 PAGE</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>페이지 내용</th>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <th>html</th>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="4">변경사항</td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <div></div>
                            <div></div>
                        </td>
                    </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import table from '@/html/table'
import update from '@/html/update'
export default {
  mounted () {
    const dataNum = table.length
    // const dataKeyNum = Object.keys(table[0]).length
    const tableSel = document.querySelector('.index-list')
    let val
    let tbody = document.querySelector('#layerPopup tbody')
    let listHTML = ``
    let updateId = []
    for (let k in update) updateId[k] = update[k].id
    for (let i = 0; i < dataNum; i++) {
      const addTr = document.createElement('tr')
      for (let j in table[i]) {
        const addTd = document.createElement('td')
        if (j === 'html') {
          val = '<a href="http://' + location.host + '/html' + table[i][j] + '" target="_blank">' + table[i][j] + '</a>'
          addTd.innerHTML += val
        } else if (j === 'popup') {
          if (update[i] !== undefined) {
            // console.log('i = ' + (i + 1))
            // console.log('update[i].id = ' + update[i].id)
            if (i + 1 === update[i].id) {
              val = '<span class="btn-popup">' + table[i][j] + '</span>'
              addTd.innerHTML += val
              addTd.addEventListener('click', function () {
                listHTML += `
                  <tr>
                      <th>기획서 버젼</th>
                      <td>${update[i].version}</td>
                      <th>기획서 PAGE</th>
                      <td>${update[i].page}</td>
                  </tr>
                  <tr>
                      <th>페이지 내용</th>
                      <td colspan="3">${update[i].title}</td>
                  </tr>
                  <tr>
                      <th>html</th>
                      <td colspan="3">${update[i].html}</td>
                  </tr>
                  <tr>
                      <td colspan="4">변경사항</td>
                  </tr>
                `
                tbody.innerHTML = listHTML
                document.getElementById('layerPopup').className = ''
              })
            }
          }
        } else {
          addTd.append(table[i][j])
        }
        addTr.appendChild(addTd)
      }
      tableSel.appendChild(addTr)
    }
    const trNum = document.querySelectorAll('.index-list tr').length
    let i = 1
    while (i < trNum) {
      document.querySelectorAll('tr')[i].querySelectorAll('td')[0].textContent = i
      i++
    }
    document.querySelector('.btn-layer-close').addEventListener('click', function () {
      document.getElementById('layerPopup').className = 'hidden'
      listHTML = ``
      tbody.innerHTML = listHTML
    })
    // this.htmlLink(2)
  },
  methods: {
    htmlLink (v) {
      // let path
      // const host = `http://210.216.157.64:38080/bao/index.html#`
      // const local = `http://127.0.0.1:8080/html`
      // v === 'jsp' ? path = host + event.target.firstChild.data : path = local + event.target.firstChild.data
      // window.open(path, '_blank')
      // alert(v)
    }
  }
}
</script>
