export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
        show() {
            BX24.callMethod('user.get', { ID: 1 }, function (res) {
                if (res.data()) {
                    var user = res.data()[0];
                    if (!!user)
                        alert('Пользователя №' + user.ID + ' зовут ' + user.NAME);
                }
            }
            )
        },

        result(result) {
            if (result.error())
                console.error(result.error());
            else {
                console.log(result.data());
            }
        },
        create() {
            BX24.callMethod('entity.add', { 'ENTITY': 'dish', 'NAME': 'Dishes', 'ACCESS': { U1: 'W', AU: 'R' } }, this.result);

        },
        get() {
            BX24.callMethod(
                "entity.get",
                {},
                function (result) {
                    if (result.error())
                        console.error(result.error());
                    else {
                        console.info("Список созданных хранилищ:", result.data());
                    }
                }
            )
        }
    }

};