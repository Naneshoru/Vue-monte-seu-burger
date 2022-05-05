<template>
  <form id="burger-form" method="POST" @submit.prevent="createBurgerRequest">
    <div class="input-container">
      <label for="nome">Nome do cliente:</label>
      <input type="text" id="nome" name="nome" v-model="nome" placeholder="Ex: André Marques da Silva">
    </div>

    <div class="input-container">
      <label for="pao">Escolha o pão:</label>
      <select name="pao" id="pao" v-model="pao">
        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
          {{ pao.tipo }}
        </option>
      </select>
    </div>

    <div class="input-container">
      <label for="carne">Escolha a carne do seu Burger:</label>
      <select name="carne" id="carne" v-model="carne">
        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
          {{ carne.tipo }}
        </option>
      </select>
    </div>

    <div id="opcionais-container" class="input-container">
      <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
      <div class="checkbox-container" v-for="opcional in opcionaisBackend" :key="opcional.id">
        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
        <span>{{ opcional.tipo }}</span>
      </div>
    </div>

    <div class="input-container">
      <button class="submit-btn" type="submit">Criar meu Burger!</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BurgerForm',
  data() {
    return {
      paes: [],
      carnes: [],
      opcionaisBackend: [],
      nome: '',
      pao: '',
      carne: '',
      opcionais: [],
      msg: ''
    }
  },
  methods: {
    resetData() {
      this.nome = '',
      this.pao = this.paes[0].tipo,
      this.carne = this.carnes[0].tipo;
      this.opcionais = []
    },
    setIngredients(paes, carnes, opcionais) {
      this.paes = paes;
      this.carnes = carnes;
      this.opcionaisBackend = opcionais;
    },
    setDefaultFieldsValues() {
      this.pao = this.paes[0].tipo;
      this.carne = this.carnes[0].tipo;
    },
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredientes');
      const data = await req.json();

      this.setIngredients(data.paes, data.carnes, data.opcionais);

      this.setDefaultFieldsValues();

      return data;
    },
    createData(nome, pao, carne, opcionais, status) {
      return {
        nome: nome,
        pao: pao,
        carne: carne,
        opcionais: opcionais,
        status: status
      }
    },
    async createBurgerRequest() {
      const data = this.createData(this.nome, this.pao, this.carne, this.opcionais, 'Solicitado', this.msg);

      const dataJson = JSON.stringify(data);

      const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: dataJson
      });  
      
      const res = await req.json();

      this.resetData();
    }
  },
  mounted() {
    this.getIngredients()
  }
}
</script>

<style scoped>
   #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid var(--light-accent);
  }

  input, select, button {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color:var(--light-accent);
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>