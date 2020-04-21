<template>
  <client-only>
    <div class="fwCheck">
      <input :id="id" type="checkbox" />
      <label :for="id">
        <font-awesome-icon icon="check-circle" />
        <span class="txt">{{ text }}</span>
      </label>
    </div>
  </client-only>
</template>

<script>
export default {
  /* props 로 받는 객체 구조
    {
        trmsRvsnSeqno: '1',
        trmsCd: '001',
        cdNm: '이용약관',
        agree: false
    },
  */
  props: {
    terms: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      id: this.terms.trmsCd,
      text: this.terms.cdNm
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variable';
.fwCheck {
  label {
    display: table;
    width: 100%;
    cursor: pointer;
    & > * {
      display: table-cell;
      vertical-align: middle;
    }
    svg {
      font-size: 26px;
    }
    span {
      width: 100%;
      padding: 2px 0 0 10px;
      font-weight: 400;
      text-align: left;
    }
  }
  input[type='checkbox'] {
    display: none;
    &:checked {
      & + label {
        .txt,
        svg {
          color: $mainColor;
        }
      }
    }
  }
}
</style>
