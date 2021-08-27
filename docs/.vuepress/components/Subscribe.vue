<template>
    <div>
        <p :style="{color: tipdata.color}">{{ tipdata.msg }}</p>
        <input v-show="!success" autocomplete="off" type="email" placeholder="您的邮箱" v-model="email" @keydown.enter="subscribe"/>
        <button v-show="!success" @click="subscribe" :disabled="disabled">确定</button>
        <!-- <button v-show="success" @click="goback">返回上一页</button> -->
    </div>
</template>

<script>
export default {
    name: 'Subscribe',
    data: () => ({
        email: '',
        tipdata: {
            color: 'black',
            msg: ''
        },
        disabled: false,
        success: false
    }),
    methods: {
        subscribe: function() {
            if (!this.email) return this.tip('邮箱为空', 'red')
            if (!/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) return this.tip('邮箱格式错误', 'red')
            const requestOptions = {
                method: 'POST',
                headers: new Headers({"Content-Type":"application/json"}),
                body: JSON.stringify({"email":this.email}),
                redirect: 'follow'
            };
            this.disabled = true
            this.tip("正在订阅...", 'yellow')
            fetch("https://service-p1mf4nd7-1301539318.sh.apigw.tencentcs.com/release/subscribe", requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.tip(result.msg, 'green')
                    this.success = true
                })
                .catch(error => this.tip('Error: ' + error.toString(), 'red'))
                .finally(() => this.disabled = false)
        },
        tip: function(msg, color) {
            this.tipdata.color = color
            this.tipdata.msg = msg
        },
        goback: function() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
button {
    cursor: text;
    height: 2.8rem;
    color: black;
    display: inline-block;
    border: 1px solid #cfd4db;
    border-radius: 2rem;
    font-size: 0.9rem;
    outline: none;
    width: 100%;
    transition: all 0.2s ease;
    background-size: 1rem;
    background-color: white;
}
button:hover {
    background: rgb(230, 230, 230);
}
button:active {
    background: #094;
    color: white;
}
input{
    margin: 5px 0px;
    cursor: text;
    height: 2rem;
    color: #4e6e8e;
    display: inline-block;
    border: 1px solid #cfd4db;
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    outline: none;
    width: calc(100% - 2rem);
    transition: all 0.2s ease;
    background-size: 1rem;
}
input:focus {
    cursor: auto;
    border-color: #094;
}
</style>