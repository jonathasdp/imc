# Calculadora de IMC

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.1. Ele foi desenvolvido como atividade para a aula de Web Architectures na Impacta Tecnologia com o objetivo simples de calcular o Índice de Massa Corporal (IMC) de um indivíduo, de acordo com a fórmula:

```
IMC = Peso / Altura²
```
Dependendo do valor resultante, o aplicativo categoriza o IMC da seguinte maneira:
- **Magreza**: Quando o IMC é menor que 18,5 kg/m2;
- **Normal**: Quando o IMC está entre 18,5 e 24,9 kg/m2;
- **Sobrepeso**: Quando o IMC está entre 24,9 e 30 kg/m2;
- **Obesidade**: Quando o IMC é maior que 30 kg/m2.

## Servidor de Desenvolvimento

Rode `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo irá recarregar automaticamente se você alterar qualquer um dos arquivos originais
