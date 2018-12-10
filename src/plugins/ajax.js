export default {
    install(Vue) {
        function ajax(url) {
            return new Promise((resolve, reject) => {

                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.send();
                xhr.onreadystatechange = function() {
                    if (xhr.status == 200 && xhr.readyState == 4) {
                        resolve(xhr.responseText)
                    }
                }

            })
        }

        Vue.prototype.$ajax = ajax;

    }
}