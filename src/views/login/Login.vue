<template>
  <div>
    <div id="login">
      <div>
        <p class="login_logo"><i></i></p>
      </div>
      <a-row>
        <a-col :span="14"></a-col>
        <a-col :span="8">
          <a-card
            title="登陆TS系统"
            :headStyle="{ color: '#fff', textAlign: 'center', border: 'none' }"
            :bodyStyle="{ padding: 0, marginTop: '20px' }"
            class="login_form"
          >
            <a-form :form="form" @submit="loginSubmit">
              <a-form-item>
                <a-input
                  placeholder="手机号"
                  v-decorator="[
                    'phone',
                    {
                      rules: [
                        {
                          required: true,
                          message: '请输入用户手机号!',
                        },
                      ],
                    },
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  placeholder="密码"
                  type="password"
                  v-decorator="[
                    'pwd',
                    {
                      rules: [
                        {
                          required: true,
                          message: '请输入用户密码!',
                        },
                      ],
                    },
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item style="text-align: right">
                <a-button type="danger" html-type="submit"> 登陆 </a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
    </div>
    <div
      class="background_img"
      :style="{ backgroundImage: `url(${randomImg})` }"
    ></div>
  </div>
</template>

<script>
import { Button, Row, Col, Card, Form, Input, Icon } from "ant-design-vue";
import { user } from "../../request";

export default {
  name: "Login",
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    ACard: Card,
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AIcon: Icon,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "form_login" });
  },
  data() {
    return {
      imgs: [
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo1.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo2.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo3.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo4.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo5.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo6.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo7.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo8.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo9.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo10.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo0.jpg",
      ],
    };
  },
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { data } = await user.login(values);
          if (data.token) {
            this.$message.success('登陆成功!');
            
          }
        }
      });
    },
  },
  computed: {
    randomImg() {
      return this.imgs[parseInt(10 * Math.random())];
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  height: 100vh;
  overflow: hidden;
  .login_logo {
    width: 62%;
    height: 50px;
    margin: 5vh auto;
    i {
      display: inline-block;
      width: 159px;
      height: 47px;
      background-image: url("~assets/logo-log.png");
    }
  }
  .login_form {
    border: none;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 310px;
  }
  .ant-form {
    margin: 0 auto 30px;
    width: 80%;
  }
}
.background_img {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  animation: QR-move 60s;
  -moz-animation: QR-move 60s;
  -webkit-animation: QR-move 60s;
  -o-animation: QR-move 60s;
  transform: scale(1.3, 1.3);
  @keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
  @-moz-keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
  @-webkit-keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
  @-o-keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
}
</style>