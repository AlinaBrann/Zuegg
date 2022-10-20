<template>
  <div class="table_holder w-100">
    <div class="table--desktop table">
      <div class="table__inner">
        <table>
          <thead>
            <tr>
              <th v-for="(item, index) in thead" :key="index">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <slot name="tbody"></slot>
          </tbody>
        </table>
      </div>
    </div>
    <div class="table--mobile table">
      <div class="table__inner">
        <slot name="mobile"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import jQuery from "jquery";

export default {
  props: ["thead"],
};
</script>

<style lang="scss">
.table_holder {
  td.status-bad {
    color: #912982;
  }
  td.status-moderation {
    color: #fff;
  }
  .error_icon {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: rem(17px);
    height: rem(17px);
    font-size: rem(12px);
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(1, 63, 93, 0.15);
    border-radius: 50%;
  }
}
.table {
  width: 100%;
  margin: 0 auto;
  font-size: rem(18px);
  &--desktop {
    display: none !important;
    th {
      padding: 0 rem(35px) rem(40px);
      color: $green;
    }
    tr {
      margin-bottom: rem(10px);
    }
    td {
      position: relative;
      padding: rem(13px) rem(35px) rem(45px);
      margin-bottom: rem(10px);
      overflow: hidden;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - #{rem(35px)});
        background: $green_light;
        pointer-events: none;
        z-index: -1;
      }
      &:first-child {
        &::before {
          border-radius: rem(20px) 0 0 rem(20px);
        }
      }
      &:last-child {
        &::before {
          border-radius: 0 rem(20px) rem(20px) 0;
        }
      }
    }

    tbody {
      tr {
        path {
          fill: #a5a5a5;
        }
        &._not-accepted {
          color: #f90025;
          path {
            fill: #f90025;
          }
        }
        &._accepted {
          color: #000;
          path {
            fill: #000;
          }
        }
        &._received {
          color: #209524;
          path {
            fill: #209524;
          }
        }
      }
    }
  }
  &__inner {
    width: 100%;
    max-height: rem(470px);
    padding-right: rem(13px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: rem(10px);
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: $green;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: $green_dark;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
    }
  }
  table {
    position: relative;
    width: 100%;
    color: $green_dark;
    text-transform: uppercase;
    text-align: left;
    z-index: 1;
  }

  &--mobile {
    display: block;
    width: 100%;
    font-size: rem(18px);
    font-weight: 700;
    & > tr {
    }
    .table-mobile__inner {
      width: 100%;
      margin-bottom: rem(7px);
      background: $green_light;
      border-radius: rem(10px);
      tr {
        vertical-align: top;
        &:first-of-type {
          td {
            padding-top: rem(22px);
          }
        }
        &:last-of-type {
          td {
            padding-bottom: rem(22px);
          }
        }
      }
      td {
        padding: rem(6px) rem(16px);
        font-size: rem(18px);
        line-height: rem(18px);
        text-transform: uppercase;
        color: $green_dark;
        &:first-of-type {
          color: $green;
          padding-right: rem(0px);
        }
      }
    }
  }
  @media (min-width: $md) {
    &--desktop {
      display: block !important;
    }
    &--mobile {
      display: none !important;
    }
    &__inner {
      max-height: rem(450px);
      padding-right: rem(73px);
    }
  }
}
</style>
