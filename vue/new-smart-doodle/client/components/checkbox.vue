<template>
  <div class="fwCheck">
    <input :id="id" type="checkbox" />
    <label :for="id">
      <font-awesome-icon icon="check-circle" />
      <span class="txt">{{ text }}</span>
    </label>
  </div>
</template>

<script>
export default {
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
  color: $disableColor;
  label {
    display: table;
    cursor: pointer;
    & > * {
      display: table-cell;
      vertical-align: middle;
    }
    svg {
      font-size: 30px;
    }
    span {
      padding: 2px 0 0 6px;
    }
  }
  input[type='checkbox'] {
    display: none;
    &:checked {
      & + label {
        .txt,
        svg {
          color: $subActiveColor01;
        }
      }
    }
  }
}
</style>
