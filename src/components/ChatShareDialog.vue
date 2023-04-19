<template>
  <a-popover trigger="click" v-model:visible="visible">
    <template #title>
      <span>Share</span>
    </template>
    <template #content>
      <p>Please select who you want to shared</p>
      <a-select
        v-model:value="value"
        :options="buildOptions(userList, item.users)"
        mode="multiple"
        placeholder="Please select"
        style="width: 230px"
        @dropdownVisibleChange="dropdownVisibleChange"
      >
      </a-select>
      <div
        :style="{
          display: 'flex',
          justifyContent: 'end',
          marginTop: '12px',
        }"
      >
        <a-button :size="size" @click="cancel">Cancel</a-button>
        <a-button
          type="primary"
          :size="size"
          :style="{
            marginLeft: '6px',
          }"
          @click="ok(this.item)"
          v-if="nodeStatus == 'Stopped'"
          disabled
          >OK</a-button
        >
        <a-button
          type="primary"
          :size="size"
          :style="{
            marginLeft: '6px',
          }"
          @click="ok(this.item)"
          v-else-if="nodeStatus == 'Running'"
          >OK</a-button
        >
      </div>
    </template>
    <share-alt-outlined key="share" />
  </a-popover>
</template>

<script>
import { ref } from "vue";
import { ShareAltOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";

export default {
  name: "ChatShareDialog",
  props: {
    item: {
      type: Object,
    },
    userList: {
      type: Array,
    },
    nodeStatus: {
      type: String,
    },
  },
  watch: {
    item(newValue) {
      console.log("newValue====>", newValue);
    },
  },
  components: {
    ShareAltOutlined,
  },
  methods: {
    buildOptions(userList, users) {
      console.log("buildOptions");
      console.log("users====>", users);
      const options = [];
      userList.forEach((element) => {
        if (users.indexOf(element) == -1) {
          options.push({
            value: element,
          });
        }
      });
      return options;
    },
  },
  setup(props, { emit }) {
    const dropdownVisibleChange = (open) => {
      console.log("call func [dropdownVisibleChange]");
      console.log("open", open);
    };

    const value = ref([]);
    const options = ref([]);
    props.userList.forEach((element) => {
      options.value.push({
        value: element,
      });
    });

    const visible = ref(false);
    const ok = (item) => {
      if (value.value.length > 0) {
        value.value.forEach((element) => {
          item.users.push(element);
        });
        emit("shareSubmit", item);
        message.success("Share chat successfully!");
      }
      visible.value = false;
      value.value = [];
    };
    const cancel = () => {
      visible.value = false;
      // value.value = [];
    };

    const size = ref("small");

    return {
      dropdownVisibleChange,
      // value: ref(["a1", "b2"]),
      // options: [...Array(25)].map((_, i) => ({
      //   value: (i + 10).toString(36) + (i + 1),
      // })),
      value,
      options,
      visible,
      ok,
      cancel,
      size,
    };
  },
};
</script>

<style scoped></style>
