const Banco = {
    conta: "65432-1",
    saldo: 3000,
    tipoConta: "Conta Corrente",
    agencia: "Agência 001",
    
    buscarSaldo: function() {
      return this.saldo;
    },
    
    deposito: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
      } else {
        return "Valor de depósito inválido.";
      }
    },
    
    saque: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
      } else {
        return "Valor de saque inválido ou saldo insuficiente.";
      }
    },
    
    numeroConta: function() {
      return this.conta;
    }
  };
  
  // Exemplo da atividade pedida
  console.log("Número da Conta: " + Banco.numeroConta());
  console.log("Saldo Atual: R$" + Banco.buscarSaldo());
  console.log(Banco.deposito(1000));
  console.log(Banco.saque(100));
  