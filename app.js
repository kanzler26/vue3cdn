const App = {
    //данные которые есть в приложении
    data() {
        return {
            title: 'Список заметок',
            placeholderString: "введите название заметки",
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2'],
        }
    },
    //объект который содержит различные пользовательские функции
    methods: {
        addNewNote() {
            if (this.inputValue != '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },

        delNote(iter) {
            this.notes.splice(iter, 1);
            //    ul.removeChild(event.target.parentElement);
        }
    },
    //computed свойства должны всегда что то возвращать
    //и изменять какие то данные из объекта data
    //используется когда нужно измененить данные в data 
    computed: {
        doubleCountComp() {
            console.log('doubleCount')
            return this.notes.length * 2
        },
    },
    //позволяет следить за изменением данных в компонентах
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

const app = Vue.createApp(App)
//за счет указания конкретного элемента, vue перерисует только этот селектор
app.mount('#app')
