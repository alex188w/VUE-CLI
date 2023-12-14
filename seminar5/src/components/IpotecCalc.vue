<!-- Задание 4 (20 минут)
Вам необходимо создать компонент ипотечного калькулятора, 
который позволяет пользователю вводить сумму кредита, 
процентную ставку и срок кредита. Компонент должен автоматически 
вычислять ежемесячный платеж и общую сумму выплаты по кредиту.
1. Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
2. В шаблоне компонента разместите поля ввода для суммы кредита, процентной 
ставки и срока кредита, а также элементы для отображения ежемесячного платежа 
и общей суммы выплаты.
3. Используйте директиву v-model для связывания введенных пользователем 
значений с соответствующими свойствами в компоненте.
4. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять 
ежемесячный платеж на основе введенных значений суммы кредита, процентной 
ставки и срока кредита.
5. Создайте вычисляемое свойство totalPayment, которое будет вычислять общую 
сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
6. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах 
шаблона -->

<template>
    <div>
        <label for="loanAmount">Сумма кредита</label>
        <input type="number" id="loanAmount" v-model.number="loanAmount"><br>
        <label for="interestRate">Процентная ставка</label>
        <input type="number" step="0.01" id="interestRate" v-model.number="interestRate"><br>
        <label for="loanTerm">Время кредита</label>
        <input type="number" id="loanTerm" v-model.number="loanTerm">
        <p>Ежемесячный платеж - {{ monthlyPayment }}</p>
        <p>Полная сумма - {{ totalPayment }}</p>
    </div>
</template>

<script>
export default {
    name: 'IpotecCalc',

    data() {
        return {
            loanAmount: 1000000,
            interestRate: 10,
            loanTerm: 120
        };
    },

    methods: {

    },
    computed: {
        monthlyPayment: function () {
            const rate = this.interestRate / 100 / 12
            const term = this.loanTerm
            const principal = this.loanAmount
            const numerator = rate * Math.pow(1 + rate, term)
            const denominator = Math.pow(1 + rate, term) - 1
            const payment = principal * (numerator / denominator)
            return payment.toFixed(2)
        },
        totalPayment: function () {
            const term = this.loanTerm
            const payment = parseFloat(this.monthlyPayment)
            return (term * payment).toFixed(2)
        },

    }
};
</script>

<style lang="scss" scoped></style>