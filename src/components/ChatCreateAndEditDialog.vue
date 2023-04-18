<template>
  <a-modal
    v-if="!isEdit"
    :visible="showPopup"
    title="New chat"
    @cancel="onHandleClose"
  >
    <a-alert
      v-if="alertVisible"
      message="Chat content cannot be empty"
      type="error"
      show-icon
      :style="{
        marginBottom: '12px',
      }"
    />
    <a-textarea
      v-model:value="chatValue"
      placeholder="Please write a poem entitled `Bright Moon`"
      :rows="4"
    />
    <template #footer>
      <a-button @click="onHandleClose">Cancel</a-button>
      <a-button type="primary" @click="onHandleSubmit" :loading="loadingPopup"
        >OK</a-button
      >
      <a-button
        type="primary"
        @click="onHandleToChain"
        :loading="loadingPopup"
        v-if="nodeStatus == 'Stoped'"
        disabled
        >{{ handleToChainText() }}</a-button
      >
      <a-button
        type="primary"
        @click="onHandleToChain"
        :loading="loadingPopup"
        v-else-if="nodeStatus == 'Running'"
        >{{ handleToChainText() }}</a-button
      >
    </template>
  </a-modal>
  <a-modal
    v-else
    :visible="showPopup"
    :title="handleTitle(chatState)"
    @cancel="onHandleClose"
  >
    <a-textarea
      v-model:value="chatValue"
      placeholder="Please write a poem entitled `Bright Moon`"
      :rows="4"
      :disabled="demo"
      v-if="chatState == 'off-chain'"
    />
    <span v-else>{{ chatValue }}</span>
    <template #footer>
      <a-button @click="onHandleClose">Cancel</a-button>
      <a-button
        type="danger"
        @click="onHandleDelete"
        :loading="loadingPopup"
        v-if="chatState == 'off-chain'"
        >Delete</a-button
      >
      <a-button
        type="primary"
        @click="onHandleSubmit"
        :loading="loadingPopup"
        v-if="chatState == 'off-chain'"
        >OK</a-button
      >
      <a-button
        type="primary"
        @click="onHandleToChain"
        :loading="loadingPopup"
        v-if="chatState == 'off-chain' && nodeStatus == 'Stoped'"
        disabled
        >{{ handleToChainText() }}</a-button
      ><a-button
        type="primary"
        @click="onHandleToChain"
        :loading="loadingPopup"
        v-if="chatState == 'off-chain' && nodeStatus == 'Running'"
        >{{ handleToChainText() }}</a-button
      >
    </template>
  </a-modal>
</template>

<script>
import { ref, watchEffect } from "vue";

const usePopup = (props, emit) => {
  const showPopup = ref(false);
  const loadingPopup = ref(false);
  const chatUuid = ref("");
  const chatValue = ref("");
  const demo = ref(false);
  const chatState = ref("");
  const alertVisible = ref(false);
  watchEffect(() => {
    showPopup.value = props.visible || false;
    loadingPopup.value = props.loading || false;
    chatUuid.value = props.chatData.uuid || "";
    chatValue.value = props.chatData.chat || "";
    demo.value = props.chatData.demo || false;
    chatState.value = props.chatData.state || "off-chain";
    alertVisible.value = false;
  });
  const onHandleClose = () => {
    if (loadingPopup.value == false) {
      emit("popupClose");
    }
  };
  const onHandleDelete = () => {
    emit("popupDelete", { chatUuid, chatValue });
  };
  const onHandleSubmit = () => {
    if (chatValue.value.replace(/\s/g, "") == "") {
      alertVisible.value = true;
    } else {
      emit("popupSubmit", { chatUuid, chatValue });
    }
  };
  const onHandleToChain = () => {
    if (chatValue.value.replace(/\s/g, "") == "") {
      alertVisible.value = true;
    } else {
      loadingPopup.value = true;
      emit("popupToChain", { chatUuid, chatValue });
    }
  };
  return {
    showPopup,
    loadingPopup,
    chatUuid,
    chatValue,
    demo,
    chatState,
    alertVisible,
    onHandleClose,
    onHandleDelete,
    onHandleSubmit,
    onHandleToChain,
  };
};

export default {
  name: "ChatCreateAndEditDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    chatData: {
      type: Object,
    },
    nodeStatus: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const {
      showPopup,
      loadingPopup,
      chatUuid,
      chatValue,
      demo,
      chatState,
      alertVisible,
      onHandleClose,
      onHandleDelete,
      onHandleSubmit,
      onHandleToChain,
    } = usePopup(props, emit);

    const handleToChainText = () => {
      if (loadingPopup.value == true) {
        return "Data uplink...";
      } else {
        return "Data uplink";
      }
    };

    const handleTitle = (chatState) => {
      if (chatState == "on-chain") {
        return "View chat";
      } else {
        return "Edit chat";
      }
    };

    return {
      showPopup,
      loadingPopup,
      chatUuid,
      chatValue,
      demo,
      chatState,
      alertVisible,
      onHandleClose,
      onHandleDelete,
      onHandleSubmit,
      onHandleToChain,
      handleToChainText,

      handleTitle,
    };
  },
};
</script>

<style scoped></style>
