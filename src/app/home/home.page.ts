import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {

  constructor() { }

  // ---------- VARIÁVEIS GORJETA ----------
  valorRange = 0;         // Porcentagem selecionada pelo usuário (0 a 100)
  gorjeta = 0;            // Valor da gorjeta calculada
  valorConta = 0;         // Valor total da conta
  valorTotalConta = 0;    // Conta + gorjeta


  // ---------- VARIÁVEIS CONVERSÃO DE MEDIDAS ----------
  valorRangeUM = 0;             // Valor numérico inserido para conversão
  valorRangeKm = 0;             // Valor em quilômetros convertido para metros
  valorRangeM = 0;              // Valor em metros
  tipoMedida = "";              // Tipo original (quilômetros ou metros)
  tipoMedidaConverter = "";     // Para qual unidade será convertido (milhas ou pés)
  quilometros = 0;              // Valor em km
  milhas = 0;                   // Valor em milhas
  convertido = "";             // Resultado final convertido (string formatada)


  // ---------- VARIÁVEIS IMC ----------
  valorRangeAltura = 0;    // Altura em cm
  valorRangePeso = 0;      // Peso em kg
  valorIMC = "";           // Resultado do IMC
  classificarIMC = "";     // Classificação do resultado do IMC


  // ---------- VARIÁVEIS EMPRÉSTIMO ----------
  valorEmprestimo = 0;          // Valor total do empréstimo
  porcentagemJurosAnual = 0;    // Juros ao ano (em %)
  NumMeses = 0;                 // Quantidade de meses para pagar
  prestacaoMesal = "";          // Valor da prestação mensal
  totalPagar = "";              // Total a ser pago no final


  // ---------- VARIÁVEIS DESCONTO ----------
  valorProduto = 0;         // Valor original do produto
  valorDesconto = 0;        // Porcentagem de desconto
  porcentDesconto = 0;      // Valor convertido da porcentagem
  descontoDado = 0;         // Valor final com desconto
  calcularPorcentValor = 0; // Valor do desconto em dinheiro


  // ---------- VARIÁVEIS APP TRANPORTE ----------
  tipoCarro = "";         // Tipo selecionado: normal, superior ou vip
  normal = 0;             // Placeholder não utilizado
  superior = 0;
  vip = 0;
  valorKM = 0;            // Quilômetros da corrida
  valorViagem = 0;        // Valor total da viagem
  valorApp = 0;           // Percentual do valor que vai para o app
  valorMotorista = 0;     // Valor final que vai para o motorista


  // ---------- VARIÁVEIS COMBUSTÍVEL ----------
  gasolina = 0;           
  etanol = 0;
  diesel = 0;
  valorKMCombustivel = 0;   // Quilômetros a serem percorridos
  tipoCombustivel = "";     // Tipo escolhido
  valorFinalCombustivel = "";  // Valor total do combustível
  litrosConsumidos = 0;
  valorPorLitro = 0;
  mediaKM = 0;               // Média de consumo do carro (km/L)

  // ---------- BOTÕES DE ALERTA ----------
  alertButtons = ["voltar"];
  alertButtons1 = ["ok"];

  // ---------- CONVERSOR TEMPERATURA ----------
  grausCelsius = "";
  grausFahrenheit = "";
  FahrenheitValor = "";
  CelsiusValor = "";

  // ---------- TRIÂNGULO ----------
  lado1 = "";
  lado2 = "";
  lado3 = "";
  triangulo = "";

  // ---------- MÉDIA ESCOLAR ----------
  nota1 = "";
  nota2 = "";
  nota3 = "";
  nota4 = "";
  valorMedia = "";
  definicaoMedia = "";


  // ---------- GORJETA ----------
  calcularGorjeta(ev: RangeCustomEvent) {
    this.valorRange = Number(ev.detail.value.toString()) / 100;
    this.gorjeta = (Number(this.valorRange * this.valorConta));
    this.valorTotalConta = Number(this.gorjeta + this.valorConta);
  }


  // ---------- CONVERSOR DE MEDIDAS ----------
  converterMedidas(ev: RangeCustomEvent) {
    this.valorRangeUM = Number(ev.detail.value.toString());
    if (this.tipoMedida === "quilometros" && this.tipoMedidaConverter === "milhas") {
      this.valorRangeKm = Number(ev.detail.value.toString()) * 1000;
      this.convertido = (Number(this.valorRangeUM) / 1.609).toFixed(2);
    } if (this.tipoMedida === "quilometros" && this.tipoMedidaConverter === "pes") {
      this.valorRangeKm = Number(ev.detail.value.toString()) * 1000;
      this.convertido = (Number(this.valorRangeUM) * 3281).toFixed(2);
    } if (this.tipoMedida === "metros" && this.tipoMedidaConverter === "milhas") {
      this.valorRangeM = Number(ev.detail.value.toString());
      this.convertido = (Number(this.valorRangeUM) / 1609).toFixed(2);
    } if (this.tipoMedida === "metros" && this.tipoMedidaConverter === "pes") {
      this.valorRangeM = Number(ev.detail.value.toString());
      this.convertido = (Number(this.valorRangeUM) * 3.281).toFixed(2);
    }
  }


  // ---------- IMC ----------
  atualizarAltura(ev: RangeCustomEvent) {
    this.valorRangeAltura = Number(ev.detail.value.toString());
    this.calcularIMC();
  }

  atualizarPeso(ev: RangeCustomEvent) {
    this.valorRangePeso = Number(ev.detail.value.toString());
    this.calcularIMC();
  }

  calcularIMC() {
    const alturaMetro = this.valorRangeAltura / 100;
    this.valorIMC = Number(this.valorRangePeso / (alturaMetro * alturaMetro)).toFixed(2);

    if (Number(this.valorIMC) < 18.5) {
      this.classificarIMC = `${this.valorIMC}. Você está abaixo do peso!`
    } else if (Number(this.valorIMC) >= 18.5 && Number(this.valorIMC) <= 24.9) {
      this.classificarIMC = `${this.valorIMC}. Você está saudável!`
    } else if (Number(this.valorIMC) >= 25 && Number(this.valorIMC) < 30) {
      this.classificarIMC = `${this.valorIMC}. Você está sobrepeso!`
    } else {
      this.classificarIMC = `${this.valorIMC}. Você está obeso!`
    }
  }


  // ---------- EMPRÉSTIMO ----------
  selecionarEmprestimo(ev: RangeCustomEvent) {
    this.valorEmprestimo = Number(ev.detail.value.toString());
    this.totalEmprestimo();
  }

  selecionarJuros(ev: RangeCustomEvent) {
    this.porcentagemJurosAnual = Number(ev.detail.value.toString());
    this.totalEmprestimo();
  }

  selecionarMeses(ev: RangeCustomEvent) {
    this.NumMeses = Number(ev.detail.value.toString());
    this.totalEmprestimo();
  }

  totalEmprestimo() {
    const valorPorcentJuros = (this.porcentagemJurosAnual / 12) / 100;

    this.prestacaoMesal = ((this.valorEmprestimo * valorPorcentJuros) / (1 - (1 + valorPorcentJuros) ** -this.NumMeses)).toFixed(2);
    this.totalPagar = (Number(this.prestacaoMesal) * this.NumMeses).toFixed(2);
  }

  // ---------- DESCONTO ----------
  calcularDesconto(ev: RangeCustomEvent) {
    this.valorDesconto = Number(ev.detail.value.toString());
    const porcentDesconto = this.valorDesconto / 100;
    this.calcularPorcentValor = porcentDesconto * this.valorProduto;
    this.descontoDado = this.valorProduto - this.calcularPorcentValor;
  }

  // ---------- APP DE TRANSPORTE ----------
  verificarValorViagem() {
    if (this.tipoCarro === "normal") {
      this.valorViagem = (this.valorKM * 2.5) + 5;
    } else if (this.tipoCarro === "superior") {
      this.valorViagem = (this.valorKM * 3.5) + 7.5;
    } else {
      this.valorViagem = (this.valorKM * 5.5) + 10;
    }
    this.valorApp = (this.valorViagem) * 0.25;
    this.valorMotorista = (this.valorViagem) * 0.75;
    if (this.valorViagem > 150) {
      this.valorApp = (this.valorViagem) * 0.2;
      this.valorMotorista = (this.valorViagem) * 0.8;
      return;
    }
  }


  // ---------- CÁLCULO COMBUSTÍVEL ----------
  verificarValorCombustivel() {
    if (this.tipoCombustivel === "gasolina") {
      this.mediaKM = 12;
      this.valorPorLitro = 5;
    } else if (this.tipoCombustivel === "etanol") {
      this.mediaKM = 9;
      this.valorPorLitro = 4;
    } else {
      this.mediaKM = 15;
      this.valorPorLitro = 6;
    }
    this.litrosConsumidos = this.valorKMCombustivel / this.mediaKM;
    this.valorFinalCombustivel = (this.valorPorLitro * this.litrosConsumidos).toFixed(2);
  }


  // ---------- CONVERSOR TEMPERATURA ----------
  celsiusParaFahrenheit() {
    this.FahrenheitValor = ((parseFloat(this.grausCelsius) * 9 + 160) / 5).toString();
  }

  fahrenheitParaCelsius() {
    this.CelsiusValor = ((parseFloat(this.grausFahrenheit) - 32) * (5 / 9)).toString();
  }


  // ---------- VERIFICADOR TRIÂNGULO ----------
  verificarTriangulo() {
    if (this.lado1 < this.lado2 + this.lado3 && this.lado2 < this.lado1 + this.lado3 && this.lado3 < this.lado1 + this.lado2) {
      if (this.lado1 == this.lado2 && this.lado2 == this.lado3 && this.lado1 == this.lado3) {
        this.triangulo = ("É um tringulo equilátero");
      }
      else if (this.lado1 != this.lado2 && this.lado2 != this.lado3 && this.lado1 != this.lado3) {
        this.triangulo = ("É um triângulo escaleno");
      } else {
        this.triangulo = ("É um triângulo isosceles");
      }
    } else {
      this.triangulo = ("Os lados informados não formam um triângulo!");
    }
  }

  
  // ---------- MÉDIA ESCOLAR ----------
  media() {
    this.valorMedia = (((parseFloat(this.nota1)) + (parseFloat(this.nota2)) + (parseFloat(this.nota3)) + (parseFloat(this.nota4))) / 4).toString();

    if (Number(this.valorMedia) < 3) {
      this.definicaoMedia = (`Sua média é ${this.valorMedia}! Você está retido.`);
    }
    else if (Number(this.valorMedia) >= 3 && Number(this.valorMedia) <= 5.9) {
      this.definicaoMedia = (`Sua média é ${this.valorMedia}! Você está de recuperação :(`);
    }
    else {
      this.definicaoMedia = (`Sua média é ${this.valorMedia}! Você está de aprovado, parabéns (:)`);
    }
  }

}
