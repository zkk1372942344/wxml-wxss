export default{
    install(Vue){

        let app=new Vue({
            data:{
                msg:"正在加载，请稍等",
                flag:false
            },
            template:`
                <div v-show="flag" style="position:fixed;width:100vw;left:0;top:0;height:100vh;line-height:100vh;text-align:center;background:rgba(0,0,0,0.5)">
                        {{msg}}
                </div>
            `
        })
        var node=document.createElement("div");
        document.body.appendChild(node);
        app.$mount(node);

        Vue.prototype.$loading={
            show(a){
                app.msg=a||"正在加载，请稍等";
                app.flag=true
            },
            hide(){
                app.flag=false;
            }
        }

    }
}