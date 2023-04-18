<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo">
        <img
          src="../src/assets/logo.png"
          alt=""
          :style="{
            width: '40px',
          }"
        />
        <span
          :style="{
            color: '#fff',
            fontWeight: 'bolder',
            fontSize: '18px',
            marginLeft: '12px',
            cursor: 'pointer',
          }"
          @click="redirctToGithub"
          >MetaTOC</span
        >
      </div>
      <div class="avatar">
        <!-- <a-avatar
          :size="32"
          :style="{ backgroundColor: color, verticalAlign: 'middle' }"
        >
          {{ avatarValue }}
        </a-avatar> -->
        <!-- <p>{{ JSON.parse(localCurrentUser)["avatar"] }}</p> -->
        <a-avatar
          :size="36"
          :src="JSON.parse(localCurrentUser)['avatar']"
          :style="{ cursor: 'pointer' }"
          @click="onOpenSwitchUserPopup"
        />
        <caret-down-outlined
          :style="{
            color: '#eee',
            paddingLeft: '6px',
            cursor: 'pointer',
          }"
          @click="onOpenSwitchUserPopup"
        />
        <!-- <a-button
          size="small"
          :style="{ marginLeft: '16px', verticalAlign: 'middle' }"
          @click="changeValue"
        >
          改变
        </a-button> -->
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-card
          class="hovered"
          :bordered="false"
          style="width: 200px"
          :bodyStyle="cardBodyStyle"
          @click="onOpenPopup()"
        >
          <plus-outlined />
          <span :style="{ paddingLeft: '14px' }">New chat</span>
        </a-card>
        <a-divider style="margin: 0px 0px" />
        <a-card
          v-for="item in renderChatArray"
          :key="item.uuid"
          class="hovered"
          :bordered="false"
          style="width: 200px"
          :bodyStyle="cardBodyStyle"
          @click="onOpenPopup(item)"
        >
          <cloud-outlined v-if="item.state == 'off-chain'" />
          <cloud-upload-outlined v-else />
          <span :style="{ paddingLeft: '14px' }">{{ item.chat }}</span>
        </a-card>
      </a-layout-sider>
      <a-layout style="padding: 0 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <a-card :bordered="false" :bodyStyle="cardBodyStyle">
            <block-outlined />
            <span :style="{ paddingLeft: '14px' }">On chain chat</span>
          </a-card>

          <a-divider style="margin: 0px 0px" />

          <div style="padding: 24px">
            <ul class="nav">
              <li
                v-for="(item, index) in renderOnChainChatArray"
                :key="item.uuid"
              >
                <!-- <a-card style="width: 300px"> -->
                <a-card :style="handleLiCardStyle(item, index)">
                  <template #title>
                    <a-card-meta>
                      <template #title>
                        <div>
                          <span
                            :style="{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              color: 'rgba(0, 0, 0, 0.45)',
                            }"
                            >{{
                              moment(Number(item.updateAt)).format(
                                "YYYY-MM-DD HH:mm:ss"
                              )
                            }}</span
                          >
                        </div>
                        <span>{{ item.chat }}</span>
                      </template>
                      <template #avatar>
                        <div
                          :style="{
                            paddingTop: '6px',
                          }"
                        >
                          <!-- <a-avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          /> -->
                          <a-avatar :size="36" :src="item.avatarSrc[0]" />
                        </div>
                      </template>
                    </a-card-meta>
                  </template>
                  <a-card-meta>
                    <template #description>
                      <div
                        style="
                          height: 175px;
                          display: -webkit-box;
                          word-break: break-all;
                          text-overflow: ellipsis;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 8;
                          overflow: hidden;
                        "
                      >
                        <span>{{ item.reply }}</span>
                      </div>
                    </template>
                    <template #avatar>
                      <svg
                        width="36"
                        height="36"
                        viewBox="-3 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokewidth="2"
                        class="scale-appear"
                      >
                        <path
                          d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </template>
                  </a-card-meta>
                  <template #actions>
                    <expand-alt-outlined
                      key="expand"
                      @click="onOpenViewPopup(item)"
                    />
                    <chat-share-dialog
                      :item="item"
                      :userList="userList"
                      :nodeStatus="nodeStatus"
                      @shareSubmit="shareSubmit"
                    ></chat-share-dialog>
                  </template>
                </a-card>
              </li>
            </ul>
          </div>

          <a-divider style="margin: 0px 0px" />

          <a-card :bordered="false" :bodyStyle="cardBodyStyle">
            <deployment-unit-outlined />
            <span :style="{ paddingLeft: '14px' }">Node status</span>
            <span :style="{ color: '#1890ff' }" v-if="nodeStatus == 'Running'"
              >&nbsp;(💙Running
            </span>
            <span
              class="heartbeat-text"
              :style="{ color: '#1890ff' }"
              v-if="nodeStatus == 'Running'"
            >
              Beng~ Beng~
            </span>
            <span :style="{ color: '#1890ff' }" v-if="nodeStatus == 'Running'"
              >)
            </span>
            <!-- <div class="heartbeat-text"></div> -->
            <span
              :style="{ color: '#f5222d' }"
              v-else-if="nodeStatus == 'Stopped'"
              >&nbsp;(💔Stopped)
            </span>
            <!-- <div id="container" /> -->
          </a-card>

          <a-divider style="margin: 0px 0px" />

          <a-card :bordered="false" :bodyStyle="cardBodyStyle">
            <node-controller-vue
              @nodeStatusChange="onNodeStatusChange"
            ></node-controller-vue>
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>

  <chat-create-and-edit-dialog
    :visible="visible"
    :loading="loading"
    :isEdit="isEdit"
    :chatData="chatData"
    :nodeStatus="nodeStatus"
    @popupClose="onClosePopup"
    @popupDelete="onDeletePopup"
    @popupSubmit="onSubmitPopup"
    @popupToChain="onToChainPopup"
  />
  <chat-on-chain-view-dialog
    :visible="chatViewDialogVisible"
    :onChainChatData="onChainChatData"
    @popupClose="onCloseViewPopup"
  />
  <switch-user-dialog
    :visible="switchUserDialogVisible"
    :userList="userList"
    :avatarSrc="avatarSrc"
    :localCurrentUser="localCurrentUser"
    :localUserList="localUserList"
    @popupClose="onCloseSwitchUserPopup"
    @popupSubmit="onSubmitSwitchUserPopup"
  />
</template>
<script>
import { ref, defineComponent, watchEffect } from "vue";
import {
  PlusOutlined,
  CloudOutlined,
  BlockOutlined,
  DeploymentUnitOutlined,
  ExpandAltOutlined,
  // ShareAltOutlined,
  CloudUploadOutlined,
  CaretDownOutlined,
} from "@ant-design/icons-vue";
import ChatCreateAndEditDialog from "./components/ChatCreateAndEditDialog.vue";
import ChatOnChainViewDialog from "./components/ChatOnChainViewDialog.vue";
import ChatShareDialog from "./components/ChatShareDialog.vue";
import SwitchUserDialog from "./components/SwitchUserDialog.vue";
import NodeControllerVue from "./components/NodeController.vue";
import { v4 as uuidv4 } from "uuid";
import { $post } from "./utils/request";
import moment from "moment";

const usePopup = (props, emit, { chatArray, onChainChatArray }) => {
  const visible = ref(false);
  const loading = ref(false);
  const isEdit = ref(false);
  const chatData = ref({});
  const onOpenPopup = (thisChatData) => {
    if (thisChatData == undefined) {
      // New chat
      visible.value = true;
      loading.value = false;
      isEdit.value = false;
      chatData.value = {};
    } else {
      // Edit chat
      visible.value = true;
      loading.value = false;
      isEdit.value = true;
      chatData.value = thisChatData;
    }
  };
  const onClosePopup = () => {
    visible.value = false;
    loading.value = false;
  };
  const onDeletePopup = ({ chatUuid, chatValue }) => {
    console.log("call func [onDeletePopup]");
    console.log("chatUuid==>", chatUuid);
    console.log("chatValue==>", chatValue);
    const newChatArray = [];
    chatArray.value.reverse();
    chatArray.value.forEach((element) => {
      if (element.uuid != chatUuid.value) {
        newChatArray.push(element);
      }
    });
    console.log("newChatArray==>", newChatArray);
    console.log("newChatArray.reverse()==>", newChatArray);
    localStorage.setItem("chat", JSON.stringify(newChatArray));
    newChatArray.reverse();
    chatArray.value = newChatArray;
    visible.value = false;
    loading.value = false;
  };
  const onSubmitPopup = ({ chatUuid, chatValue }) => {
    const newChatArray = [];
    if (chatArray.value.length == 0) {
      const chatObject = {
        uuid: uuidv4(),
        chat: chatValue.value,
        reply: "",
        state: "off-chain",
        users: [JSON.parse(localStorage.getItem("currentUser"))["name"]],
        createAt: Date.now(),
        updateAt: Date.now(),
      };
      newChatArray.push(chatObject);
    } else {
      chatArray.value.reverse();
      let inChatArray = false;
      chatArray.value.forEach((element) => {
        if (element.uuid == chatUuid.value) {
          inChatArray = true;
          element.chat = chatValue.value;
          element.updateAt = Date.now();
        }
        newChatArray.push(element);
      });
      if (inChatArray == false) {
        const chatObject = {
          uuid: uuidv4(),
          chat: chatValue.value,
          reply: "",
          state: "off-chain",
          users: [JSON.parse(localStorage.getItem("currentUser"))["name"]],
          createAt: Date.now(),
          updateAt: Date.now(),
        };
        newChatArray.push(chatObject);
      }
    }
    localStorage.setItem("chat", JSON.stringify(newChatArray));
    newChatArray.reverse();
    chatArray.value = newChatArray;
    visible.value = false;
    loading.value = false;
  };
  const onToChainPopup = ({ chatUuid, chatValue }) => {
    $post("/sendMsg", { msg: chatValue.value }).then(
      (res) => {
        const newChatArray = [];
        chatArray.value.reverse();
        onChainChatArray.value.reverse();
        chatArray.value.forEach((element) => {
          if (element.uuid == chatUuid.value) {
            (element.state = "on-chain"),
              ((element.updateAt = Date.now()),
              (element.reply = res.data),
              (element.users = [
                JSON.parse(localStorage.getItem("currentUser"))["name"],
              ]),
              (element.avatarSrc = [
                JSON.parse(localStorage.getItem("currentUser"))["avatar"],
              ]));
            newChatArray.push(element);
            onChainChatArray.value.push(element);
          } else {
            newChatArray.push(element);
          }
        });
        if (chatUuid.value == "") {
          const chatObject = {
            uuid: uuidv4(),
            chat: chatValue.value,
            reply: res.data,
            state: "on-chain",
            users: [JSON.parse(localStorage.getItem("currentUser"))["name"]],
            avatarSrc: [
              JSON.parse(localStorage.getItem("currentUser"))["avatar"],
            ],
            createAt: Date.now(),
            updateAt: Date.now(),
          };
          newChatArray.push(chatObject);
          onChainChatArray.value.push(chatObject);
        }
        localStorage.setItem("chat", JSON.stringify(newChatArray));
        newChatArray.reverse();
        chatArray.value = newChatArray;
        localStorage.setItem(
          "onChainChat",
          JSON.stringify(onChainChatArray.value)
        );
        onChainChatArray.value.reverse();
        visible.value = false;
        loading.value = false;
      },
      (err) => {
        console.log("err==>", err);
        const newChatArray = [];
        chatArray.value.reverse();
        onChainChatArray.value.reverse();
        chatArray.value.forEach((element) => {
          if (element.uuid == chatUuid.value) {
            (element.state = "on-chain"),
              ((element.updateAt = Date.now()),
              (element.reply =
                element.reply != ""
                  ? element.reply
                  : "Unable to connect to ChatGPT service, please check your network connection or try again later."),
              (element.users = [
                JSON.parse(localStorage.getItem("currentUser"))["name"],
              ]),
              (element.avatarSrc = [
                JSON.parse(localStorage.getItem("currentUser"))["avatar"],
              ]));
            newChatArray.push(element);
            onChainChatArray.value.push(element);
          } else {
            newChatArray.push(element);
          }
        });
        if (chatUuid.value == "") {
          const chatObject = {
            uuid: uuidv4(),
            chat: chatValue.value,
            reply:
              "Unable to connect to ChatGPT service, please check your network connection or try again later.",
            state: "on-chain",
            users: [JSON.parse(localStorage.getItem("currentUser"))["name"]],
            avatarSrc: [
              JSON.parse(localStorage.getItem("currentUser"))["avatar"],
            ],
            createAt: Date.now(),
            updateAt: Date.now(),
          };
          newChatArray.push(chatObject);
          onChainChatArray.value.push(chatObject);
        }
        localStorage.setItem("chat", JSON.stringify(newChatArray));
        newChatArray.reverse();
        chatArray.value = newChatArray;
        localStorage.setItem(
          "onChainChat",
          JSON.stringify(onChainChatArray.value)
        );
        onChainChatArray.value.reverse();
        visible.value = false;
        loading.value = false;
      }
    );
  };
  const onOpenSharePopup = (thisChatData) => {
    console.log(thisChatData);
  };
  return {
    visible,
    loading,
    isEdit,
    chatData,
    onOpenPopup,
    onClosePopup,
    onDeletePopup,
    onSubmitPopup,
    onToChainPopup,
    onOpenSharePopup,
  };
};

const useViewPopup = () => {
  const chatViewDialogVisible = ref(false);
  const onChainChatData = ref({});
  const onOpenViewPopup = (thisOnChainChatData) => {
    chatViewDialogVisible.value = true;
    onChainChatData.value = thisOnChainChatData;
  };
  const onCloseViewPopup = () => {
    chatViewDialogVisible.value = false;
  };
  return {
    chatViewDialogVisible,
    onChainChatData,
    onOpenViewPopup,
    onCloseViewPopup,
  };
};

const switchUserPopup = ({ userList, avatarSrc }) => {
  const switchUserDialogVisible = ref(false);

  let myUsers = [];
  userList.forEach((element, index) => {
    if (index == 0) {
      myUsers.push({
        id: index,
        name: element,
        avatar: avatarSrc[index],
        lastLogin: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
    } else {
      myUsers.push({
        id: index,
        name: element,
        avatar: avatarSrc[index],
        lastLogin: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
    }
  });
  const localCurrentUser = ref("");
  localCurrentUser.value = localStorage.getItem("currentUser") || "";
  if (localCurrentUser.value == "") {
    localCurrentUser.value = JSON.stringify(myUsers[0]);
    localStorage.setItem("currentUser", localCurrentUser.value);
  }
  const localUserList = ref([]);
  localUserList.value = localStorage.getItem("userList") || "";
  console.log("localUserList.value.length==>", localUserList.value.length);
  if (localUserList.value.length == 0) {
    localUserList.value = JSON.stringify(myUsers);
    localStorage.setItem("userList", localUserList.value);
  }

  const onOpenSwitchUserPopup = () => {
    switchUserDialogVisible.value = true;
  };
  const onCloseSwitchUserPopup = () => {
    switchUserDialogVisible.value = false;
  };
  const onSubmitSwitchUserPopup = (selectedUserId) => {
    console.log("selectedUserId==>", selectedUserId);
    let localCurrentUserObject = {};
    let localUserListArray = JSON.parse(localStorage.getItem("userList"));
    localUserListArray.forEach((element) => {
      if (selectedUserId == element["id"]) {
        localCurrentUserObject = element;
        element["lastLogin"] = moment().format("YYYY-MM-DD HH:mm:ss");
      }
    });
    localCurrentUser.value = JSON.stringify(localCurrentUserObject);
    localStorage.setItem("currentUser", localCurrentUser.value);
    localUserList.value = JSON.stringify(localUserListArray);
    localStorage.setItem("userList", localUserList.value);
    switchUserDialogVisible.value = false;
  };
  return {
    switchUserDialogVisible,
    localCurrentUser,
    localUserList,
    onOpenSwitchUserPopup,
    onCloseSwitchUserPopup,
    onSubmitSwitchUserPopup,
  };
};

const nodeStatusChangeClass = () => {
  const nodeStatus = ref("Running");
  const onNodeStatusChange = (thisNodeStatus) => {
    nodeStatus.value = thisNodeStatus;
  };
  return {
    nodeStatus,
    onNodeStatusChange,
  };
};

export default defineComponent({
  components: {
    PlusOutlined,
    CloudOutlined,
    BlockOutlined,
    DeploymentUnitOutlined,
    ExpandAltOutlined,
    // ShareAltOutlined,
    CloudUploadOutlined,
    CaretDownOutlined,
    ChatCreateAndEditDialog,
    ChatOnChainViewDialog,
    ChatShareDialog,
    SwitchUserDialog,
    NodeControllerVue,
  },
  methods: {
    redirctToGithub() {
      window.open("https://github.com/vmeta42/metatoc");
    },
  },
  setup(props, emit) {
    const userList = ["Emily Johnson", "Michael Smith", "Sophia Williams"];
    const avatarSrc = [
      "https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200",
      "https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200",
      "https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200",
    ];

    // 初始化chat
    if (!localStorage.getItem("chat")) {
      // const initChat = [
      //   {
      //     avatarSrc: [avatarSrc[0]],
      //     chat: "What is Fermat's Last Theorem?",
      //     createAt: Date.now(),
      //     reply: `Fermat's Last Theorem, proposed by Pierre de Fermat in 1637, states that no three positive integers a, b, and c satisfy the equation an + bn = cn for any integer value of n greater than 2. This theorem was famously proved by Andrew Wiles in 1994, after more than 350 years of effort by mathematicians to solve it.`,
      //     state: "on-chain",
      //     updateAt: Date.now(),
      //     users: [userList[0]],
      //     uuid: uuidv4(),
      //   },
      //   {
      //     avatarSrc: [avatarSrc[1]],
      //     chat: "What is the largest star in the universe?",
      //     createAt: Date.now(),
      //     reply:
      //       "The largest star currently known is UY Scuti, which has a radius around 1,700 times larger than the Sun. However, there may be even larger stars that have not been discovered yet.",
      //     state: "on-chain",
      //     updateAt: Date.now(),
      //     users: [userList[1]],
      //     uuid: uuidv4(),
      //   },
      //   {
      //     avatarSrc: [avatarSrc[2]],
      //     chat: "Can you use Go to write a code that collects CPU and memory?",
      //     createAt: Date.now(),
      //     reply:
      //       'Yes, it\'s possible to use Go language to collect CPU and memory usage of a program or system.\n\nGo provides standard library packages such as "runtime" and "os" which can be used to gather information about system resources such as CPU usage, memory usage, and more.\n\nFor example, you can use the "runtime" package to get information about the current Go process:\n\n```go\nimport "runtime"\n\nfunc main() {\n    memStats := &runtime.MemStats{}\n    runtime.ReadMemStats(memStats)\n    // memStats now contains the memory usage statistics for the current process\n}\n```\n\nSimilarly, you can use the "os" package to get information about the overall system:\n\n```go\nimport (\n    "fmt"\n    "os"\n)\n\nfunc main() {\n    stat := &syscall.Statfs_t{}\n\n    err := syscall.Statfs("/", stat)\n    if err != nil {\n        fmt.Println("Error getting file system stats:", err)\n        return\n    }\n\n    totalSpace := stat.Blocks * uint64(stat.Bsize)\n    freeSpace := stat.Bfree * uint64(stat.Bsize)\n\n    // totalSpace and freeSpace now contain the total and free disk space on the root file system\n}\n```\n\nThese are just examples, and there are many other ways to gather system resource usage data using Go.',
      //     state: "on-chain",
      //     updateAt: Date.now(),
      //     users: [userList[2]],
      //     uuid: uuidv4(),
      //   },
      // ];
      const initChatString =
        '[{"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"chat":"What is Fermat\'s Last Theorem?","createAt":1681803979226,"reply":"Fermat\'s Last Theorem, proposed by Pierre de Fermat in 1637, states that no three positive integers a, b, and c satisfy the equation an + bn = cn for any integer value of n greater than 2. This theorem was famously proved by Andrew Wiles in 1994, after more than 350 years of effort by mathematicians to solve it.","state":"on-chain","updateAt":1681803979226,"users":["Emily Johnson"],"uuid":"0298c58f-7e1c-401a-8f8f-b6c785d779c9"},{"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"chat":"What is the largest star in the universe?","createAt":1681803979226,"reply":"The largest star currently known is UY Scuti, which has a radius around 1,700 times larger than the Sun. However, there may be even larger stars that have not been discovered yet.","state":"on-chain","updateAt":1681803979226,"users":["Michael Smith"],"uuid":"c44bff6c-8dcb-40be-b73f-b14b72d7ce47"},{"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"chat":"Can you use Go to write a code that collects CPU and memory?","createAt":1681803979226,"reply":"Yes, it\'s possible to use Go language to collect CPU and memory usage of a program or system.\\n\\nGo provides standard library packages such as \\"runtime\\" and \\"os\\" which can be used to gather information about system resources such as CPU usage, memory usage, and more.\\n\\nFor example, you can use the \\"runtime\\" package to get information about the current Go process:\\n\\n```go\\nimport \\"runtime\\"\\n\\nfunc main() {\\n    memStats := &runtime.MemStats{}\\n    runtime.ReadMemStats(memStats)\\n    // memStats now contains the memory usage statistics for the current process\\n}\\n```\\n\\nSimilarly, you can use the \\"os\\" package to get information about the overall system:\\n\\n```go\\nimport (\\n    \\"fmt\\"\\n    \\"os\\"\\n)\\n\\nfunc main() {\\n    stat := &syscall.Statfs_t{}\\n\\n    err := syscall.Statfs(\\"/\\", stat)\\n    if err != nil {\\n        fmt.Println(\\"Error getting file system stats:\\", err)\\n        return\\n    }\\n\\n    totalSpace := stat.Blocks * uint64(stat.Bsize)\\n    freeSpace := stat.Bfree * uint64(stat.Bsize)\\n\\n    // totalSpace and freeSpace now contain the total and free disk space on the root file system\\n}\\n```\\n\\nThese are just examples, and there are many other ways to gather system resource usage data using Go.","state":"on-chain","updateAt":1681803979226,"users":["Sophia Williams"],"uuid":"7ac7aac8-e101-407f-a17b-06c493cc7537"},{"uuid":"00d174fa-093f-4608-9731-8e93b66d3169","chat":"What is the process of photosynthesis in plants?","reply":"Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy. During photosynthesis, chlorophyll-containing cells in plant leaves absorb light energy, which is then used to synthesize glucose and oxygen from carbon dioxide and water. This process occurs in two stages: the light-dependent reactions, which occur in the thylakoid membranes of chloroplasts and generate ATP and NADPH, and the light-independent reactions (or Calvin Cycle), which occur in the stroma of chloroplasts and use the ATP and NADPH to fix carbon dioxide and synthesize glucose.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804140721,"updateAt":1681804140721},{"uuid":"5da90237-c1b4-442b-a5be-681c9bfdb652","chat":"How do cryptocurrencies work, and what is blockchain technology?","reply":"Cryptocurrencies are digital or virtual tokens that use cryptography to secure and verify transactions and control the creation of new units. They are typically decentralized, meaning they operate without a central authority such as a government or financial institution.\\n\\nBlockchain technology is the underlying technology that enables cryptocurrencies to function. It is a distributed ledger system that records and stores transactions in blocks, which are linked together in a chronological chain. Each block contains a unique cryptographic code, called a hash, which verifies the integrity of the block\'s data and ensures that it cannot be tampered with. This makes blockchain an extremely secure and transparent way to store and transmit data.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804168083,"updateAt":1681804168083},{"uuid":"c7471be8-9e2a-43b3-8730-bc601d4c7c1f","chat":"What are some tips for improving mental health and reducing stress?","reply":"1. Regular exercise\\n2. Practice meditation or mindfulness\\n3. Get enough sleep\\n4. Connect with friends and family\\n5. Take breaks and prioritize self-care\\n6. Seek professional help if needed\\n7. Limit exposure to negative news or social media\\n8. Maintain a healthy diet\\n9. Engage in hobbies or activities you enjoy\\n10. Set realistic goals and prioritize tasks.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804181955,"updateAt":1681804181955},{"uuid":"92627ab7-0280-4079-bab2-a95541f5353b","chat":"Can you explain the basics of quantum mechanics?","reply":"Quantum mechanics is a branch of physics that describes the behavior of matter and energy at extremely small scales, such as atoms and subatomic particles. It is based on the concept of wave-particle duality, which means that all particles have both wave-like and particle-like properties.\\n\\nThe basic principles of quantum mechanics include:\\n\\n1. Superposition: Particles can be in multiple states or locations at the same time until they are observed or measured.\\n\\n2. Uncertainty principle: It is impossible to know both the exact position and momentum of a particle simultaneously.\\n\\n3. Wave-particle duality: Particles can exhibit wave-like behavior, such as interference patterns, and vice versa.\\n\\n4. Quantum entanglement: When two particles become entangled, their states are linked even over long distances.\\n\\n5. Probability: The behavior of particles is described by probabilities, rather than deterministic laws.\\n\\nQuantum mechanics has many applications in modern technology, including transistors, lasers, and cryptography. However, its counterintuitive concepts and predictions have also led to many philosophical and interpretational debates in physics.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804206334,"updateAt":1681804206334},{"uuid":"5e11c80e-394d-4e26-a6fd-ca7e7685fd08","chat":"What are some popular travel destinations in Europe?","reply":"Some popular travel destinations in Europe are Paris (France), Barcelona (Spain), Rome (Italy), Amsterdam (Netherlands), London (United Kingdom), Berlin (Germany), Venice (Italy), Athens (Greece), Vienna (Austria), and Prague (Czech Republic).","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804214559,"updateAt":1681804214559},{"uuid":"8a98b1e0-25c3-4ea3-b0cf-cbb73245659f","chat":"What are the basic principles of artificial intelligence and machine learning?","reply":"The basic principles of artificial intelligence include creating algorithms that can simulate human cognition and decision-making, while machine learning involves developing techniques that allow machines to learn patterns from data without being explicitly programmed. Key concepts in AI and ML include neural networks, deep learning, supervised and unsupervised learning, reinforcement learning, and natural language processing. Additionally, these fields often rely on large amounts of data and sophisticated computational infrastructure for training and inference.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804285433,"updateAt":1681804285433},{"uuid":"45bef18e-b7a5-4436-a7ab-30547c668707","chat":"How does climate change affect global ecosystems?","reply":"Climate change can have various impacts on global ecosystems, including:\\n\\n1. Changes in temperature and precipitation patterns can affect the distribution and abundance of species, leading to local extinctions and changes in community composition.\\n\\n2. Melting glaciers and ice sheets can lead to rising sea levels, which can inundate coastal habitats and disrupt marine ecosystems.\\n\\n3. Changes in ocean temperatures and chemistry can affect marine organisms and disrupt food webs.\\n\\n4. Increased frequency and severity of heatwaves, droughts, wildfires, storms, and floods can cause direct damage to ecosystems and their inhabitants.\\n\\n5. Climate change can also exacerbate other stressors, such as habitat destruction, pollution, overfishing, and invasive species, making it more difficult for ecosystems to adapt and recover.\\n\\nOverall, climate change is a major threat to biodiversity and ecosystem functioning, and urgent action is needed to reduce greenhouse gas emissions and protect vulnerable ecosystems.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804304409,"updateAt":1681804304409},{"uuid":"a51b02d3-4b72-4084-ad66-65881ab8c5b9","chat":"How to develop effective time management strategies?","reply":"Here are some tips for developing effective time management strategies:\\n\\n1. Set clear goals and prioritize tasks according to their importance and urgency.\\n2. Create a schedule or to-do list that includes specific blocks of time for each task.\\n3. Eliminate distractions such as social media, email notifications, etc., during designated work times.\\n4. Take regular breaks to prevent burnout and increase productivity.\\n5. Use tools like timers and productivity apps to help you stay on track.\\n6. Learn to say \\"no\\" to requests that don\'t align with your goals or priorities.\\n7. Delegate tasks when possible to free up more time for important projects.\\n8. Regularly evaluate your progress and adjust your strategies as needed.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804325044,"updateAt":1681804325044},{"uuid":"c3c2cee8-f5ea-4ace-9a3d-a0aed8e7ee0a","chat":"What are the main ideas of Marxism?","reply":"Marxism is a social, economic, and political theory developed by Karl Marx. Its main ideas include the belief that class struggle is the driving force behind historical change, that capitalism exploits workers and leads to inequality, that a socialist revolution is necessary to overthrow capitalist systems, and that a classless society can be achieved through the establishment of communism. Marxism also emphasizes the importance of collective ownership of the means of production and the abolition of private property.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804342759,"updateAt":1681804342759},{"uuid":"8facdcb2-b677-40ba-b6eb-865d349a62ea","chat":"Why is it important to maintain biodiversity?","reply":"Maintaining biodiversity is important because it supports the functioning of ecosystems and provides a wide range of benefits to human society, including food, medicine, clean air and water, and cultural and recreational opportunities. Biodiversity also helps to ensure ecosystem resilience and adaptability in the face of environmental change, such as climate change and habitat loss. Additionally, many species have intrinsic value and ethical considerations dictate that we have a responsibility to protect them.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804359729,"updateAt":1681804359729},{"uuid":"584d18d0-53bb-4654-bf3d-9ebbee34b2ca","chat":"What are the primary differences between renewable and non-renewable energy sources?","reply":"Renewable energy sources are naturally replenishing and can be sustainably used without being depleted, such as solar, wind, hydro, geothermal, and biomass. Non-renewable energy sources are finite and cannot be replenished within a human timescale, such as fossil fuels (coal, oil, natural gas) and nuclear energy. Additionally, renewable energy sources generally have lower carbon emissions than non-renewable sources, which contribute significantly to climate change.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804407760,"updateAt":1681804407760},{"uuid":"b46ccc9d-0d73-402c-9211-ba3685a66333","chat":"How does meditation help in improving mental and emotional well-being?","reply":"Meditation can help improve mental and emotional well-being by reducing stress, anxiety, and depression; increasing feelings of calm and relaxation; improving focus and attention; promoting self-awareness and acceptance; and enhancing overall emotional resilience and cognitive flexibility.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804418041,"updateAt":1681804418041},{"uuid":"36243888-ffe3-4519-920a-3e152ad39017","chat":"What are some key aspects to consider when starting a new business?","reply":"Here are some key aspects to consider when starting a new business:\\n\\n1. Market research and analysis\\n2. Business plan creation\\n3. Funding and financial planning\\n4. Legal structure and regulatory requirements\\n5. Branding and marketing strategy\\n6. Hiring and team building\\n7. Operational logistics and infrastructure\\n8. Risk management and contingency planning \\n\\nIt\'s important to thoroughly research and consider all of these aspects before starting a new business to increase the chances of success.","state":"off-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804452946,"updateAt":1681804452946},{"uuid":"d9bdee62-e8a0-4611-bdc9-2e42cc6bc224","chat":"Can you explain the theory of relativity, and how it has impacted our understanding of the universe?","reply":"The theory of relativity, developed by Albert Einstein, is a set of two interrelated theories: special relativity and general relativity. \\n\\nSpecial relativity deals with the laws of physics in unaccelerated (inertial) reference frames, and it introduced the concept that the speed of light is constant for all observers, regardless of their relative motion. This means that time and space are not absolute but are dependent on the observer\'s reference frame. Special relativity also showed that mass and energy are equivalent, as described by the famous equation E=mc².\\n\\nGeneral relativity extends special relativity to include gravity, describing gravity as a curvature of spacetime caused by the presence of matter and energy. This theory has been confirmed by numerous experiments and observations, including the bending of starlight during a solar eclipse and the detection of gravitational waves.\\n\\nThe theory of relativity has had a profound impact on our understanding of the universe, revolutionizing our understanding of space, time, gravity, and the nature of the cosmos. It has led to new concepts like spacetime, black holes, and the expanding universe, and has played a crucial role in the development of modern cosmology and astrophysics.","state":"off-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804478295,"updateAt":1681804478295},{"uuid":"a39469e7-cc8e-4010-8e5e-c37cfee35d38","chat":"What are some effective methods for learning a new language?","reply":"1. Start with the basics: Learn the basic grammar rules, vocabulary, and sentence structure.\\n\\n2. Immerse yourself in the language: Read books, watch TV shows/movies, and listen to music in the target language.\\n\\n3. Practice speaking: Find a language partner or join a language exchange program to practice your speaking skills.\\n\\n4. Use language learning apps: Various apps offer fun exercises, quizzes, and games to improve language proficiency.\\n\\n5. Take a language course: Enroll in a language class or hire a private tutor to receive structured learning with feedback.\\n\\n6. Visit a country where the language is spoken: Immersion in the culture can help one learn about the language and acquire new vocabulary naturally.\\n\\n7. Persist and be patient: Learning a new language takes time and consistent effort, so stay motivated and enjoy the process of progress.","state":"off-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804580000,"updateAt":1681804580000},{"uuid":"d79aea5d-c987-48f5-9c7c-18d72ac72ab4","chat":"What are the ethical considerations regarding human gene editing technology?","reply":"Human gene editing technology raises a variety of ethical considerations, including the potential for unintended consequences and unforeseen risks to individuals and society, issues of equity and access, concerns about eugenics and discrimination, and questions about the appropriate role of science in shaping human biology. Additionally, there are ongoing debates about the ethical use of this technology in research and medical applications, as well as concerns about informed consent, privacy, and transparency.","state":"off-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804620723,"updateAt":1681804620723},{"uuid":"e6314280-fb37-4a7d-8a5d-ab96a051e6b0","chat":"How important is cybersecurity in today\'s society?","reply":"Cybersecurity is extremely important in today\'s society. With the increasing reliance on technology and the internet, the risk of cyber attacks has also increased. Cybersecurity helps protect individuals, organizations, and governments from unauthorized access to sensitive information, data breaches, and other malicious activities that can result in financial losses, reputational damage, and even physical harm.","state":"off-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804636910,"updateAt":1681804636910},{"uuid":"b06d523e-19ad-457e-88a7-7851a54c90df","chat":"What does \\"growth mindset\\" mean in psychology?","reply":"\\"Growth mindset\\" is a term coined by psychologist Carol Dweck to describe the belief that one\'s abilities and intelligence can be developed through hard work, persistence, and learning from failure. It contrasts with a \\"fixed mindset,\\" which is the belief that one\'s abilities are largely innate and cannot be changed much. Research suggests that individuals with a growth mindset tend to be more resilient, motivated, and successful in achieving their goals.","state":"off-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804648069,"updateAt":1681804648069},{"uuid":"31c0f02b-7eb5-48cb-9003-27d9ab66b58a","chat":"How does space exploration drive advancements in science and technology?","reply":"Space exploration drives advancements in science and technology in several ways. It has led to the development of new materials, propulsion systems, and communication technologies. Space exploration has also resulted in improved medical and environmental monitoring technologies, as well as advances in robotics and artificial intelligence. Additionally, space missions have allowed scientists to study the universe beyond Earth, leading to new discoveries and a deeper understanding of our place in the cosmos.","state":"off-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804669963,"updateAt":1681804669963},{"uuid":"8da1d8f5-35e8-4f68-a609-ee7d7ebf472f","chat":"What impact does maintaining good interpersonal relationships have on personal and professional success?","reply":"Maintaining good interpersonal relationships can have a significant impact on both personal and professional success. It helps in building trust, communication, collaboration, and mutual respect, leading to better teamwork, higher productivity, job satisfaction, career advancement, and overall well-being. Good interpersonal relationships can also provide emotional support, reduce stress, and increase resilience in challenging situations, contributing to personal growth and happiness.","state":"off-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804679835,"updateAt":1681804679835},{"uuid":"d53e09ad-aa9a-4e96-bbf5-9123b4c6dc47","chat":"What is a circular economy, and how does it contribute to sustainable development?","reply":"A circular economy is an economic system that aims to minimize waste and promote the continual use of resources by designing out waste and pollution, keeping products and materials in use, and regenerating natural systems. It contributes to sustainable development by reducing resource depletion, reducing environmental pollution, promoting economic growth, creating jobs, and improving social well-being. In a circular economy, products and materials are reused, repaired, or recycled, which reduces the need for virgin resources and energy-intensive production processes. This results in lower greenhouse gas emissions, reduced water consumption, and improved resource efficiency, which all contribute to a more sustainable future.","state":"off-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804712180,"updateAt":1681804712180}]';
      const initOnChainChatString =
        '[{"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"chat":"What is Fermat\'s Last Theorem?","createAt":1681803979226,"reply":"Fermat\'s Last Theorem, proposed by Pierre de Fermat in 1637, states that no three positive integers a, b, and c satisfy the equation an + bn = cn for any integer value of n greater than 2. This theorem was famously proved by Andrew Wiles in 1994, after more than 350 years of effort by mathematicians to solve it.","state":"on-chain","updateAt":1681803979226,"users":["Emily Johnson"],"uuid":"0298c58f-7e1c-401a-8f8f-b6c785d779c9"},{"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"chat":"What is the largest star in the universe?","createAt":1681803979226,"reply":"The largest star currently known is UY Scuti, which has a radius around 1,700 times larger than the Sun. However, there may be even larger stars that have not been discovered yet.","state":"on-chain","updateAt":1681803979226,"users":["Michael Smith"],"uuid":"c44bff6c-8dcb-40be-b73f-b14b72d7ce47"},{"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"chat":"Can you use Go to write a code that collects CPU and memory?","createAt":1681803979226,"reply":"Yes, it\'s possible to use Go language to collect CPU and memory usage of a program or system.\\n\\nGo provides standard library packages such as \\"runtime\\" and \\"os\\" which can be used to gather information about system resources such as CPU usage, memory usage, and more.\\n\\nFor example, you can use the \\"runtime\\" package to get information about the current Go process:\\n\\n```go\\nimport \\"runtime\\"\\n\\nfunc main() {\\n    memStats := &runtime.MemStats{}\\n    runtime.ReadMemStats(memStats)\\n    // memStats now contains the memory usage statistics for the current process\\n}\\n```\\n\\nSimilarly, you can use the \\"os\\" package to get information about the overall system:\\n\\n```go\\nimport (\\n    \\"fmt\\"\\n    \\"os\\"\\n)\\n\\nfunc main() {\\n    stat := &syscall.Statfs_t{}\\n\\n    err := syscall.Statfs(\\"/\\", stat)\\n    if err != nil {\\n        fmt.Println(\\"Error getting file system stats:\\", err)\\n        return\\n    }\\n\\n    totalSpace := stat.Blocks * uint64(stat.Bsize)\\n    freeSpace := stat.Bfree * uint64(stat.Bsize)\\n\\n    // totalSpace and freeSpace now contain the total and free disk space on the root file system\\n}\\n```\\n\\nThese are just examples, and there are many other ways to gather system resource usage data using Go.","state":"on-chain","updateAt":1681803979226,"users":["Sophia Williams"],"uuid":"7ac7aac8-e101-407f-a17b-06c493cc7537"},{"uuid":"00d174fa-093f-4608-9731-8e93b66d3169","chat":"What is the process of photosynthesis in plants?","reply":"Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy. During photosynthesis, chlorophyll-containing cells in plant leaves absorb light energy, which is then used to synthesize glucose and oxygen from carbon dioxide and water. This process occurs in two stages: the light-dependent reactions, which occur in the thylakoid membranes of chloroplasts and generate ATP and NADPH, and the light-independent reactions (or Calvin Cycle), which occur in the stroma of chloroplasts and use the ATP and NADPH to fix carbon dioxide and synthesize glucose.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804140721,"updateAt":1681804140721},{"uuid":"5da90237-c1b4-442b-a5be-681c9bfdb652","chat":"How do cryptocurrencies work, and what is blockchain technology?","reply":"Cryptocurrencies are digital or virtual tokens that use cryptography to secure and verify transactions and control the creation of new units. They are typically decentralized, meaning they operate without a central authority such as a government or financial institution.\\n\\nBlockchain technology is the underlying technology that enables cryptocurrencies to function. It is a distributed ledger system that records and stores transactions in blocks, which are linked together in a chronological chain. Each block contains a unique cryptographic code, called a hash, which verifies the integrity of the block\'s data and ensures that it cannot be tampered with. This makes blockchain an extremely secure and transparent way to store and transmit data.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804168083,"updateAt":1681804168083},{"uuid":"c7471be8-9e2a-43b3-8730-bc601d4c7c1f","chat":"What are some tips for improving mental health and reducing stress?","reply":"1. Regular exercise\\n2. Practice meditation or mindfulness\\n3. Get enough sleep\\n4. Connect with friends and family\\n5. Take breaks and prioritize self-care\\n6. Seek professional help if needed\\n7. Limit exposure to negative news or social media\\n8. Maintain a healthy diet\\n9. Engage in hobbies or activities you enjoy\\n10. Set realistic goals and prioritize tasks.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804181955,"updateAt":1681804181955},{"uuid":"92627ab7-0280-4079-bab2-a95541f5353b","chat":"Can you explain the basics of quantum mechanics?","reply":"Quantum mechanics is a branch of physics that describes the behavior of matter and energy at extremely small scales, such as atoms and subatomic particles. It is based on the concept of wave-particle duality, which means that all particles have both wave-like and particle-like properties.\\n\\nThe basic principles of quantum mechanics include:\\n\\n1. Superposition: Particles can be in multiple states or locations at the same time until they are observed or measured.\\n\\n2. Uncertainty principle: It is impossible to know both the exact position and momentum of a particle simultaneously.\\n\\n3. Wave-particle duality: Particles can exhibit wave-like behavior, such as interference patterns, and vice versa.\\n\\n4. Quantum entanglement: When two particles become entangled, their states are linked even over long distances.\\n\\n5. Probability: The behavior of particles is described by probabilities, rather than deterministic laws.\\n\\nQuantum mechanics has many applications in modern technology, including transistors, lasers, and cryptography. However, its counterintuitive concepts and predictions have also led to many philosophical and interpretational debates in physics.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804206334,"updateAt":1681804206334},{"uuid":"5e11c80e-394d-4e26-a6fd-ca7e7685fd08","chat":"What are some popular travel destinations in Europe?","reply":"Some popular travel destinations in Europe are Paris (France), Barcelona (Spain), Rome (Italy), Amsterdam (Netherlands), London (United Kingdom), Berlin (Germany), Venice (Italy), Athens (Greece), Vienna (Austria), and Prague (Czech Republic).","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804214559,"updateAt":1681804214559},{"uuid":"8a98b1e0-25c3-4ea3-b0cf-cbb73245659f","chat":"What are the basic principles of artificial intelligence and machine learning?","reply":"The basic principles of artificial intelligence include creating algorithms that can simulate human cognition and decision-making, while machine learning involves developing techniques that allow machines to learn patterns from data without being explicitly programmed. Key concepts in AI and ML include neural networks, deep learning, supervised and unsupervised learning, reinforcement learning, and natural language processing. Additionally, these fields often rely on large amounts of data and sophisticated computational infrastructure for training and inference.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804285433,"updateAt":1681804285433},{"uuid":"45bef18e-b7a5-4436-a7ab-30547c668707","chat":"How does climate change affect global ecosystems?","reply":"Climate change can have various impacts on global ecosystems, including:\\n\\n1. Changes in temperature and precipitation patterns can affect the distribution and abundance of species, leading to local extinctions and changes in community composition.\\n\\n2. Melting glaciers and ice sheets can lead to rising sea levels, which can inundate coastal habitats and disrupt marine ecosystems.\\n\\n3. Changes in ocean temperatures and chemistry can affect marine organisms and disrupt food webs.\\n\\n4. Increased frequency and severity of heatwaves, droughts, wildfires, storms, and floods can cause direct damage to ecosystems and their inhabitants.\\n\\n5. Climate change can also exacerbate other stressors, such as habitat destruction, pollution, overfishing, and invasive species, making it more difficult for ecosystems to adapt and recover.\\n\\nOverall, climate change is a major threat to biodiversity and ecosystem functioning, and urgent action is needed to reduce greenhouse gas emissions and protect vulnerable ecosystems.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16196205/pexels-photo-16196205.jpeg?w=200"],"createAt":1681804304409,"updateAt":1681804304409},{"uuid":"a51b02d3-4b72-4084-ad66-65881ab8c5b9","chat":"How to develop effective time management strategies?","reply":"Here are some tips for developing effective time management strategies:\\n\\n1. Set clear goals and prioritize tasks according to their importance and urgency.\\n2. Create a schedule or to-do list that includes specific blocks of time for each task.\\n3. Eliminate distractions such as social media, email notifications, etc., during designated work times.\\n4. Take regular breaks to prevent burnout and increase productivity.\\n5. Use tools like timers and productivity apps to help you stay on track.\\n6. Learn to say \\"no\\" to requests that don\'t align with your goals or priorities.\\n7. Delegate tasks when possible to free up more time for important projects.\\n8. Regularly evaluate your progress and adjust your strategies as needed.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804325044,"updateAt":1681804325044},{"uuid":"c3c2cee8-f5ea-4ace-9a3d-a0aed8e7ee0a","chat":"What are the main ideas of Marxism?","reply":"Marxism is a social, economic, and political theory developed by Karl Marx. Its main ideas include the belief that class struggle is the driving force behind historical change, that capitalism exploits workers and leads to inequality, that a socialist revolution is necessary to overthrow capitalist systems, and that a classless society can be achieved through the establishment of communism. Marxism also emphasizes the importance of collective ownership of the means of production and the abolition of private property.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16161525/pexels-photo-16161525.jpeg?w=200"],"createAt":1681804342759,"updateAt":1681804342759},{"uuid":"8facdcb2-b677-40ba-b6eb-865d349a62ea","chat":"Why is it important to maintain biodiversity?","reply":"Maintaining biodiversity is important because it supports the functioning of ecosystems and provides a wide range of benefits to human society, including food, medicine, clean air and water, and cultural and recreational opportunities. Biodiversity also helps to ensure ecosystem resilience and adaptability in the face of environmental change, such as climate change and habitat loss. Additionally, many species have intrinsic value and ethical considerations dictate that we have a responsibility to protect them.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804359729,"updateAt":1681804359729},{"uuid":"584d18d0-53bb-4654-bf3d-9ebbee34b2ca","chat":"What are the primary differences between renewable and non-renewable energy sources?","reply":"Renewable energy sources are naturally replenishing and can be sustainably used without being depleted, such as solar, wind, hydro, geothermal, and biomass. Non-renewable energy sources are finite and cannot be replenished within a human timescale, such as fossil fuels (coal, oil, natural gas) and nuclear energy. Additionally, renewable energy sources generally have lower carbon emissions than non-renewable sources, which contribute significantly to climate change.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804407760,"updateAt":1681804407760},{"uuid":"b46ccc9d-0d73-402c-9211-ba3685a66333","chat":"How does meditation help in improving mental and emotional well-being?","reply":"Meditation can help improve mental and emotional well-being by reducing stress, anxiety, and depression; increasing feelings of calm and relaxation; improving focus and attention; promoting self-awareness and acceptance; and enhancing overall emotional resilience and cognitive flexibility.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?w=200"],"createAt":1681804418041,"updateAt":1681804418041}]';
      localStorage.setItem("chat", initChatString);
      localStorage.setItem("onChainChat", initOnChainChatString);
    }

    const chat = ref("");
    const chatArray = ref([]);
    chat.value = localStorage.getItem("chat") || "";
    if (chat.value != "") {
      chatArray.value = JSON.parse(chat.value);
      chatArray.value.reverse();
    }

    const onChainChat = ref("");
    const onChainChatArray = ref([]);
    onChainChat.value = localStorage.getItem("onChainChat") || "";
    if (onChainChat.value != "") {
      onChainChatArray.value = JSON.parse(onChainChat.value);
      onChainChatArray.value.reverse();
    }

    const {
      visible,
      loading,
      isEdit,
      chatData,
      onOpenPopup,
      onClosePopup,
      onDeletePopup,
      onSubmitPopup,
      onToChainPopup,
      onOpenSharePopup,
    } = usePopup(props, emit, { chatArray, onChainChatArray });

    const {
      chatViewDialogVisible,
      onChainChatData,
      onOpenViewPopup,
      onCloseViewPopup,
    } = useViewPopup();

    const cardBodyStyle = ref({
      padding: "16px 24px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      wordBreak: "break-all",
      width: "100%",
    });
    const colorList = ["#f56a00", "#f56a10", "#f56a20"];
    const avatarValue = ref(userList[0]);
    const color = ref(colorList[0]);
    const changeValue = () => {
      const index = userList.indexOf(avatarValue.value);
      avatarValue.value =
        index < userList.length - 1 ? userList[index + 1] : userList[0];
      color.value =
        index < colorList.length - 1 ? colorList[index + 1] : colorList[0];
    };

    const handleLiCardStyle = (item, index) => {
      console.log("item==>", item);
      console.log("index==>", index);
      if (index == 0) {
        return {
          width: "300px",
        };
      } else {
        return {
          width: "300px",
          marginLeft: "24px",
        };
      }
    };

    const shareSubmit = (item) => {
      console.log("in [shareSubmit]");
      console.log("item==>", item);
      const onChainChatArray = JSON.parse(localStorage.getItem("onChainChat"));
      onChainChatArray.forEach((element) => {
        if (element.uuid == item.uuid) {
          element.users = item.users;
          element.updateAt = Date.now();
        }
      });
      localStorage.setItem("onChainChat", JSON.stringify(onChainChatArray));
      console.log("onChainChatArray==>", onChainChatArray);
    };

    const {
      switchUserDialogVisible,
      localCurrentUser,
      localUserList,
      onOpenSwitchUserPopup,
      onCloseSwitchUserPopup,
      onSubmitSwitchUserPopup,
    } = switchUserPopup({ userList, avatarSrc });

    const renderChatArray = ref([]);
    const renderOnChainChatArray = ref([]);
    watchEffect(() => {
      renderChatArray.value = [];
      renderOnChainChatArray.value = [];
      console.log("localCurrentUser.value==>", localCurrentUser.value);
      chatArray.value.forEach((element) => {
        if (
          element.users.indexOf(JSON.parse(localCurrentUser.value)["name"]) > -1
        ) {
          renderChatArray.value.push(element);
        }
      });
      onChainChatArray.value.forEach((element) => {
        if (
          element.users.indexOf(JSON.parse(localCurrentUser.value)["name"]) > -1
        ) {
          renderOnChainChatArray.value.push(element);
        }
      });
    });

    const { onNodeStatusChange, nodeStatus } = nodeStatusChangeClass();

    return {
      chatArray,
      onChainChatArray,
      renderChatArray,
      renderOnChainChatArray,

      visible,
      loading,
      isEdit,
      chatData,
      onOpenPopup,
      onClosePopup,
      onDeletePopup,
      onSubmitPopup,
      onToChainPopup,
      onOpenSharePopup,

      chatViewDialogVisible,
      onChainChatData,
      onOpenViewPopup,
      onCloseViewPopup,

      userList,
      avatarSrc,
      cardBodyStyle,
      avatarValue,
      color,
      changeValue,

      handleLiCardStyle,

      moment,

      shareSubmit,

      switchUserDialogVisible,
      localCurrentUser,
      localUserList,
      onOpenSwitchUserPopup,
      onCloseSwitchUserPopup,
      onSubmitSwitchUserPopup,

      nodeStatus,
      onNodeStatusChange,
    };
  },
});
</script>

<style scoped>
/* #components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
} */
.site-layout-background {
  background: #fff;
}
.logo {
  display: inline-flex;
  justify-content: end; /* 水平居右 */
  align-items: center; /* 垂直居中 */
  height: 100%;
  float: left;
}
.avatar {
  display: inline-flex;
  justify-content: end; /* 水平居右 */
  align-items: center; /* 垂直居中 */
  height: 100%;
  float: right;
}
.hovered:hover {
  background: #f5f5f5;
  cursor: pointer;
}

.nav {
  display: flex;
  /* padding-top: 24px; */
  /* padding-bottom: 24px; */
  margin: 0px;
  padding: 0px;
  /* padding-bottom: 12px; */
  /* background-color: #f3f5f7; */
  overflow-x: auto;
}
.nav li {
  /* flex: 1; */
  display: flex;
  /* flex-direction: column;
  font-size: 16px;
  justify-content: center;
  align-items: center; */
  /* width: 88px; */
  /* flex-basis: 88px; */
  /* flex-shrink: 0; */
  /* white-space: nowrap; */
}

.heartbeat-text {
  display: inline-block;
  animation: heartbeat 1.2s infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  10% {
    transform: scale(1.1);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
