<template>
    <div>
        <p :style="{color: tipdata.color}">{{ tipdata.msg }}</p>
        <button v-show="!success" @click="unsubscribe" :disabled="disabled">取消订阅</button>
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
        unsubscribe: function() {
            if (!this.$route.query.uid) return this.tip('缺少参数: uuid', 'red')
            const requestOptions = {
                method: 'POST',
                headers: new Headers({"Content-Type":"application/json"}),
                body: JSON.stringify({"uid":this.$route.query.uid}),
                redirect: 'follow'
            };
            this.disabled = true
            fetch("https://service-p1mf4nd7-1301539318.sh.apigw.tencentcs.com/release/unsubscribe", requestOptions)
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
    margin-bottom: 10px;
}
button:hover {
    background: rgb(230, 230, 230);
}
button:active {
    background: #094;
    color: white;
}
@media (prefers-color-scheme: dark) {
    button {
        color: white;
        background-color: #18191a
    }
    button:hover {
        color: black;
    }
    button:active {
        color: white;
    }
}
</style>