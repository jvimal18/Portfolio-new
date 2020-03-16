<template>
  <div id="tc2021">
    <form>
      <div class="input-field" v-for="(income, idx) in IncomeTags" :key="idx">
        <label>{{income}}</label>
        <input type="text" :id="`form-${idx}`" :ref="`form-${idx}`" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IncomeTags: [
        "Income From Salary",
        "Income From Interest",
        "Income From Paid Home Loan",
        "Rental Income Received",
        "Exemptions & Deductions from Salary",
        "Other Income",
        "Interest Paid on Loan"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#tc2021 {
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #ffffff;

    .input-field {
      flex: 0 0 40%;
      margin: .5rem 1rem;
      display: flex;
      flex-flow: column;
      align-items: flex-start;

      input[type="text"] {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
        outline: none;
        margin: 1rem 0;
      }
    }
  }
}
</style>