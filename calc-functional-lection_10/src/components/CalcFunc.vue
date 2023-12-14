<template>
    <div>
        <input class="input" type="text" v-model="operand1">
        <input class="input" type="text" v-model="operand2">
        {{ result }}
        <div>
            <button v-for="operand in operands" v-bind:key="operand" @click="calculate(operand)">
                {{ operand }}
            </button>
            <!-- <button @click="calculate('+')">+</button>
            <button @click="calculate('-')">-</button>
            <button @click="calculate('*')">*</button>
            <button @click="calculate('/')">/</button> -->
        </div>
        <div>
            <div v-show="error">
                {{ error }}
            </div>

        </div>
        <div>
            Число Фибонначи для первого поля ввода {{ fib1 }}<br>
            Число Фибонначи для второго поля ввода {{ fib2 }}<br>
        </div>
        <div>
            <p>История операций</p>
            <div>
                <div v-for="log in logs" :key="log.id">
                    {{ log }}
                </div>
            </div>
        </div>
        <div>
            <template v-if="result < 0">отрицательное число</template>
            <template v-if="result > 0 && result < 100">число от 0 до 100</template>
            <template v-if="result > 100">число больше 100</template>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'CLICalcFunc',

    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            operands: ['+', '-', '/', '*'],
            error: '',
            logs: {},
        };
    },

    methods: {
        add() {
            this.result = Number(this.operand1) + Number(this.operand2);
        },
        minus() {
            this.result = this.operand1 - this.operand2;
        },
        mult() {
            this.result = this.operand1 * this.operand2;
        },
        div() {
            const { operand1, operand2 } = this;
            if (operand2 === 0) {
                this.error = 'Делить на 0 нельзя!'
            } else {
                this.result = operand1 / operand2;
            }
        },
        fib(n) {
            return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
        },
        calculate(operation = '+') {
            this.error = ''
            switch (operation) {
                case '+':
                    this.add()
                    break;
                case '-':
                    this.minus()
                    break;
                case '*':
                    this.mult()
                    break;
                case '/':
                    this.div()
                    break;
            }
            const key = Date.now()
            const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
            Vue.set(this.logs, key, value)
        },

    },
    computed: {
        fib1() {
            return this.fib(this.operand1);
        },
        fib2() {
            return this.fib(this.operand2);
        }
    }
};
</script>

<style lang="scss" scoped></style>